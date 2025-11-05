import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // Assuming ThemeContext is in a folder called context

const data = [
  { month: "Jan", current: 40, previous: 50 },
  { month: "Feb", current: 20, previous: 45 },
  { month: "Mar", current: 35, previous: 40 },
  { month: "Apr", current: 95, previous: 38 },
  { month: "May", current: 45, previous: 35 },
  { month: "Jun", current: 50, previous: 38 },
  { month: "Jul", current: 55, previous: 40 },
  { month: "Aug", current: 60, previous: 42 },
  { month: "Sep", current: 55, previous: 41 },
  { month: "Oct", current: 50, previous: 40 },
  { month: "Nov", current: 53, previous: 42 },
  { month: "Dec", current: 56, previous: 44 },
];

// Calculate trend percentage
const calculateTrendPercentage = (current, previous) => {
  const trend = ((current - previous) / previous) * 100;
  return trend.toFixed(1);
};

export default function TotalEarnings() {
  const { theme } = useTheme(); // Use theme from context
  const [period, setPeriod] = useState("This Year");

  // Calculate the trend percentage for the last month's data
  const lastData = data[data.length - 1];
  const trendPercentage = calculateTrendPercentage(
    lastData.current,
    lastData.previous
  );

  // Handle period selection
  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <div
      className={`rounded-2xl shadow-md p-6 w-full relative h-80 ${
        theme === "light" ? "bg-white" : "bg-[#151515]"
      }`} // Conditionally change background color based on theme
    >
      <div
        className={`flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 absolute top-4 left-0 right-0 px-6 ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`} // Conditionally change text color based on theme
      >
        <div>
          <h2 className="text-sm font-medium">
            {theme === "light" ? "Total Earning" : "Total Earnings (Dark)"}
          </h2>
          <p className="text-3xl font-bold">$112,893.00</p>
          <span
            className={`flex items-center gap-1 text-xs ${
              trendPercentage > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            Trend{" "}
            <span
              className={`flex items-center gap-1 ${
                trendPercentage > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              <FaArrowUp
                className={`${
                  trendPercentage > 0 ? "text-green-500" : "text-red-500"
                }`}
              />
              {trendPercentage}%
            </span>
          </span>
          <div className="mt-3 sm:mt-0">
            <select
              className={`border rounded-md px-2 py-1 text-[10px] text-gray-600 ${
                theme === "light" ? "bg-white" : "bg-gray-700 text-white"
              }`} // Conditionally change background and text color
              value={period}
              onChange={handlePeriodChange}
            >
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={290}>
        <LineChart data={data}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke={theme === "light" ? "#f3f4f6" : "#333333"} // Line color based on theme
          />
          <XAxis
            dataKey="month"
            tick={{
              fill: theme === "light" ? "#9ca3af" : "#b0b0b0",
              fontSize: 12,
            }}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: theme === "light" ? "#ffffff" : "#333333",
            }}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke={theme === "light" ? "#cbd5e1" : "#444444"} // Line color based on theme
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke={theme === "light" ? "#34d399" : "#10b981"} // Line color based on theme
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
