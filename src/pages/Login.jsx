import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Wave from "../assets/Wave.webp";
import Facebook from "../assets/Facebook.png";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // ✅ import theme

const Login = () => {
  const { theme } = useTheme(); // ✅ use theme

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TEMP ROLE ASSIGNMENT: if email contains 'manager' => manager, else storekeeper
    const role =
      email && email.toLowerCase().includes("manager")
        ? "manager"
        : "storekeeper";
    localStorage.setItem("role", role);
    console.log("Form submitted - role set to", role);
    // redirect to dashboard
    window.location.href = "/Dashboard";
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-5 min-h-screen transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-[#000000]"
      }`}
    >
      {/* Left Section */}
      <div
        className={`col-span-3 flex justify-center items-center ${
          theme === "light" ? "bg-white" : "bg-[#111]"
        }`}
      >
        <div className="w-full lg:px-52 px-8">
          <h2
            className={`text-3xl font-bold text-center mb-3 ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Welcome Back
          </h2>
          <p
            className={`text-center mb-4 ${
              theme === "light" ? "text-gray-500" : "text-gray-300"
            }`}
          >
            Sign Up For Free
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className={`mt-1 p-2 w-full border rounded-md ${
                  theme === "light"
                    ? "border-gray-300 bg-gray-100 text-gray-800"
                    : "border-gray-600 bg-[#222] text-gray-200"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className={`mt-1 p-2 w-full border rounded-md ${
                  theme === "light"
                    ? "border-gray-300 bg-gray-100 text-gray-800"
                    : "border-gray-600 bg-[#222] text-gray-200"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label
                htmlFor="terms"
                className={`text-sm ${
                  theme === "light" ? "text-gray-500" : "text-gray-300"
                }`}
              >
                I agree to all Terms, Privacy Policy, and Fees
              </label>
            </div>

            {/* Submit Button */}

            <button
              type="submit"
              className="w-full bg-[#8044fe] text-white py-2 rounded-2xl mt-4 hover:bg-purple-700 transition"
            >
              Get Started
            </button>
          </form>

          {/* Divider */}
          <div
            className={`text-center my-4 ${
              theme === "light" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            OR
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-4">
            <button
              className={`w-full border py-2 rounded-2xl flex justify-center items-center transition ${
                theme === "light"
                  ? "bg-white border-gray-300 hover:bg-gray-100"
                  : "bg-[#222] text-white border-gray-600 hover:bg-[#333]"
              }`}
            >
              <FcGoogle className="mr-2" /> Sign in with Google
            </button>

            <button
              className={`w-full border py-2 rounded-2xl flex justify-center items-center transition ${
                theme === "light"
                  ? "bg-white border-gray-300 hover:bg-gray-100"
                  : "bg-[#222] text-white border-gray-600 hover:bg-[#333]"
              }`}
            >
              <img src={Facebook} className="mr-2 h-4" alt="" />
              Sign in with Facebook
            </button>
          </div>

          {/* Footer Link */}
          <div className="text-center mt-6">
            <p
              className={`text-sm ${
                theme === "light" ? "text-gray-500" : "text-gray-300"
              }`}
            >
              Don’t have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:block col-span-2">
        <img src={Wave} alt="Wave" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default Login;
