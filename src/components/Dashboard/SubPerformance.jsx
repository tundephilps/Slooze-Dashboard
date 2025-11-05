import React from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";
import { FaCaretUp } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // Import theme context

const data = [
  { name: "Jan", value: 70 },
  { name: "Feb", value: 50 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 45 },
  { name: "May", value: 65 },
  { name: "Jun", value: 55 },
  { name: "Jul", value: 50 },
  { name: "Aug", value: 65 },
  { name: "Sep", value: 60 },
  { name: "Oct", value: 50 },
  { name: "Nov", value: 70 },
  { name: "Dec", value: 75 },
];

const SubscriptionsPerformersCard = () => {
  const { theme } = useTheme(); // Access current theme

  return (
    <div
      className={`w-full p-6 rounded-2xl shadow-sm transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-[#1a1a1a]"
      }`}
    >
      <h3
        className={`text-lg font-semibold transition-colors ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        Subscriptions Performers
      </h3>
      <p
        className={`text-sm pb-12 transition-colors ${
          theme === "light" ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Follower This Year
      </p>

      <div className="flex flex-col items-center">
        {/* Statistic */}
        <div className="flex items-center justify-center gap-1 mb-4">
          <h1
            className={`text-5xl font-bold ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            +500
          </h1>
          <FaCaretUp
            className={`text-lg ${
              theme === "light" ? "text-green-500" : "text-green-400"
            }`}
          />
        </div>

        {/* Bar Chart */}
        <div className="w-full h-72 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  background: theme === "light" ? "#fff" : "#333",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow:
                    theme === "light"
                      ? "0 2px 8px rgba(0,0,0,0.1)"
                      : "0 2px 8px rgba(255,255,255,0.1)",
                  color: theme === "light" ? "#333" : "#f9f9f9",
                }}
              />
              <Bar
                dataKey="value"
                fill={theme === "light" ? "#FFA500" : "#25d7e0"}
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Button */}
        <button
          className={`w-full py-2 rounded-full font-semibold transition ${
            theme === "light"
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-black text-white hover:bg-green-700"
          }`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SubscriptionsPerformersCard;
