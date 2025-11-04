import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-sm">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-gray-800 font-semibold text-lg">Payment History</h3>
        <p className="text-gray-400 text-sm">Manage your payments.</p>
      </div>

      {/* Table */}
      <div className="overflow-hidden border border-gray-200 rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-500 text-sm font-medium">
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
                className="border-t border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-4 px-4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="accent-green-500 w-4 h-4 cursor-pointer"
                  />
                  <span className="text-green-600 text-sm font-medium">
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-800 text-sm">
                  {item.email}
                </td>
                <td className="py-3 px-4 text-right text-gray-800 font-semibold">
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-3">
        <button className="flex items-center gap-1 bg-gray-200 text-gray-800 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-300 transition">
          <FaChevronLeft className="text-xs" /> Previous
        </button>
        <button className="flex items-center gap-1 bg-green-500 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-green-600 transition">
          Next <FaChevronRight className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default PaymentHistoryCard;
