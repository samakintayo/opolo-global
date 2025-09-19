// mock-centiiv-server.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/v1/direct-pay", (req, res) => {
  console.log("Received payment request:", req.body);
  res.json({
    success: true,
    data: {
      id: `test-${Date.now()}`,
      authorization_url: "http://localhost:3002/mock-payment"
    }
  });
});

app.listen(3002, () => {
  console.log("✅ Mock Centiiv server running on http://localhost:3002");
});
