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
import { useTheme } from "../../context/ThemeContext"; // ✅ import theme context

const data = [
  { name: "Jan", value: 2000 },
  { name: "Feb", value: 1000 },
  { name: "Mar", value: 4500 },
  { name: "Apr", value: 4800 },
  { name: "May", value: 3200 },
  { name: "Jun", value: 4600 },
  { name: "Jul", value: 4800 },
  { name: "Aug", value: 3100 },
  { name: "Sep", value: 900 },
  { name: "Oct", value: 2300 },
  { name: "Nov", value: 1600 },
  { name: "Dec", value: 3700 },
];

const Overview = () => {
  const { theme } = useTheme(); // ✅ get theme from context

  return (
    <div
      className={`p-6 rounded-xl shadow-sm mt-6 transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-[#1a1a1a]"
      }`}
    >
      <h2
        className={`text-lg font-semibold mb-4 transition-colors ${
          theme === "light" ? "text-gray-900" : "text-gray-100"
        }`}
      >
        Overview
      </h2>

      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={35}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke={theme === "light" ? "#e5e7eb" : "#333"}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: theme === "light" ? "#6b7280" : "#9ca3af",
                fontSize: 12,
              }}
            />
            <YAxis
              tickFormatter={(value) => `$${value}`}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: theme === "light" ? "#6b7280" : "#9ca3af",
                fontSize: 12,
              }}
            />
            <Tooltip
              cursor={{
                fill:
                  theme === "light"
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.1)",
              }}
              contentStyle={{
                backgroundColor: theme === "light" ? "#ffffff" : "#0f0f0f",
                border: "none",
                borderRadius: "8px",
                boxShadow:
                  theme === "light"
                    ? "0 2px 8px rgba(0,0,0,0.1)"
                    : "0 2px 8px rgba(0,0,0,0.4)",
                color: theme === "light" ? "#111827" : "#f3f4f6",
              }}
              labelStyle={{
                color: theme === "light" ? "#6b7280" : "#9ca3af",
              }}
              formatter={(value) => [`$${value}`, "Earnings"]}
            />
            <Bar
              dataKey="value"
              fill={theme === "light" ? "#3B82F6" : "#dec224"} // ✅ color changes with theme
              radius={[8, 8, 0, 0]}
              animationDuration={800}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
