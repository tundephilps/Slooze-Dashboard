import React from "react";
import { FiPlus, FiEdit } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import theme context

const StatsHeader = () => {
  const { theme } = useTheme(); // ✅ Access current theme

  return (
    <div
      className={`px-6 py-4 flex flex-wrap justify-between items-center gap-4 rounded-lg transition-colors duration-300 ${
        theme === "light" ? "bg-none" : "bg-black"
      }`}
    >
      <div className="inline-flex gap-6">
        <h2
          className={`text-lg font-semibold transition-colors ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Stats
        </h2>

        <div className="flex flex-wrap items-center gap-3">
          {/* Dropdowns */}
          <select
            className={`border rounded-lg px-3 py-1.5 text-sm focus:outline-none transition-colors ${
              theme === "light"
                ? "border-gray-200 bg-white text-gray-800"
                : "border-gray-600 bg-[#2d2d2d] text-white"
            }`}
          >
            <option>Years</option>
            <option>Months</option>
            <option>Weeks</option>
          </select>

          <select
            className={`border rounded-lg px-3 py-1.5 text-sm focus:outline-none transition-colors ${
              theme === "light"
                ? "border-gray-200 bg-white text-gray-800"
                : "border-gray-600 bg-[#2d2d2d] text-white"
            }`}
          >
            <option>Aug 20th - Dec 4th</option>
          </select>

          <span
            className={`text-sm transition-colors ${
              theme === "light" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            compared to
          </span>

          <select
            className={`border rounded-lg px-3 py-1.5 text-sm focus:outline-none transition-colors ${
              theme === "light"
                ? "border-gray-200 bg-white text-gray-800"
                : "border-gray-600 bg-[#2d2d2d] text-white"
            }`}
          >
            <option>Previous</option>
          </select>

          <select
            className={`border rounded-lg px-3 py-1.5 text-sm focus:outline-none transition-colors ${
              theme === "light"
                ? "border-gray-200 bg-white text-gray-800"
                : "border-gray-600 bg-[#2d2d2d] text-white"
            }`}
          >
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <button
          className={`flex items-center gap-1 border px-3 py-1.5 rounded-lg text-sm transition-colors ${
            theme === "light"
              ? "border-gray-200 bg-white text-black hover:bg-gray-100"
              : "border-gray-600 bg-[#333] text-white hover:bg-[#444]"
          }`}
        >
          <FiPlus /> Add
        </button>
        <button
          className={`flex items-center gap-1 border px-3 py-1.5 rounded-lg text-sm transition-colors ${
            theme === "light"
              ? "border-gray-200 bg-white text-black hover:bg-gray-100"
              : "border-gray-600 bg-[#333] text-white hover:bg-[#444]"
          }`}
        >
          <FiEdit /> Edit
        </button>
      </div>
    </div>
  );
};

export default StatsHeader;
