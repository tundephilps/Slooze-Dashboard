import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // ✅ Theme context

const data = [
  { date: "Nov 20", current: 40, previous: 35 },
  { date: "Nov 25", current: 50, previous: 45 },
  { date: "Nov 30", current: 45, previous: 47 },
  { date: "Dec 5", current: 55, previous: 50 },
  { date: "Dec 10", current: 52, previous: 53 },
  { date: "Dec 15", current: 60, previous: 58 },
  { date: "Dec 20", current: 65, previous: 60 },
];

const TotalViews = () => {
  const { theme } = useTheme();
  const trend = 70.5;
  const isUp = trend >= 0;

  // Dynamic colors based on theme
  const cardBg = theme === "light" ? "bg-white" : "bg-[#0f0f0f]";
  const textPrimary = theme === "light" ? "text-gray-900" : "text-gray-100";
  const textSecondary = theme === "light" ? "text-gray-500" : "text-gray-400";
  const linePrevious = theme === "light" ? "#CBD5E1" : "#4B5563"; // gray/blue
  const lineCurrent = isUp ? "#FACC15" : "#EF4444"; // yellow/red trend
  const trendText = isUp ? "text-yellow-500" : "text-red-500";

  return (
    <div className={`w-full p-6 rounded-2xl shadow-sm ${cardBg}`}>
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h3 className={`text-sm font-medium ${textSecondary}`}>Total Views</h3>
        <h1 className={`text-3xl font-bold ${textPrimary}`}>+112,893</h1>
        <div className="flex items-center gap-1">
          {isUp ? (
            <FaArrowUp className={`text-xs ${trendText}`} />
          ) : (
            <FaArrowDown className={`text-xs ${trendText}`} />
          )}
          <span className={`text-sm font-semibold ${trendText}`}>
            {Math.abs(trend)}%
          </span>
          <span className={`text-sm ${textSecondary}`}>from last period</span>
        </div>
      </div>

      {/* Line Chart */}
      <div className="mt-4 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip
              cursor={false}
              contentStyle={{
                background: theme === "light" ? "#ffffff" : "#1a1a1a",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                padding: "8px",
                color: theme === "light" ? "#111827" : "#E5E7EB",
              }}
              labelStyle={{ color: theme === "light" ? "#6B7280" : "#9CA3AF" }}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: theme === "light" ? "#9CA3AF" : "#9CA3AF",
                fontSize: 12,
              }}
            />
            <YAxis hide />
            <Line
              type="monotone"
              dataKey="previous"
              stroke={linePrevious}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke={lineCurrent}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalViews;
