import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom'; // Uncomment if using React Router for navigation

const EmailVerificationPage = ({ userEmail = "acb@domain" }) => {
  // State to hold the 6-digit code
  const [code, setCode] = useState(['', '', '', '', '', '']);

  // Refs for each input to manage focus
  const inputRefs = Array(6).fill(null).map((_, i) => useRef(null));

  // const navigate = useNavigate(); // Initialize useNavigate if you're using React Router

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (!/^\d*$/.test(value)) return; // Allow only digits

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus the next input field if a digit is entered
    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace to move to the previous field and clear the current one
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    if (!/^\d{6}$/.test(pastedData)) return; // Ensure pasted data is 6 digits

    const newCode = pastedData.split('');
    setCode(newCode);

    // Optionally focus the last input after pasting
    inputRefs[5].current.focus();
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join('');

    // You would typically send the code to your backend for verification
    console.log('Verifying code:', verificationCode);
    if (verificationCode.length === 6) {
      alert(`Verifying code: ${verificationCode}`);
      // Add API call and logic for success/failure here
      // On success, navigate to the next page, e.g., navigate('/dashboard');
    } else {
      alert('Please enter a complete 6-digit code.');
    }
  };

  const handleBack = () => {
    // This function would typically navigate back to the previous page
    // using React Router: navigate(-1); or navigate('/previous-page');
    console.log('Navigating back...');
    alert('Navigating back to the previous page.');
  };

  const handleResend = () => {
    // You would typically trigger a function to resend the code via an API call
    console.log('Resending verification code to', userEmail, '...');
    alert('Verification code has been resent!');
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

        <h2 className="text-3xl font-bold mb-4">Please check your email!</h2>
        <p className="text-gray-600 mb-8">
          We've emailed a 6-digit confirmation code to <span className="font-semibold">{userEmail}</span>,
          please enter the code in below box to verify your email.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2 sm:gap-4 mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="tel" // Use 'tel' for number keyboards on mobile
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste} // Handle pasting the entire code
                className="w-10 h-10 sm:w-12 sm:h-12 text-center text-2xl sm:text-3xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                autoComplete="one-time-code" // Helps with autofill on some browsers
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
          >
            Verify
          </button>
        </form>

        <div className="mt-6 text-sm text-center">
          <p className="text-gray-700">
            Don't have a code?{' '}
            <button
              onClick={handleResend}
              className="text-green-600 font-semibold hover:underline focus:outline-none"
            >
              Resend code
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;