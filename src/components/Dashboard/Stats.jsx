import React from "react";
import { BsFileBarGraph } from "react-icons/bs";
import { MdArrowDropUp } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext"; // ✅ Theme context

const Stats = () => {
  const { theme } = useTheme(); // ✅ Get current theme

  const stats = [
    {
      title: "Total Earning",
      value: "$112,893.00",
      growth: "7.3%",
    },
    {
      title: "Views",
      value: "+112,893",
      growth: "7.3%",
    },
    {
      title: "Total Sales",
      value: "+112,893",
      growth: "7.3%",
    },
    {
      title: "Subscriptions",
      value: "+112,893",
      growth: "7.3%",
    },
  ];

  return (
    <div className={`p-6 transition-colors duration-300 `}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1
          className={`text-xl font-semibold ${
            theme === "light" ? "text-gray-900" : "text-gray-100"
          }`}
        >
          Dashboard
        </h1>
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
            theme === "light"
              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
              : "bg-indigo-500 hover:bg-indigo-600 text-white"
          }`}
        >
          + Add New Product
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-5 rounded-xl shadow-sm flex justify-between items-start transition-colors duration-300 ${
              theme === "light" ? "bg-white" : "bg-[#1a1a1a]"
            }`}
          >
            <div>
              <p
                className={`text-sm ${
                  theme === "light" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {item.title}
              </p>
              <h2
                className={`text-xl font-semibold mt-1 ${
                  theme === "light" ? "text-gray-900" : "text-gray-100"
                }`}
              >
                {item.value}
              </h2>
              <p
                className={`text-sm mt-1 inline-flex items-center gap-1 ${
                  theme === "light" ? "text-green-500" : "text-green-400"
                }`}
              >
                <span
                  className={`${
                    theme === "light" ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  Trend Title
                </span>{" "}
                <MdArrowDropUp /> {item.growth}
              </p>
            </div>
            <BsFileBarGraph
              className={`${
                theme === "light" ? "text-gray-400" : "text-gray-500"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
