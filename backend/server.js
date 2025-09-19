const express = require("express");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { createObjectCsvWriter } = require("csv-writer");
const csvParser = require("csv-parser");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // frontend origin
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true, // if you use cookies
}));

// --- IMPORTANT: mount raw body parser ONLY for webhook ---
app.post(
  "/webhook/payment",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const event = JSON.parse(req.body.toString());
      console.log("📩 Webhook received:", JSON.stringify(event, null, 2));

      const eventType = event.event?.toLowerCase();

      // Only process payment-related events
      if (!eventType.includes("payment")) {
        return res.sendStatus(200);
      }

      const paymentId =
        event.data.id || event.data.metadata?.resourceId?.replace("DPL-", "");
      if (!paymentId) {
        console.error("❌ Webhook missing payment ID");
        return res.sendStatus(400);
      }

      // Normalize status
      let normalizedStatus = "pending";
      if (eventType.includes("success")) normalizedStatus = "success";
      else if (eventType.includes("fail")) normalizedStatus = "failed";

      // Load existing records
      let records = [];
      if (fs.existsSync(csvPath)) {
        records = await new Promise((resolve, reject) => {
          const rows = [];
          fs.createReadStream(csvPath)
            .pipe(csvParser())
            .on("data", (row) => rows.push(row))
            .on("end", () => resolve(rows))
            .on("error", reject);
        });
      }

      // Update or insert record
      const idx = records.findIndex((r) => r.PaymentId === paymentId);
      if (idx >= 0) {
        records[idx].Status = normalizedStatus;
        records[idx].PaidAt = new Date().toISOString();
      } else {
        records.push({
          PaymentId: paymentId,
          Status: normalizedStatus,
          Amount: event.data.amount / 100,
          PaidAt: new Date().toISOString(),
        });
      }

      // Rewrite CSV
      const csvWriter = createObjectCsvWriter({
        path: csvPath,
        header: CSV_HEADERS,
      });
      await csvWriter.writeRecords(records);

      console.log(`✅ Payment ${paymentId} updated to ${normalizedStatus}`);
      res.sendStatus(200);
    } catch (err) {
      console.error("Webhook error:", err.message);
      res.sendStatus(500);
    }
  }
);


// --- Normal JSON parser for the rest ---
app.use(express.json());

// --------------------
// Config & File Setup
// --------------------
const CENTIIV_API_KEY = process.env.CENTIIV_API_KEY;
const CENTIIV_BASE_URL = process.env.CENTIIV_BASE_URL;

const dataDir = path.join(__dirname, "data");
const csvPath = path.join(dataDir, "registrations.csv");

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const CSV_HEADERS = [
  { id: "Name", title: "Name" },
  { id: "Email", title: "Email" },
  { id: "Phone", title: "Phone" },
  { id: "Location", title: "Location" },
  { id: "ProgramType", title: "ProgramType" },
  { id: "Amount", title: "Amount" },
  { id: "PaymentId", title: "PaymentId" },
  { id: "Status", title: "Status" },
  { id: "Date", title: "Date" },
  { id: "PaidAt", title: "PaidAt" },
];

// Create CSV if not exists
if (!fs.existsSync(csvPath)) {
  const csvWriter = createObjectCsvWriter({
    path: csvPath,
    header: CSV_HEADERS,
    append: true,
  });
  csvWriter.writeRecords([]);
}

// --------------------
// Initiate Payment
// --------------------
app.post("/api/initiate-payment", async (req, res) => {
  try {
    const { name, email, phone, location, programType, amount } = req.body;

    const response = await axios({
      method: "POST",
      url: CENTIIV_BASE_URL,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${CENTIIV_API_KEY}`,
      },
      data: {
        amount,
        name,
        email,
        currency: "NGN",
        note: `Payment for ${programType}`,
        callback_url: "http://localhost:5173/payment-status", // frontend
        webhook_url: " https://2946a05fe189.ngrok-free.app/webhook/payment", // backend (replace ngrok link)
      },
    });

    if (!response.data?.success) {
      return res
        .status(500)
        .json({ success: false, message: "Centiiv API error" });
    }

    const paymentData = response.data.data;

    // Save pending record
    const csvWriter = createObjectCsvWriter({
      path: csvPath,
      header: CSV_HEADERS,
      append: true,
    });
    await csvWriter.writeRecords([
      {
        Name: name,
        Email: email,
        Phone: phone, 
        Location: location,
        ProgramType: programType,
        Amount: amount,
        PaymentId: paymentData.id,
        Status: "pending",
        Date: new Date().toISOString(),
        PaidAt: "",
      },
    ]);

    // Return checkout URL
    res.json({
      success: true,
      paymentUrl: `${paymentData.link}&callback_url=http://localhost:5173/payment-status`,
    });

    console.log("Centiiv initiated payment:", paymentData);
  } catch (error) {
    console.error("Initiation error:", error.response?.data || error.message);
    res
      .status(500)
      .json({ success: false, message: "Payment initiation failed" });
  }
});

// --------------------
// Verify Payment
// --------------------
app.get("/api/verify-payment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${CENTIIV_BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${CENTIIV_API_KEY}` },
    });

    const paymentStatus = response.data?.data?.status || "unknown";

    // Load CSV
    const records = await new Promise((resolve, reject) => {
      const rows = [];
      fs.createReadStream(csvPath)
        .pipe(csvParser())
        .on("data", (row) => rows.push(row))
        .on("end", () => resolve(rows))
        .on("error", reject);
    });

    // Update status
    const updatedRecords = records.map((record) =>
      record.PaymentId === id ? { ...record, Status: paymentStatus } : record
    );

    const csvWriter = createObjectCsvWriter({
      path: csvPath,
      header: CSV_HEADERS,
    });
    await csvWriter.writeRecords(updatedRecords);

    res.json({ success: true, status: paymentStatus });
  } catch (err) {
    console.error("Verification error:", err.response?.data || err.message);
    res
      .status(500)
      .json({ success: false, message: "Payment verification failed" });
  }
});

// --------------------
// Callback (user redirect)
// --------------------
app.get("/payment-callback", (req, res) => {
  const { status, id } = req.query;
  if (status === "success") {
    res.send("Payment successful! ✅ You can close this window.");
  } else {
    res.send("Payment failed or pending ❌");
  }
});
// --------------------
// Check Payment Endpoint
// --------------------
app.get("/api/check-payment/:id", async (req, res) => {
  const paymentId = req.params.id;
  try {
    if (!fs.existsSync(csvPath)) {
      return res.status(404).json({ success: false, message: "No records yet" });
    }

    const records = await new Promise((resolve, reject) => {
      const rows = [];
      fs.createReadStream(csvPath)
        .pipe(csvParser())
        .on("data", (row) => rows.push(row))
        .on("end", () => resolve(rows))
        .on("error", reject);
    });

    const record = records.find((r) => r.PaymentId === paymentId);
    if (!record) {
      return res.status(404).json({ success: false, message: "Payment not found" });
    }

    // Return proper JSON
    return res.json({
      success: true,
  payment: {
    id: record.PaymentId,
    status: normalizeStatus(record.Status),
    amount: parseFloat(record.Amount),
    paidAt: record.PaidAt || null,
  },
    });
    function normalizeStatus(status) {
  if (!status) return "unknown";

  const s = status.toLowerCase();

  if (["success", "successful"].includes(s)) return "success";
  if (["failed", "failure", "error"].includes(s)) return "failed";
  if (["pending", "processing"].includes(s)) return "pending";

  return s; // fallback 
    }
  } catch (err) {
    console.error("Check payment error:", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
});


// --------------------
// Start Server
// --------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
