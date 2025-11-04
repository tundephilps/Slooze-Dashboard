import React, { useState } from "react";
import { FiArrowUp, FiMoreHorizontal } from "react-icons/fi";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

export default function ProductTable() {
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
    <div className="min-h-screen bg-white p-4 md:p-6">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-b-gray-100 pb-4 md:pb-0">
          {/* Tabs */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <button className="pb-3 px-1 font-medium text-gray-900">
              Published
            </button>
            <button className="pb-3 px-1 font-medium text-gray-500 hover:text-gray-900">
              Draft
            </button>
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <select className="flex-1 md:flex-none px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Filter</option>
            </select>
            <select className="flex-1 md:flex-none px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Download</option>
            </select>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto mt-4">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 w-12">
                  <button onClick={handleSelectAll} className="text-gray-600">
                    {selectedAll ? (
                      <MdCheckBox size={20} className="text-blue-600" />
                    ) : (
                      <MdCheckBoxOutlineBlank size={20} />
                    )}
                  </button>
                </th>
                <th className="text-left py-3 px-4 w-16"></th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  Product Name
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <div className="flex items-center gap-1 cursor-pointer">
                    Views
                    <FiArrowUp size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <div className="flex items-center gap-1 cursor-pointer">
                    Pricing
                    <FiArrowUp size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <div className="flex items-center gap-1 cursor-pointer">
                    Revenue
                    <FiArrowUp size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  Manage
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleSelectItem(product.id)}
                      className="text-gray-600"
                    >
                      {selectedItems.includes(product.id) ? (
                        <MdCheckBox size={20} className="text-blue-600" />
                      ) : (
                        <MdCheckBoxOutlineBlank size={20} />
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
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {product.views}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {product.pricing}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {product.revenue}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-xs text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-xs text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition">
                        Delete
                      </button>
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
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
            >
              <div className="flex items-start gap-3">
                {/* Checkbox */}
                <button
                  onClick={() => handleSelectItem(product.id)}
                  className="text-gray-600 mt-1"
                >
                  {selectedItems.includes(product.id) ? (
                    <MdCheckBox size={20} className="text-blue-600" />
                  ) : (
                    <MdCheckBoxOutlineBlank size={20} />
                  )}
                </button>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded object-cover flex-shrink-0"
                />

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <span className="text-gray-500">Views:</span>
                      <span className="ml-1 text-gray-700 font-medium">
                        {product.views}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Pricing:</span>
                      <span className="ml-1 text-gray-700 font-medium">
                        {product.pricing}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-500">Revenue:</span>
                      <span className="ml-1 text-gray-700 font-medium">
                        {product.revenue}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-1.5 text-xs text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition">
                      Edit
                    </button>
                    <button className="flex-1 px-3 py-1.5 text-xs text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition">
                      Delete
                    </button>
                  </div>
                </div>

                {/* More Options */}
                <button className="text-gray-400 hover:text-gray-600">
                  <FiMoreHorizontal size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="w-8 h-8 flex items-center justify-center text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
            ‹
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center text-sm rounded ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-8 h-8 flex items-center justify-center text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
