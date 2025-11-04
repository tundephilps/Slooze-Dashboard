import React from "react";
import { BsFileBarGraph } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import { MdArrowDropUp } from "react-icons/md";

const Stats = () => {
  const stats = [
    {
      title: "Total Earning",
      value: "$112,893.00",
      growth: " 7.3%",
    },
    {
      title: "Views",
      value: "+112,893",
      growth: " 7.3%",
    },
    {
      title: "Total Sales",
      value: "+112,893",
      growth: " 7.3%",
    },
    {
      title: "Subscriptions",
      value: "+112,893",
      growth: " 7.3%",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
          + Add New Product
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-start"
          >
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-xl font-semibold mt-1">{item.value}</h2>
              <p className="text-green-500 text-sm mt-1 inline-flex items-center gap-1">
                <span className="text-gray-600">Trend Title</span>{" "}
                <MdArrowDropUp /> {item.growth}
              </p>
            </div>
            <BsFileBarGraph className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
