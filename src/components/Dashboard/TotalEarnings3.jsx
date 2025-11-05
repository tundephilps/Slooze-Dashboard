import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const data = [
  { day: "Mo", current: 180, previous: 300 },
  { day: "Tu", current: 230, previous: 350 },
  { day: "We", current: 150, previous: 450 },
  { day: "Th", current: 320, previous: 480 },
  { day: "Fr", current: 200, previous: 300 },
  { day: "Sa", current: 330, previous: 380 },
  { day: "Su", current: 310, previous: 400 },
];

export default function TotalEarings3() {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-2xl shadow-md p-6 w-full flex items-start ${
        theme === "light" ? "bg-white" : "bg-[#151515]"
      }`}
    >
      {/* Header */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        <div>
          <h2 className="text-sm font-medium">
            {theme === "light" ? "Total Earnings" : "Total Earnings "}
          </h2>
          <p className="text-3xl font-bold">$112,893.00</p>
          <span className="flex items-center gap-1 text-xs">
            Trend{" "}
            <span className="flex items-center gap-1 text-green-500">
              <FaArrowUp className="text-green-500" />
              70.5%
            </span>
          </span>

          <div className="mt-3 sm:mt-0">
            <select
              className={`border rounded-md px-2 py-1 text-[10px] ${
                theme === "light"
                  ? "bg-white text-gray-600"
                  : "bg-gray-700 text-white"
              }`}
            >
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          barGap={-26}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="lightGreenGrad" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={theme === "light" ? "#bbf7d0" : "#e6da6e"}
                stopOpacity={0.9}
              />
              <stop
                offset="100%"
                stopColor={theme === "light" ? "#bbf7d0" : "#dcc096"}
                stopOpacity={0.85}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            strokeDasharray="4 4"
            stroke={theme === "light" ? "#e5e7eb" : "#333333"}
          />

          <XAxis
            dataKey="day"
            tick={{
              fill: theme === "light" ? "#6b7280" : "#b0b0b0",
              fontSize: 13,
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{
              fill: theme === "light" ? "#9CA3AF" : "#b0b0b0",
            }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: theme === "light" ? "#ffffff" : "#333333",
              border: "none",
            }}
          />

          <Bar
            dataKey="current"
            barSize={36}
            fill={theme === "light" ? "#16a34a" : "#dfad0a"}
            radius={[6, 6, 0, 0]}
          />

          <Bar
            dataKey="previous"
            barSize={28}
            fill="url(#lightGreenGrad)"
            radius={[6, 6, 0, 0]}
            opacity={0.9}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
