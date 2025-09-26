import React, { useState } from 'react';
import axios from 'axios';
import eye from './../../public/eye.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("❌ Passwords do not match!");
    return;
  }

  try {
    const form = new FormData();
    form.append("first_name", formData.firstName);
    form.append("last_name", formData.lastName);
    form.append("email", formData.email);
    form.append("password", formData.password);
    form.append("password_confirmation", formData.confirmPassword);
    form.append("terms", formData.agreeToTerms ? "true" : "false");

    const response = await fetch(
      "https://apitest.softvencefsd.xyz/api/register",
      {
        method: "POST",
        body: form,
      }
    );

    const data = await response.json();
    console.log("API Response:", data); // ✅ এখানে console message

    if (response.ok) {
      console.log("🎉 Registration successful!"); // ✅ console message
      alert("✅ Registration successful!"); // ✅ alert message
      navigate("/success"); // success page এ নেভিগেট করবে
    } else {
      alert("❌ " + (data.message || "Registration failed"));
      console.error("Registration failed:", data);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("⚠️ Something went wrong. Please try again later.");
  }
};


  const handleGoogleLogin = () => {
    console.log('Logging in with Google...');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm mt-7 mb-7">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome to ScapeSync</h2>
        <p className="text-gray-600 text-center mb-6   text-sm">
          Please share your login details so you can access the website.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="eddie_lake@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                required
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={eye} alt="toggle password" />
              </span>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 accent-green-500"
              />
              <label htmlFor="rememberMe" className="text-gray-700">
                Remember me
              </label>
            </div>
            <a href="/password" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>

        {/* OR Separator */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center space-x-2 text-gray-700 hover:bg-gray-50"
        >
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
        </button>

        {/* Signup link */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-700">
            Don't have an account?{' '}
            <a href="/register" className="text-green-600 font-semibold hover:underline">
            Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
