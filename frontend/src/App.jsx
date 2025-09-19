import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import SuccessPage from "./SuccessPage";
import RegistrationForm from "./RegistrationForm";
import PaymentStatus from "./paymentStatus";
import "./index.css"
import AiBootcamp from "./programme/AiBootcamp";
import Register from "./register";



function App() {
  return (
    <>
      <Router>
        {/* <h1 className="text-3xl font-bold lunestBlue font-aeonik">Our Programmes</h1> */}
        {/* <Link to="/programme/ai-bootcamp">AI Bootcamp</Link> */}
        {/* <Link to="/programme/design-workshop">Design Workshop</Link> */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme/design-workshop" element={<h2>Design Workshop Page</h2>} />
        <Route path="/register" element={<Register />} />
        <Route path="/programme/ai-bootcamp" element={<AiBootcamp />} />
        <Route path="/payment-status" element={<PaymentStatus />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
