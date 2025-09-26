import React, { useState } from 'react';
import { Link } from 'react-router';
import eye2 from './../../public/eye2.png'
import eye from './../../public/eye.png'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("https://apitest.softvencefsd.xyz/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.firstName + " " + formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        alert("✅ Registration successful!");
      } else {
        alert("❌ " + (data.message || "Registration failed"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Continuing with Google...');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 ">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md ">
        <h2 className="text-3xl font-bold text-center mb-2">Create your Account</h2>
        <p className="text-gray-600 text-center mb-6">When sports Meets smart Tech.</p>

        <form onSubmit={handleSubmit}>
          {/* First Name & Last Name */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-10 focus:ring-green-500 focus:border-green-500"
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <img src={eye2} alt="" /> :<img src={eye} alt="" /> }
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative mt-1">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-10 focus:ring-green-500 focus:border-green-500"
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ?  <img src={eye2} alt="" /> :<img src={eye} alt="" />}
              </span>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center mb-6">
            <input
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900">
              I agree to Tech Takes{' '}
              <a href="#" className="text-green-600 hover:underline">Terms of Service</a> and{' '}
              <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          {/* Create Account Button */}
         <Link to="/success"> 
           <button
            type="submit"
            className="w-full py-3 px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Create Account
          </button>
         </Link>
        </form>

        {/* OR separator */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Continue with Google Button */}
        <button
          onClick={ handleGoogleSignIn }
          className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center space-x-2 text-gray-700 hover:bg-gray-50"
        >
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
        </button>

        {/* Already have an account */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-700">
            Don't have an account?{' '}
            <a href="/login" className="text-green-600 font-semibold hover:underline">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
