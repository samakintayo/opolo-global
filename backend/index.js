// Use CommonJS (require) so Node understands
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Supabase (replace with your keys from app.supabase.com)
const supabase = createClient(
  "https://YOUR-PROJECT.supabase.co",
  "YOUR-SUPABASE-SECRET-KEY" // NEVER share this publicly
);

// API route: Save registration after payment
app.post("/api/register", async (req, res) => {
  const { name, email, phone, location, programme, amount } = req.body;

  const { data, error } = await supabase
    .from("registrations")
    .insert([{ name, email, phone, location, programme, amount, paid: true }]);

  if (error) return res.status(400).json({ success: false, error });
  res.json({ success: true, data });
});

// API route: Admin fetch all registrations
app.get("/api/registrations", async (req, res) => {
  const { data, error } = await supabase.from("registrations").select("*");

  if (error) return res.status(400).json({ success: false, error });
  res.json({ success: true, data });
});

app.listen(5000, () => console.log("✅ Backend running on http://localhost:5000"));
