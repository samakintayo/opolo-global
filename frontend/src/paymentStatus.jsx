import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function PaymentStatus() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("⏳ Checking payment...");
  const MAX_ATTEMPTS = 20;
  const attemptsRef = useRef(0);

  const isSuccess = status.toLowerCase().includes("success") || status.toLowerCase().includes("paid");
  const isPending = status.toLowerCase().includes("pending");
  const isFailed = status.toLowerCase().includes("fail");

  useEffect(() => {
    const paymentId = searchParams.get("id");
    const urlStatus = searchParams.get("status");

    if (!paymentId) {
      setStatus("⚠️ No payment ID in URL");
      return;
    }

    // If status came from callback URL, trust it first
    if (urlStatus) {
      setStatus(urlStatus.toLowerCase() === "paid" ? "Payment Successful" : urlStatus);
    }

    const pollStatus = async () => {
      try {
        const res = await fetch(`https://opolo-api.vercel.app/api/check-payment/${paymentId}`);
        const data = await res.json();

        if (data.success && data.payment) {
          const paymentStatus = data.payment.status?.toLowerCase();

          if (paymentStatus === "paid" || paymentStatus === "success") {
            setStatus("Payment Successful");
            return;
          } else if (paymentStatus === "failed") {
            setStatus("❌ Payment Failed");
            return;
          } else {
            attemptsRef.current++;
            if (attemptsRef.current < MAX_ATTEMPTS) setTimeout(pollStatus, 3000);
            else setStatus("⚠️ Payment status unknown. Please check later.");
          }
        } else {
          attemptsRef.current++;
          if (attemptsRef.current < MAX_ATTEMPTS) setTimeout(pollStatus, 3000);
          else setStatus("⚠️ Payment not found. Please check later.");
        }
      } catch (err) {
        console.error("Frontend error:", err.message);
        attemptsRef.current++;
        if (attemptsRef.current < MAX_ATTEMPTS) setTimeout(pollStatus, 3000);
        else setStatus("⚠️ Error checking payment. Please try again later.");
      }
    };

    pollStatus();
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="flex justify-center mb-4"
        >
          {isSuccess && (
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-3xl">✔</span>
            </div>
          )}
          {isPending && (
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="text-yellow-600 text-3xl"
              >
                ⏳
              </motion.span>
            </div>
          )}
          {isFailed && (
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 text-3xl">✖</span>
            </div>
          )}
        </motion.div>

        {/* Status Text */}
        <h1
          className={`text-2xl font-bold mb-2 ${
            isSuccess
              ? "text-green-600"
              : isPending
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
           {status}
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-sm mb-6">
          {isSuccess
            ? "Your payment was processed successfully and your registration has been confirmed. Thank you!"
            : isPending
            ? "Your payment is being verified. Please wait a moment."
            : "Something went wrong with your payment. Please try again."}
        </p>

        {/* Action Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md transition"
        >
          Go Back Home
        </button>
      </motion.div>
    </div>
  );
}
