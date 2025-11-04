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
  return (
    <div className="w-full  bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex flex-col gap-1">
        <h3 className="text-gray-500 text-sm font-medium">Total Views</h3>
        <h1 className="text-3xl font-bold text-gray-900">+112,893</h1>
        <div className="flex items-center gap-1">
          <FaArrowUp className="text-green-500 text-xs" />
          <span className="text-green-500 text-sm font-semibold">70.5%</span>
          <span className="text-gray-400 text-sm">trend title</span>
        </div>
      </div>

      <div className="mt-4 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip
              cursor={false}
              contentStyle={{
                background: "white",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              labelStyle={{ color: "#666" }}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#999", fontSize: 12 }}
            />
            <YAxis hide />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#BDBDBD"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#dec224"
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
