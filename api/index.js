// api/index.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { createObjectCsvWriter } = require("csv-writer");
const csvParser = require("csv-parser");
require("dotenv").config();
const serverless = require("serverless-http");

const app = express();

// --------------------
// Middleware
// --------------------
app.use(
  cors({
    origin: "http://localhost:5173", // change this to your frontend URL when deployed
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Raw parser ONLY for webhook
app.post(
  "/webhook/payment",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const event = JSON.parse(req.body.toString());
      console.log("📩 Webhook received:", JSON.stringify(event, null, 2));

      const eventType = event.event;
      if (eventType === "payment.success") {
        const paymentData = event.data;

        console.log("✅ Payment successful webhook received:", paymentData);

        // Update CSV (⚠️ not persistent in Vercel)
        if (fs.existsSync(csvPath)) {
          const rows = [];
          fs.createReadStream(csvPath)
            .pipe(csvParser())
            .on("data", (row) => rows.push(row))
            .on("end", async () => {
              const recordIndex = rows.findIndex(
                (r) => r.PaymentId === paymentData.id
              );
              if (recordIndex >= 0) {
                rows[recordIndex].Status = "PAID";
                rows[recordIndex].PaidAt = new Date().toISOString();

                const csvWriter = createObjectCsvWriter({
                  path: csvPath,
                  header: CSV_HEADERS,
                });
                await csvWriter.writeRecords(rows);
                console.log("💾 CSV updated via webhook");
              }
            });
        }
      }

      res.json({ received: true });
    } catch (err) {
      console.error("❌ Webhook error:", err);
      res.status(400).send("Webhook error");
    }
  }
);

// JSON parser for other routes
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

// --------------------
// Routes
// --------------------

// Initiate Payment
app.post("/api/initiate-payment", async (req, res) => {
  const { name, email, phone, location, programType, amount } = req.body;

  try {
    const response = await axios.post(
      `${CENTIIV_BASE_URL}/api/v1/payments`,
      {
        amount,
        currency: "NGN",
        email,
        metadata: {
          name,
          phone,
          location,
          programType,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${CENTIIV_API_KEY}`,
        },
      }
    );

    const paymentData = response.data.data;

    // Save to CSV (⚠️ not persistent in Vercel)
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
        Status: "PENDING",
        Date: new Date().toISOString(),
        PaidAt: "",
      },
    ]);

    res.json({ paymentData });
  } catch (error) {
    console.error("❌ Error initiating payment:", error.response?.data || error);
    res.status(500).json({ error: "Failed to initiate payment" });
  }
});

// Verify Payment
app.get("/api/verify-payment/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(
      `${CENTIIV_BASE_URL}/api/v1/payments/${id}`,
      {
        headers: {
          Authorization: `Bearer ${CENTIIV_API_KEY}`,
        },
      }
    );

    const payment = response.data.data;
    res.json({ payment });
  } catch (error) {
    console.error("❌ Error verifying payment:", error.response?.data || error);
    res.status(500).json({ error: "Failed to verify payment" });
  }
});

// Check Payment Status
app.get("/api/check-payment/:id", async (req, res) => {
  const { id } = req.params;

  if (!fs.existsSync(csvPath)) {
    return res.status(404).json({ error: "No records found" });
  }

  const rows = [];
  fs.createReadStream(csvPath)
    .pipe(csvParser())
    .on("data", (row) => rows.push(row))
    .on("end", () => {
      const record = rows.find((r) => r.PaymentId === id);
      if (record) {
        res.json(record);
      } else {
        res.status(404).json({ error: "Payment not found" });
      }
    });
});

// --------------------
// Export as serverless handler
// --------------------
module.exports = app;
module.exports.handler = serverless(app);
