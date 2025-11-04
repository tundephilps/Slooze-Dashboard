import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa"; // For Google icon
import { FcGoogle } from "react-icons/fc";
import Wave from "../assets/Wave.webp"; // Make sure this path is correct

import Facebook from "../assets/Facebook.png"; // Make sure this path is correct

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen">
      {/* Left Column (Form) */}
      <div className="col-span-3 flex justify-center items-center bg-white">
        <div className="w-full lg:px-64 px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-4">Sign Up For Free</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-1 p-2 w-full border border-gray-300 bg-gray-100 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-1 p-2 w-full border border-gray-300 bg-gray-100 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label htmlFor="terms" className="text-sm text-gray-500">
                I agree to all Terms, Privacy Policy, and Fees
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8044fe] text-white py-2 rounded-2xl mt-4 hover:bg-purple-700"
              disabled={!isChecked}
            >
              Get Started
            </button>
          </form>

          <div className="text-center my-4 text-gray-500">OR</div>

          <div className="flex justify-center space-x-4 flex-col gap-4">
            <button className="w-full bg-white border border-gray-300 py-2 rounded-2xl flex justify-center items-center hover:bg-gray-100">
              <FcGoogle className="text-red-500 mr-2" /> Sign in with Google
            </button>
            <button className="w-full bg-white border border-gray-300 py-2 rounded-2xl flex justify-center items-center hover:bg-gray-100">
              <img src={Facebook} className="text-red-500 mr-2 h-4" /> Sign in
              with Facebook
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Dont have an account?{" "}
              <a href="/login" className="text-blue-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Right Column (Image or Background) */}
      <div className="hidden md:block col-span-2">
        <img
          src={Wave}
          alt="Wave Background"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Login;
