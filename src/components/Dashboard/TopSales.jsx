import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import theme context

const products = [
  {
    id: 1,
    img: "https://via.placeholder.com/40x40",
    email: "Youremail@email.com",
    date: "02/10/2024",
    amount: "$100",
  },
  {
    id: 2,
    img: "https://via.placeholder.com/40x40",
    email: "Youremail@email.com",
    date: "02/10/2024",
    amount: "$100",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/40x40",
    email: "Youremail@email.com",
    date: "02/10/2024",
    amount: "$100",
  },
  {
    id: 4,
    img: "https://via.placeholder.com/40x40",
    email: "Youremail@email.com",
    date: "02/10/2024",
    amount: "$100",
  },
  {
    id: 5,
    img: "https://via.placeholder.com/40x40",
    email: "Youremail@email.com",
    date: "02/10/2024",
    amount: "$100",
  },
  {
    id: 6,
    img: "https://via.placeholder.com/40x40",
    email: "Youremail@email.com",
    date: "02/10/2024",
    amount: "$100",
  },
];

const TopSalesProductCard = () => {
  const { theme } = useTheme(); // ✅ Access current theme

  return (
    <div
      className={`w-full p-6 rounded-2xl shadow-sm transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-[#151515]"
      }`}
    >
      {/* Header */}
      <div className="mb-4">
        <h3
          className={`text-lg font-semibold transition-colors ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Top Sales Product
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
        className={`overflow-hidden border border-gray-200 rounded-xl transition-colors ${
          theme === "light" ? "bg-white" : "bg-none"
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
            } text-sm font-medium`}
          >
            <tr>
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr
                key={item.id}
                className={`border-t border-gray-100 hover:bg-gray-50 transition ${
                  theme === "light" ? "hover:bg-gray-50" : "hover:bg-[#444]"
                }`}
              >
                <td className="flex items-center gap-3 py-2.5 px-4">
                  <img
                    src={item.img}
                    alt="product"
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <div>
                    <p
                      className={`text-sm font-medium transition-colors ${
                        theme === "light" ? "text-gray-800" : "text-white"
                      }`}
                    >
                      {item.email}
                    </p>
                    <p
                      className={`text-xs transition-colors ${
                        theme === "light" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {item.date}
                    </p>
                  </div>
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
      <div className="flex justify-end items-center gap-2 mt-4">
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

export default TopSalesProductCard;
