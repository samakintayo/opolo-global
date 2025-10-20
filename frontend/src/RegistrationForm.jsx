// src/components/RegistrationForm.jsx
import React, { useState } from "react";

const RegistrationForm = ({ programType, amount }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    company: "", // optional field
    quantity: 1, // default 1 registration
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    if (!formData.name.trim()) return "Full name is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return "Please enter a valid email address.";
    if (!/^\d{10,15}$/.test(formData.phone))
      return "Phone number should be 10–15 digits.";
    if (!formData.location.trim()) return "Location is required.";
    if (formData.quantity < 1) return "Please select at least 1 registration.";
    return null;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://opolo-api.vercel.app/api/initiate-payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            programType,
            unitPrice: amount, // send base cost per registration
          }),
        }
      );

      const data = await response.json();
      if (data.success && data.paymentUrl) {
        setSuccess("Redirecting to secure payment...");
        setTimeout(() => {
          window.location.href = data.paymentUrl;
        }, 1200);
      } else {
        setError(data.message || "Payment initiation failed. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  const totalAmount = amount * formData.quantity;

  return (
    <div className="flex items-center justify-center py-10 bg-[#ffffff]">
      <div className="w-full max-w-sm md:max-w-md bg-white rounded-3xl shadow-2xl p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-4 md:mb-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-purple-700">
            Register for {programType}
          </h2>
          <p className="text-gray-600 mt-1 text-sm md:text-base">
            Fill in your details to proceed with payment
          </p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-3 bg-red-100 text-red-800 border border-red-200 p-2.5 rounded-xl text-sm shadow-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-3 bg-green-100 text-green-800 border border-green-200 p-2.5 rounded-xl text-sm shadow-sm">
            {success}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {["name", "email", "phone", "location", "company"].map((field) => (
            <div key={field} className="flex flex-col">
              <label
                htmlFor={field}
                className="text-sm font-medium text-gray-700 mb-1 capitalize"
              >
                {field === "phone"
                  ? "Phone Number"
                  : field === "company"
                  ? "Company (optional)"
                  : field}
              </label>
              <input
                id={field}
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                    ? "tel"
                    : "text"
                }
                name={field}
                value={formData[field]}
                onChange={handleChange}
                disabled={loading}
                placeholder={
                  field === "name"
                    ? "John Doe"
                    : field === "email"
                    ? "example@email.com"
                    : field === "phone"
                    ? "08123456789"
                    : field === "location"
                    ? "Lagos, Nigeria"
                    : "Your company name"
                }
                className="w-full rounded-2xl border border-gray-200 px-3 py-2 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-300 focus:border-purple-300 outline-none disabled:bg-gray-100 transition-all shadow-sm"
              />
            </div>
          ))}

          {/* Quantity field */}
          <div className="flex flex-col">
            <label
              htmlFor="quantity"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Number of Registrations
            </label>
            <input
              id="quantity"
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              disabled={loading}
              className="w-full rounded-2xl border border-gray-200 px-3 py-2 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-300 focus:border-purple-300 outline-none disabled:bg-gray-100 transition-all shadow-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                Processing...
              </>
            ) : (
              `Register & Pay ₦${totalAmount.toLocaleString()}`
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-4 md:mt-5">
          Payments are securely powered by{" "}
          <span className="font-semibold text-purple-600">Centiiv</span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
