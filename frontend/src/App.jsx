import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import PaymentStatus from "./paymentStatus";
import "./index.css"
import AiBootcamp from "./programme/AiBootcamp";
import Register from "./register";



function App() {
  return (
    <>
      <Router>
             <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/programme/ai-bootcamp" element={<AiBootcamp />} />
        <Route path="/payment-status" element={<PaymentStatus />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
