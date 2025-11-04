import React from "react";
import { FaUserCircle } from "react-icons/fa";

const sales = [
  {
    name: "Indra Maulana",
    email: "Indramaulana@gmail.com",
    amount: "+$1500.00",
  },
  {
    name: "Indra Maulana",
    email: "Indramaulana@gmail.com",
    amount: "+$1500.00",
  },
  {
    name: "Indra Maulana",
    email: "Indramaulana@gmail.com",
    amount: "+$1500.00",
  },
  {
    name: "Indra Maulana",
    email: "Indramaulana@gmail.com",
    amount: "+$1500.00",
  },
  {
    name: "Indra Maulana",
    email: "Indramaulana@gmail.com",
    amount: "+$1500.00",
  },
  {
    name: "Indra Maulana",
    email: "Indramaulana@gmail.com",
    amount: "+$1500.00",
  },
];

const RecentSales = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
      <h2 className="text-lg font-semibold">Recent Sales</h2>
      <p className="text-sm text-gray-500 mb-4">
        You made 350 sales this month
      </p>

      <div className="space-y-3.5">
        {sales.map((sale, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0"
          >
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-gray-400 text-3xl" />
              <div>
                <p className="text-sm font-medium">{sale.name}</p>
                <p className="text-xs text-gray-500">{sale.email}</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-700">{sale.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSales;
