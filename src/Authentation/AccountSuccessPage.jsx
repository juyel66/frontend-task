import React from 'react';
import { Link } from 'react-router-dom'; 

const AccountSuccessPage = () => {
  // If using React Router, you might use `useNavigate` for the button:
  // const navigate = useNavigate();
  // const handleGoHome = () => {
  //   navigate('/'); // Navigate to the home page
  // };

  const handleGoHome = () => {
    console.log('Navigating to Home page...');
    // In a real application without React Router, you might redirect:
    // window.location.href = '/';
    alert('Going to Home Page!');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Logo */}
      <header className="p-6 md:p-8">
        <div className="flex items-center space-x-2">
          {/* Placeholder for ScapeSync Logo */}
          <img
            src="https://via.placeholder.com/30x30/4CAF50/FFFFFF?text=S" // Replace with your actual logo path
            alt="ScapeSync Logo"
            className="h-8 w-8"
          />
          <span className="text-lg font-bold text-gray-800">ScapeSync</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        {/* Fireworks Image (Placeholder) */}
        <div className="mb-8">
          {/* Replace this placeholder image with an actual fireworks SVG, GIF, or PNG */}
          {/* For now, I will generate a simple fireworks image: */}
          
        </div>

        {/* Success Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Account Created Successfully!
        </h1>

        {/* Sub-text */}
        <p className="text-gray-600 mb-8 max-w-sm">
          Your account is set up! Just verify your email to get started.
        </p>

        {/* Go To Home Button */}
        {/* If using React Router, replace button with: <Link to="/" className="...">Go To Home</Link> */}
      <Link to="/">
        <button
          onClick={handleGoHome}
          className="px-8 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg transition-colors duration-200"
        >
          Go To Home
        </button>
      
      </Link>
      </main>
    </div>
  );
};

export default AccountSuccessPage;