import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 420 },
  { name: "Mar", value: 380 },
  { name: "Apr", value: 360 },
  { name: "May", value: 370 },
  { name: "Jun", value: 390 },
  { name: "Jul", value: 280 },
];

const SubscriptionsCard = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full h-full p-6 rounded-2xl shadow-sm ${
        theme === "light" ? "bg-white" : "bg-[#151515]"
      }`}
    >
      {/* Header */}
      <div
        className={`flex flex-col gap-1 ${
          theme === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        <h3
          className={`text-sm font-medium ${
            theme === "light" ? "text-gray-500" : "text-gray-300"
          }`}
        >
          {theme === "light" ? "Subscriptions" : "Subscriptions "}
        </h3>
        <h1 className="text-3xl font-bold">+112,893</h1>

        <div className="flex items-center gap-1 text-sm">
          <span
            className={theme === "light" ? "text-gray-400" : "text-gray-300"}
          >
            Trend
          </span>
          <FaArrowUp className="text-green-500 text-xs" />
          <span className="text-green-500 font-semibold">70.5%</span>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-4 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip
              cursor={false}
              contentStyle={{
                background: theme === "light" ? "#ffffff" : "#333333",
                border: "none",
                borderRadius: "8px",
                boxShadow:
                  theme === "light"
                    ? "0 2px 8px rgba(0,0,0,0.1)"
                    : "0 2px 8px rgba(0,0,0,0.4)",
              }}
              labelStyle={{ color: theme === "light" ? "#666" : "#e5e5e5" }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke={theme === "light" ? "#F9B233" : "#FBBF24"} // slightly brighter for dark mode
              strokeWidth={3}
              dot={{
                r: 4,
                fill: theme === "light" ? "#F9B233" : "#FBBF24",
                strokeWidth: 2,
              }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SubscriptionsCard;
