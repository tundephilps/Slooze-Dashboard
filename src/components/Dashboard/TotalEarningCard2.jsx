import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import theme context

const data = [
  { date: "Nov 20", current: 40, previous: 35 },
  { date: "Nov 25", current: 50, previous: 45 },
  { date: "Nov 30", current: 45, previous: 47 },
  { date: "Dec 5", current: 55, previous: 50 },
  { date: "Dec 10", current: 52, previous: 53 },
  { date: "Dec 15", current: 60, previous: 58 },
  { date: "Dec 20", current: 65, previous: 60 },
];

const TotalEarningCard2 = () => {
  const { theme } = useTheme(); // ✅ Access current theme

  return (
    <div
      className={`w-full p-6 rounded-2xl shadow-sm transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-[#1a1a1a]"
      }`}
    >
      {/* Header Section */}
      <div className="flex flex-col gap-1">
        <h3
          className={`text-sm font-medium transition-colors ${
            theme === "light" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Total Earning
        </h3>
        <h1
          className={`text-3xl font-bold transition-colors ${
            theme === "light" ? "text-gray-900" : "text-gray-100"
          }`}
        >
          +112,893
        </h1>
        <div className="flex items-center gap-1">
          <FaArrowUp className="text-green-500 text-xs" />
          <span className="text-green-500 text-sm font-semibold">70.5%</span>
          <span
            className={`text-sm transition-colors ${
              theme === "light" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            trend title
          </span>
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="mt-4 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip
              cursor={false}
              contentStyle={{
                background: theme === "light" ? "#fff" : "#000",
                border: "none",
                borderRadius: "8px",
                boxShadow:
                  theme === "light"
                    ? "0 2px 8px rgba(0,0,0,0.1)"
                    : "0 2px 8px rgba(255,255,255,0.1)",
                color: theme === "light" ? "#333" : "#f9f9f9",
              }}
              labelStyle={{
                color: theme === "light" ? "#666" : "#ccc",
              }}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: theme === "light" ? "#999" : "#aaa",
                fontSize: 12,
              }}
            />
            <YAxis hide />
            <Line
              type="monotone"
              dataKey="previous"
              stroke={theme === "light" ? "#BDBDBD" : "#555"}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke={theme === "light" ? "#7940ca" : "#7940ca"} // ✅ Purple for light, gold for dark
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalEarningCard2;
