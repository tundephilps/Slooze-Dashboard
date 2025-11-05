import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import theme context

const payments = [
  { id: 1, status: "Success", email: "Youremail@email.com", amount: "$100" },
  { id: 2, status: "Success", email: "Youremail@email.com", amount: "$100" },
  { id: 3, status: "Success", email: "Youremail@email.com", amount: "$100" },
  { id: 4, status: "Success", email: "Youremail@email.com", amount: "$100" },
  { id: 5, status: "Success", email: "Youremail@email.com", amount: "$100" },
  { id: 6, status: "Success", email: "Youremail@email.com", amount: "$100" },
  { id: 7, status: "Success", email: "Youremail@email.com", amount: "$100" },
];

const PaymentHistoryCard = () => {
  const { theme } = useTheme(); // ✅ Access current theme

  return (
    <div
      className={`w-full p-6 rounded-2xl text-[10px] shadow-sm transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-[#1a1a1a]"
      }`}
    >
      {/* Header */}
      <div className="mb-4">
        <h3
          className={`text-lg font-semibold transition-colors ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Payment History
        </h3>
        <p
          className={`text-sm transition-colors ${
            theme === "light" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Manage your payments.
        </p>
      </div>

      {/* Table */}
      <div
        className={`overflow-hidden border  rounded-xl transition-colors ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-none border-gray-700"
        }`}
      >
        <table
          className={`w-full text-left border-collapse transition-colors ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          <thead
            className={`${
              theme === "light"
                ? "bg-gray-50 text-gray-500"
                : "bg-none text-gray-400"
            } text-[10px] font-medium`}
          >
            <tr>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item) => (
              <tr
                key={item.id}
                className={`border-t border-gray-100 text-[10px]  hover:bg-gray-50 transition ${
                  theme === "light" ? "hover:bg-gray-50" : "hover:bg-[#444]"
                }`}
              >
                <td className="py-4 px-4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="accent-green-500 w-4 h-4 cursor-pointer"
                  />
                  <span
                    className={`font-medium text-[10px] transition-colors ${
                      theme === "light" ? "text-green-600" : "text-green-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td
                  className={`py-3 px-4 text-[10px] transition-colors ${
                    theme === "light" ? "text-gray-800" : "text-white"
                  }`}
                >
                  {item.email}
                </td>
                <td
                  className={`py-3 px-4 text-right font-semibold transition-colors ${
                    theme === "light" ? "text-gray-800" : "text-white"
                  }`}
                >
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-3">
        <button
          className={`flex items-center gap-1 px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            theme === "light"
              ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
              : "bg-[#333] text-white hover:bg-[#444]"
          }`}
        >
          <FaChevronLeft className="text-xs" /> Previous
        </button>
        <button
          className={`flex items-center gap-1 px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            theme === "light"
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          Next <FaChevronRight className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default PaymentHistoryCard;
