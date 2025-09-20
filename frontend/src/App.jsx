import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./register";
import AiBootcamp from "./programme/AiBootcamp";
import PaymentStatus from "./paymentStatus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/programme/ai-bootcamp" element={<AiBootcamp />} />
      <Route path="/payment-status" element={<PaymentStatus />} />
    </Routes>
  );
}

export default App;
