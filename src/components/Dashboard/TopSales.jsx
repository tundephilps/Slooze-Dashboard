import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  return (
    <div className="w-full  bg-white p-6 rounded-2xl shadow-sm">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-gray-800 font-semibold text-lg">
          Top Sales Product
        </h3>
        <p className="text-gray-400 text-sm">Manage your payments.</p>
      </div>

      {/* Table */}
      <div className="overflow-hidden border border-gray-200 rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-500 text-sm font-medium">
            <tr>
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="flex items-center gap-3 py-2.5 px-4">
                  <img
                    src={item.img}
                    alt="product"
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <div>
                    <p className="text-gray-800 text-sm font-medium">
                      {item.email}
                    </p>
                    <p className="text-gray-400 text-xs">{item.date}</p>
                  </div>
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
      <div className="flex justify-end items-center gap-2 mt-4">
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

export default TopSalesProductCard;
