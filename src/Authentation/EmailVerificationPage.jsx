// EmailVerificationPage.jsx
import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyOtp, resendOtp } from "./authFunctions";

const EmailVerificationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state?.email || "";

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = Array(6)
    .fill(null)
    .map(() => useRef(null));

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/\D/g, "");
    const newCode = [...code];
    newCode[idx] = val;
    setCode(newCode);
    if (val && idx < 5) inputRefs[idx + 1].current.focus();
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !code[idx] && idx > 0)
      inputRefs[idx - 1].current.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    if (verificationCode.length !== 6) {
      alert("Enter full 6-digit code.");
      return;
    }

    const res = await verifyOtp(userEmail, verificationCode);
    if (res.success) {
      alert("Email verified successfully!");
      navigate("/success");
    } else {
      alert(res.message || "Invalid verification code");
    }
  };

  const handleResend = async () => {
    const res = await resendOtp(userEmail);
    alert(res.message || "Code resent!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Check your email!</h2>
        <p className="text-gray-600 mb-6">
          We've sent a 6-digit code to <b>{userEmail}</b>. Enter it below:
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2 mb-6">
            {code.map((d, i) => (
              <input
                key={i}
                ref={inputRefs[i]}
                type="tel"
                maxLength="1"
                value={d}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-10 h-10 text-center text-xl border rounded"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded mb-4"
          >
            Verify
          </button>
        </form>
        <button onClick={handleResend} className="text-green-600 hover:underline">
          Resend code
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
