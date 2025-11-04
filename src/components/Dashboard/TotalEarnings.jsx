import React from "react";
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

export default function TotalEarnings() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full relative h-80">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 absolute">
        <div>
          <h2 className="text-gray-500 text-sm font-medium">Total Earning</h2>
          <p className="text-3xl font-bold text-gray-800">$112,893.00</p>
          <span className="flex items-center gap-1 text-gray-600 text-xs">
            trend title{" "}
            <span className="flex items-center gap-1 text-green-500">
              <FaArrowUp className="text-green-500" />
              70.5%
            </span>
          </span>
          <div className="mt-3 sm:mt-0">
            <select className="border rounded-md px-2 py-1 text-[10px] text-gray-600">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#f3f4f6"
          />
          <XAxis dataKey="month" tick={{ fill: "#9ca3af", fontSize: 12 }} />
          <YAxis hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#cbd5e1"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#34d399"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
