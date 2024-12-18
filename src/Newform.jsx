import React, { useState } from "react";

const Newform = () => {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between Sign In and Sign Up

  return (
    
    <div className="h-screen w-screen bg-black bg-cover bg-center flex justify-center items-center">
      <div className="w-96 p-8 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg border border-white/10">
        {/* Form Heading */}
        <h2 className="text-white text-3xl font-bold text-center mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>

        {/* Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-white/30 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded bg-white/30 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Confirm Password for Sign Up */}
          {!isSignIn && (
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 rounded bg-white/30 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white/30 text-white font-bold py-2 px-4 rounded hover:bg-white/50 transition"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Button */}
        <p className="text-center text-white mt-4">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-blue-300 hover:underline"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Newform;
