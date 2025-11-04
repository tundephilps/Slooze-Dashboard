import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import { FaArrowUp } from "react-icons/fa";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 420 },
  { name: "Mar", value: 380 },
  { name: "Apr", value: 360 },
  { name: "May", value: 370 },
  { name: "Jun", value: 390 },
  { name: "Jul", value: 280 },
];

const SubscriptionsCard = () => {
  return (
    <div className="w-full h-full bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex flex-col gap-1">
        <h3 className="text-gray-500 text-sm font-medium">Subscriptions</h3>
        <h1 className="text-3xl font-bold text-gray-900">+112,893</h1>
        <div className="flex items-center gap-1">
          <span className="text-gray-400 text-sm">trend title</span>

          <FaArrowUp className="text-green-500 text-xs" />
          <span className="text-green-500 text-sm font-semibold">70.5%</span>
        </div>
      </div>

      <div className="mt-4 h-40 ">
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
            <Line
              type="monotone"
              dataKey="value"
              stroke="#F9B233"
              strokeWidth={3}
              dot={{ r: 4, fill: "#F9B233", strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SubscriptionsCard;
