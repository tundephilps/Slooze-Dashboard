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
  return (
    <div className="bg-white rounded-2xl shadow-md px-6 py-4 w-full ">
      <div className="mb-6">
        <h2 className="text-gray-500 text-sm font-medium">Total Earning</h2>
        <p className="text-3xl font-bold text-gray-800">$112,893.00</p>
        <div className="flex items-center gap-2 text-sm mt-1">
          <span className="flex items-center gap-1 text-gray-600">
            trend title{" "}
            <span className="flex items-center gap-1 text-green-500">
              <FaArrowUp className="text-green-500" />
              70.5%
            </span>
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis dataKey="month" hide />
          <YAxis hide />
          <Tooltip />
          <Bar
            dataKey="earnings"
            fill="#22c55e"
            radius={[6, 6, 0, 0]} // rounded top bars
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
