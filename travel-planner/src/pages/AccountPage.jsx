import React, { useState } from 'react';
import account from '../assets/account.jpg';


const AccountPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const [isRegister, setIsRegister] = useState(false); // Toggle between login and register forms

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., API call)
    setIsLoggedIn(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add register logic here (e.g., API call)
    setIsLoggedIn(true);
  };

  const switchToRegister = () => setIsRegister(true);
  const switchToLogin = () => setIsRegister(false);

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${account})` }}> 
      {/* Update the path to your actual image */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {!isLoggedIn ? (
          isRegister ? (
            <div className="register-form">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Your Account</h2>
              <form onSubmit={handleRegister}>
                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Register
                </button>
              </form>
              <p className="mt-4 text-center">
                Already have an account?{" "}
                <button
                  onClick={switchToLogin}
                  className="text-blue-500 hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          ) : (
            <div className="login-form">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Login to Your Account</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Login
                </button>
              </form>
              <p className="mt-4 text-center">
                Don't have an account?{" "}
                <button
                  onClick={switchToRegister}
                  className="text-blue-500 hover:underline"
                >
                  Register
                </button>
              </p>
            </div>
          )
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome to Your Profile</h2>
            <p className="mb-4">This is your account page where you can view and update your details.</p>

            <button
              onClick={() => setIsLoggedIn(false)}
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
