import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // ✅ import theme context

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
  const { theme } = useTheme(); // ✅ access current theme

  return (
    <div
      className={`p-6 rounded-xl shadow-sm mt-6 transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-[#1a1a1a]"
      }`}
    >
      {/* Header */}
      <h2
        className={`text-lg font-semibold transition-colors ${
          theme === "light" ? "text-gray-900" : "text-gray-100"
        }`}
      >
        Recent Sales
      </h2>
      <p
        className={`text-sm mb-4 transition-colors ${
          theme === "light" ? "text-gray-500" : "text-gray-400"
        }`}
      >
        You made 350 sales this month
      </p>

      {/* Sales List */}
      <div className="space-y-3.5">
        {sales.map((sale, index) => (
          <div
            key={index}
            className={`flex justify-between items-center pb-3 last:border-0 transition-colors ${
              theme === "light"
                ? "border-b border-gray-100"
                : "border-b border-gray-800"
            }`}
          >
            {/* User Info */}
            <div className="flex items-center gap-3">
              <FaUserCircle
                className={`text-3xl transition-colors ${
                  theme === "light" ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <div>
                <p
                  className={`text-sm font-medium transition-colors ${
                    theme === "light" ? "text-gray-900" : "text-gray-100"
                  }`}
                >
                  {sale.name}
                </p>
                <p
                  className={`text-xs transition-colors ${
                    theme === "light" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {sale.email}
                </p>
              </div>
            </div>

            {/* Amount */}
            <p
              className={`text-sm font-semibold transition-colors ${
                theme === "light" ? "text-gray-700" : "text-[#dec224]"
              }`}
            >
              {sale.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSales;
