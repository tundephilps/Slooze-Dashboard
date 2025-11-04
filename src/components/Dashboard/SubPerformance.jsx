import React from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";
import { FaCaretUp } from "react-icons/fa";

const data = [
  { name: "Jan", value: 70 },
  { name: "Feb", value: 50 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 45 },
  { name: "May", value: 65 },
  { name: "Jun", value: 55 },
  { name: "Jul", value: 50 },
  { name: "Aug", value: 65 },
  { name: "Sep", value: 60 },
  { name: "Oct", value: 50 },
  { name: "Nov", value: 70 },
  { name: "Dec", value: 75 },
];

const SubscriptionsPerformersCard = () => {
  return (
    <>
      <div className="text-start items-start mb-4 bg-white w-full   p-6 rounded-2xl shadow-sm">
        <h3 className="text-gray-800 font-semibold text-lg ">
          Subscriptions Performers
        </h3>
        <p className="text-gray-400 text-sm pb-12">Follower This Years</p>
        <div className=" flex flex-col items-center">
          {/* Header */}

          {/* Statistic */}
          <div className="flex items-center justify-center gap-1 mb-4">
            <h1 className="text-5xl font-bold text-gray-900">+500</h1>
            <FaCaretUp className="text-black text-lg" />
          </div>

          {/* Bar Chart */}
          <div className="w-full h-72 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    background: "white",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar dataKey="value" fill="#FFA500" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Button */}
          <button className="w-full bg-green-500 text-white py-2 rounded-full font-semibold hover:bg-green-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default SubscriptionsPerformersCard;
