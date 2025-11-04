import React from "react";
import { FiPlus, FiEdit } from "react-icons/fi";

const StatsHeader = () => {
  return (
    <div className="bg-gray-50 px-6 py-4 flex flex-wrap justify-between items-center gap-4 rounded-lg">
      <div className="inline-flex gap-6">
        <h2 className="text-lg font-semibold">Stats</h2>

        <div className="flex flex-wrap items-center gap-3">
          {/* Dropdowns */}
          <select className="border border-gray-200 bg-white rounded-lg px-3 py-1.5 text-sm focus:outline-none">
            <option>Years</option>
            <option>Months</option>
            <option>Weeks</option>
          </select>

          <select className="border border-gray-200 bg-white rounded-lg px-3 py-1.5 text-sm focus:outline-none">
            <option>Aug 20th - Dec 4th</option>
          </select>

          <span className="text-sm text-gray-500">compared to</span>

          <select className="border border-gray-200 bg-white rounded-lg px-3 py-1.5 text-sm focus:outline-none">
            <option>Previous</option>
          </select>

          <select className="border border-gray-200 bg-white rounded-lg px-3 py-1.5 text-sm focus:outline-none">
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 border border-gray-200 bg-white text-black px-3 py-1.5 rounded-lg text-sm">
          <FiPlus /> Add
        </button>
        <button className="flex items-center gap-1 border border-gray-200 bg-white px-3 py-1.5 rounded-lg text-sm hover:bg-gray-100">
          <FiEdit /> Edit
        </button>
      </div>
    </div>
  );
};

export default StatsHeader;
