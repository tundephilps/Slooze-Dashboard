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
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
      <h2 className="text-lg font-semibold mb-4">Overview</h2>
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={35}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis
              tickFormatter={(value) => `$${value}`}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              formatter={(value) => [`$${value}`, "Earnings"]}
            />
            <Bar
              dataKey="value"
              fill="#3B82F6"
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
