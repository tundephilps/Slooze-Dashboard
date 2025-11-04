import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { FaArrowUp } from "react-icons/fa";

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
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full flex items-start">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
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

      {/* Chart */}
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          barGap={-26} // negative gap to overlap bars
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          {/* optional gradient for the light overlay */}
          <defs>
            <linearGradient id="lightGreenGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bbf7d0" stopOpacity={0.95} />
              <stop offset="100%" stopColor="#bbf7d0" stopOpacity={0.85} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            strokeDasharray="4 4"
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="day"
            tick={{ fill: "#6b7280", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis tick={{ fill: "#9CA3AF" }} />
          <Tooltip />

          {/* draw current (darker) bar first */}
          <Bar
            dataKey="current"
            name="Current"
            barSize={36}
            fill="#16a34a" // darker green
            radius={[6, 6, 0, 0]}
          />

          {/* draw previous (lighter) bar last so it appears on top */}
          <Bar
            dataKey="previous"
            name="Previous"
            barSize={28} // slightly narrower so underlying bar shows
            fill="url(#lightGreenGrad)" // gradient lighter color
            radius={[6, 6, 0, 0]}
            opacity={0.95}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
