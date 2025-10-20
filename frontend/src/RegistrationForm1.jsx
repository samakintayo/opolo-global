// src/components/RegistrationForm.jsx
// src/components/RegistrationForm.jsx
import React, { useState } from "react";

const RegistrationForm = ({ programType, amount }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Validate inputs
  const validateForm = () => {
    if (!formData.name.trim()) return "Full name is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return "Please enter a valid email address.";
    if (!/^\d{10,15}$/.test(formData.phone))
      return "Phone number should be 10–15 digits.";
    if (!formData.location.trim()) return "Location is required.";
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
      const response = await fetch("http://localhost:4000/api/initiate-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, programType, amount }),
      });

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

  return (
   <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-gray-100 bg-gradient-to-br from-blue-100 via-white to-gray-100 px-4 py-10">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
    {/* Header */}
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold lunestBlue">
        Register for {programType}
      </h2>
      <p className="text-gray-600 mt-2 text-sm md:text-base">
        Fill in your details to proceed with payment
      </p>
    </div>

    {/* Alerts */}
    {error && (
      <div className="mt-4 bg-red-100 text-red-800 border border-red-200 p-3 rounded-lg text-sm">
        {error}
      </div>
    )}
    {success && (
      <div className="mt-4 bg-green-100 text-green-800 border border-green-200 p-3 rounded-lg text-sm">
        {success}
      </div>
    )}

    {/* Form */}
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      {["name", "email", "phone", "location"].map((field) => (
        <div key={field} className="flex flex-col">
          <label
            htmlFor={field}
            className="text-sm font-medium text-gray-700 mb-1 capitalize"
          >
            {field === "phone" ? "Phone Number" : field}
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
                : "Lagos, Nigeria"
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none disabled:bg-gray-100 transition"
          />
        </div>
      ))}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            Processing...
          </>
        ) : (
          `Register & Pay ₦${amount}`
        )}
      </button>
    </form>

    {/* Footer */}
    <p className="text-center text-xs text-gray-500 mt-6">
      Payments are securely powered by <span className="font-semibold text-blue-600">Centiiv</span>
    </p>
  </div>
</div>
  );
};

export default ;


import React, { useState } from "react";
import "./index.css"

const RegistrationForm1 = ({ programType, amount }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form and initiate payment
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:4000/api/initiate-payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            programType,
            amount,
          }),
        }
      );

      const data = await response.json();
      console.log("Backend response:", data);

      if (data.success && data.paymentUrl) {
      
        // 👇 Send user to Centiiv checkout
        window.location.href = data.paymentUrl;
          console.log("Redirect after payment will go to:", data.redirectUrl);
      } else {
        console.error("Centiiv error:", data);
        setError(
          data.message || "Payment initiation failed. Please try again."
        );
        
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center">
        Register for {programType} Programme
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-3 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded mt-2 transition disabled:opacity-60"
        >
          {loading ? "Processing..." : `Register & Pay ₦${amount}`}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm1;   