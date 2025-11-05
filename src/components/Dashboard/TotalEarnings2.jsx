import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // Import useTheme to access the theme context

const data = [
  { month: "Jan", earnings: 40 },
  { month: "Feb", earnings: 30 },
  { month: "Mar", earnings: 35 },
  { month: "Apr", earnings: 28 },
  { month: "May", earnings: 40 },
  { month: "Jun", earnings: 30 },
  { month: "Jul", earnings: 35 },
  { month: "Aug", earnings: 28 },
  { month: "Sep", earnings: 40 },
  { month: "Oct", earnings: 30 },
  { month: "Nov", earnings: 35 },
  { month: "Dec", earnings: 28 },
];

export default function TotalEarnings2() {
  const { theme } = useTheme(); // Use theme context

  return (
    <div
      className={`rounded-2xl shadow-md px-6 py-4 w-full ${
        theme === "light" ? "bg-white" : "bg-[#151515]"
      }`} // Conditional background color
    >
      <div
        className={`mb-6 ${theme === "light" ? "text-gray-800" : "text-white"}`} // Conditional text color
      >
        <h2 className="text-sm font-medium">Total Earning</h2>
        <p className="text-3xl font-bold">$112,893.00</p>
        <div className="flex items-center gap-2 text-sm mt-1">
          <span className="flex items-center gap-1">
            Trend{" "}
            <span
              className={`flex items-center gap-1 ${
                theme === "light" ? "text-green-500" : "text-green-400"
              }`} // Conditional color for the trend indicator
            >
              <FaArrowUp
                className={`${
                  theme === "light" ? "text-green-500" : "text-green-400"
                }`}
              />
              70.5%
            </span>
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data}>
          <CartesianGrid
            vertical={false}
            horizontal={false}
            stroke={theme === "light" ? "#e5e7eb" : "#444444"} // Grid line color based on theme
          />
          <XAxis dataKey="month" hide />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: theme === "light" ? "#ffffff" : "#333333",
              color: theme === "light" ? "#333333" : "#ffffff",
            }} // Tooltip styling based on theme
          />
          <Bar
            dataKey="earnings"
            fill={theme === "light" ? "#22c55e" : "#13b9bf"} // Bar color based on theme
            radius={[6, 6, 0, 0]} // Rounded top bars
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
