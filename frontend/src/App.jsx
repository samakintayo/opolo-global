import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./register";
import AiBootcamp from "./AiBootcamp";
import PaymentStatus from "./paymentStatus";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ai-bootcamp" element={<AiBootcamp />} />
        <Route path="/payment-status" element={<PaymentStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
