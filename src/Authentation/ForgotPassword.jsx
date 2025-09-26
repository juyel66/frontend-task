import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Uncomment if you want navigation

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://apitest.softvencefsd.xyz/api/resend_otp",
        { email }
      );

      console.log("API Response:", response.data);
      alert(response.data.message || "OTP sent successfully!");

      // ✅ After success, clear input
      setEmail("");

      // ✅ If you want to redirect to verification page
      // navigate("/emailverification");

    } catch (error) {
      console.error("Error sending OTP:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    // Example navigation (if using react-router-dom)
    // navigate('/login');
    console.log("Navigating back...");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        {/* Back Link */}
        <button
          onClick={handleBack}
          className="flex items-center text-green-600 hover:underline mb-8 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <h2 className="text-3xl font-bold mb-4">Forgot your password?</h2>
        <p className="text-gray-600 mb-8">
          Please enter the email address associated with your account, and we'll send you an OTP to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Address Input */}
          <div className="mb-6">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-green-500 focus:border-green-500 text-lg"
              required
            />
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg disabled:opacity-50"
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
