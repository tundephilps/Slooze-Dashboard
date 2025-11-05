import React, { useState } from "react";
import { FiArrowUp, FiMoreHorizontal } from "react-icons/fi";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import theme context

export default function ProductTable() {
  const { theme } = useTheme(); // ✅ Access the current theme
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const products = Array(15)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      image: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop`,
      name: "Product Name Place Here",
      views: "16,000",
      pricing: "$1,000",
      revenue: "$164,000",
    }));

  const handleSelectAll = () => {
    if (selectedAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(products.map((p) => p.id));
    }
    setSelectedAll(!selectedAll);
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div
      className={`min-h-screen  transition-colors duration-300 ${
        theme === "light" ? "bg-[#e9eef4]" : "bg-[#000000]"
      }`}
    >
      <div
        className={`hidden lg:block overflow-x-auto  rounded-lg p-4 ${
          theme === "light" ? "bg-white" : "bg-[#0f0f0f]"
        } shadow-sm`}
      >
        {/* Header Filters */}
        <div
          className={`flex flex-col md:flex-row md:items-center justify-between border-b mb-4 md:pb-4 ${
            theme === "light" ? "border-gray-300" : "border-gray-700"
          }`}
        >
          {/* Tabs */}
          <div className="flex gap-6  md:mb-0">
            <button
              className={`pb-3 px-1 font-medium ${
                theme === "light"
                  ? "text-gray-900  border-blue-600"
                  : "text-white  border-[#3a2a77]"
              }`}
            >
              Published
            </button>
            <button
              className={`pb-3 px-1 font-medium ${
                theme === "light"
                  ? "text-gray-500 hover:text-gray-900"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Draft
            </button>
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            {["Filter", "Download"].map((label, i) => (
              <select
                key={i}
                className={`flex-1 md:flex-none px-3 py-1.5 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  theme === "light"
                    ? "border border-gray-300 bg-white text-gray-700"
                    : "border border-gray-600 bg-[#1a1a1a] text-gray-200"
                }`}
              >
                <option>{label}</option>
              </select>
            ))}
          </div>
        </div>

        {/* Desktop Table View */}
        <div
          className={`hidden lg:block overflow-x-auto mt-4 rounded-lg ${
            theme === "light" ? "bg-white" : "bg-[#0f0f0f]"
          } shadow-sm`}
        >
          <table className="w-full">
            <thead>
              <tr
                className={`${
                  theme === "light"
                    ? "border-b border-gray-200"
                    : "border-b border-gray-700"
                }`}
              >
                <th className="text-left py-3 px-4 w-12">
                  <button onClick={handleSelectAll}>
                    {selectedAll ? (
                      <MdCheckBox size={20} className="text-blue-600" />
                    ) : (
                      <MdCheckBoxOutlineBlank
                        size={20}
                        className={`${
                          theme === "light" ? "text-gray-600" : "text-gray-300"
                        }`}
                      />
                    )}
                  </button>
                </th>
                <th className="w-16"></th>
                {["Product Name", "Views", "Pricing", "Revenue", "Manage"].map(
                  (header, index) => (
                    <th
                      key={index}
                      className={`text-left py-3 px-4 font-medium text-sm ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      {["Views", "Pricing", "Revenue"].includes(header) ? (
                        <div className="flex items-center gap-1 cursor-pointer">
                          {header}
                          <FiArrowUp
                            size={14}
                            className={`${
                              theme === "light"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          />
                        </div>
                      ) : (
                        header
                      )}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className={`transition ${
                    theme === "light"
                      ? "border-b border-gray-100 hover:bg-gray-50"
                      : "border-b border-gray-800 hover:bg-[#271c60]"
                  }`}
                >
                  <td className="py-3 px-4">
                    <button onClick={() => handleSelectItem(product.id)}>
                      {selectedItems.includes(product.id) ? (
                        <MdCheckBox size={20} className="text-blue-600" />
                      ) : (
                        <MdCheckBoxOutlineBlank
                          size={20}
                          className={`${
                            theme === "light"
                              ? "text-gray-600"
                              : "text-gray-300"
                          }`}
                        />
                      )}
                    </button>
                  </td>
                  <td className="py-3 px-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded object-cover"
                    />
                  </td>
                  <td
                    className={`py-3 px-4 text-sm font-medium ${
                      theme === "light" ? "text-gray-900" : "text-gray-100"
                    }`}
                  >
                    {product.name}
                  </td>
                  <td
                    className={`py-3 px-4 text-sm ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    {product.views}
                  </td>
                  <td
                    className={`py-3 px-4 text-sm ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    {product.pricing}
                  </td>
                  <td
                    className={`py-3 px-4 text-sm ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    {product.revenue}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      {["Edit", "Delete"].map((action, i) => (
                        <button
                          key={i}
                          className={`px-3 py-1 text-xs rounded transition ${
                            theme === "light"
                              ? "text-gray-600 bg-gray-100 hover:bg-gray-200"
                              : "text-gray-200 bg-[#1a1a1a] hover:bg-[#3a2a77]"
                          }`}
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden mt-4 space-y-3">
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-lg p-4 transition ${
                theme === "light"
                  ? "bg-white border border-gray-200 hover:shadow-md"
                  : "bg-[#0f0f0f] border border-gray-800 hover:bg-[#271c60]"
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => handleSelectItem(product.id)}
                  className={`mt-1 ${
                    theme === "light" ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  {selectedItems.includes(product.id) ? (
                    <MdCheckBox size={20} className="text-blue-600" />
                  ) : (
                    <MdCheckBoxOutlineBlank size={20} />
                  )}
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded object-cover flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-sm font-medium mb-2 ${
                      theme === "light" ? "text-gray-900" : "text-gray-100"
                    }`}
                  >
                    {product.name}
                  </h3>

                  <div
                    className={`grid grid-cols-2 gap-2 text-xs mb-3 ${
                      theme === "light" ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    <div>
                      Views:{" "}
                      <span
                        className={`font-medium ${
                          theme === "light" ? "text-gray-800" : "text-gray-200"
                        }`}
                      >
                        {product.views}
                      </span>
                    </div>
                    <div>
                      Pricing:{" "}
                      <span
                        className={`font-medium ${
                          theme === "light" ? "text-gray-800" : "text-gray-200"
                        }`}
                      >
                        {product.pricing}
                      </span>
                    </div>
                    <div className="col-span-2">
                      Revenue:{" "}
                      <span
                        className={`font-medium ${
                          theme === "light" ? "text-gray-800" : "text-gray-200"
                        }`}
                      >
                        {product.revenue}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {["Edit", "Delete"].map((action, i) => (
                      <button
                        key={i}
                        className={`flex-1 px-3 py-1.5 text-xs rounded transition ${
                          theme === "light"
                            ? "text-gray-600 bg-gray-100 hover:bg-gray-200"
                            : "text-gray-200 bg-[#1a1a1a] hover:bg-[#3a2a77]"
                        }`}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  className={`${
                    theme === "light"
                      ? "text-gray-400 hover:text-gray-600"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <FiMoreHorizontal size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            className={`w-8 h-8 flex items-center justify-center text-sm border rounded transition ${
              theme === "light"
                ? "text-gray-600 border-gray-300 hover:bg-gray-50"
                : "text-gray-200 border-gray-700 hover:bg-[#271c60]"
            }`}
          >
            ‹
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center text-sm rounded transition ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : theme === "light"
                  ? "text-gray-600 hover:bg-gray-50"
                  : "text-gray-200 hover:bg-[#271c60]"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            className={`w-8 h-8 flex items-center justify-center text-sm border rounded transition ${
              theme === "light"
                ? "text-gray-600 border-gray-300 hover:bg-gray-50"
                : "text-gray-200 border-gray-700 hover:bg-[#271c60]"
            }`}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
