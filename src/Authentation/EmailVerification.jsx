import React, { useState, useRef } from 'react';

const EmailVerification = () => {
  // State to hold the 4-digit code
  const [code, setCode] = useState(['', '', '', '']);

  // Refs for each input to manage focus
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    // Auto-focus the next input field
    if (e.target.value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace to move to the previous field
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join('');

    // You would typically send the code to your backend for verification
    console.log('Verifying code:', verificationCode);
    if (verificationCode.length === 4) {
      alert(`Verifying code: ${verificationCode}`);
      // Add API call and logic for success/failure here
    } else {
      alert('Please enter a 4-digit code.');
    }
  };

  const handleResend = () => {
    // You would typically trigger a function to resend the code
    console.log('Resending verification code...');
    alert('Verification code has been resent!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-2">Check your email</h2>
        <p className="text-gray-600 mb-8">
          Please enter the 4-digit code sent to [email_address_here].
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-4 mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="tel" // Use tel for number keyboards on mobile
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-16 h-16 text-center text-3xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
          >
            Continue
          </button>
        </form>
{/* <h1>hi</h1> */}
        <div className="mt-6 text-sm">
          <p className="text-gray-700">
            Didn't receive the code?{' '}
            <button
              onClick={handleResend}
              className="text-green-600 font-semibold hover:underline focus:outline-none"
            >
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;