import React, { useState } from "react";
import { MdOutlineImage } from "react-icons/md";
import { useTheme } from "../context/ThemeContext"; // ✅ import theme

export default function AddNewProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    description: "",
    tagKeywords: "",
    price: "",
    discount: "",
    discountCategory: "",
  });

  const { theme } = useTheme(); // ✅ access current theme

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${
        theme === "light" ? "bg-[#e9eef4]" : "bg-[#000000] text-white"
      }`}
    >
      <div className="mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1
            className={`text-xl font-semibold ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Dashboard
          </h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
            + Add New Product
          </button>
        </div>

        {/* Top Section */}
        <div
          className={`flex items-center justify-between mb-8 p-6 rounded-2xl transition-colors duration-300 ${
            theme === "light"
              ? "bg-white text-gray-800"
              : "bg-[#151515] text-white"
          }`}
        >
          <h1 className="text-2xl font-bold">Add New Product</h1>
          <div className="flex gap-3">
            <button
              className={`px-4 py-2 text-sm border rounded-md transition ${
                theme === "light"
                  ? "text-red-600 border-red-600 hover:bg-red-50"
                  : "text-red-400 border-red-500 hover:bg-[#3a2a77]"
              }`}
            >
              Discard Change
            </button>
            <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
              Save
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            {/* General Information */}
            <div
              className={`rounded-lg shadow-sm p-6 transition-colors duration-300 ${
                theme === "light" ? "bg-white" : "bg-[#151515]"
              }`}
            >
              <h2
                className={`text-lg font-semibold mb-4 ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                General Information
              </h2>

              <div className="space-y-4">
                {/* Product Name */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    placeholder="Product name"
                    value={formData.productName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      theme === "light"
                        ? "border-gray-300 bg-gray-100 text-gray-800"
                        : "border-gray-600 bg-[#151515] text-gray-100"
                    }`}
                  />
                </div>

                {/* Category */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    Product Category
                  </label>
                  <select
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      theme === "light"
                        ? "border-gray-300 bg-gray-100 text-gray-700"
                        : "border-gray-600 bg-[#151515] text-gray-200"
                    }`}
                  >
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Food</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows="6"
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      theme === "light"
                        ? "border-gray-300 bg-gray-100 text-gray-800"
                        : "border-gray-600 bg-[#151515] text-gray-100"
                    }`}
                  ></textarea>
                </div>

                {/* Tag Keywords */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    Tag Keywords
                  </label>
                  <textarea
                    name="tagKeywords"
                    rows="4"
                    value={formData.tagKeywords}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      theme === "light"
                        ? "border-gray-300 bg-gray-100 text-gray-800"
                        : "border-gray-600 bg-[#151515] text-gray-100"
                    }`}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div
              className={`rounded-lg shadow-sm p-6 transition-colors duration-300 ${
                theme === "light" ? "bg-white" : "bg-[#151515]"
              }`}
            >
              <h2
                className={`text-lg font-semibold mb-4 ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                Pricing
              </h2>

              <div className="space-y-4">
                {/* Price */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "light" ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Product price"
                    value={formData.price}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      theme === "light"
                        ? "border-gray-300 bg-gray-100 text-gray-800"
                        : "border-gray-600 bg-[#151515] text-gray-100"
                    }`}
                  />
                </div>

                {/* Discount + Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      Discount
                    </label>
                    <input
                      type="text"
                      name="discount"
                      placeholder="Discount"
                      value={formData.discount}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                        theme === "light"
                          ? "border-gray-300 bg-gray-100 text-gray-800"
                          : "border-gray-600 bg-[#151515] text-gray-100"
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      Discount Category
                    </label>
                    <select
                      name="discountCategory"
                      value={formData.discountCategory}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                        theme === "light"
                          ? "border-gray-300 bg-gray-100 text-gray-700"
                          : "border-gray-600 bg-[#151515] text-gray-200"
                      }`}
                    >
                      <option value="">Discount Category</option>
                      <option value="percentage">Percentage</option>
                      <option value="fixed">Fixed Amount</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Preview Product */}
            <div
              className={`rounded-lg shadow-sm p-6 transition-colors duration-300 ${
                theme === "light" ? "bg-white" : "bg-[#151515]"
              }`}
            >
              <h2
                className={`text-lg font-semibold mb-2 ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                Preview Product
              </h2>
              <p
                className={`text-sm mb-4 ${
                  theme === "light" ? "text-gray-500" : "text-gray-300"
                }`}
              >
                Drag and drop image here
              </p>

              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center hover:border-gray-400 transition cursor-pointer ${
                  theme === "light"
                    ? "border-gray-300 bg-gray-100"
                    : "border-gray-600 bg-[#151515]"
                }`}
              >
                <MdOutlineImage
                  className={`mx-auto mb-3 ${
                    theme === "light" ? "text-gray-400" : "text-gray-300"
                  }`}
                  size={48}
                />
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  Drag and drop here
                </p>
              </div>
            </div>

            {/* Thumbnail Product */}
            <div
              className={`rounded-lg shadow-sm p-6 transition-colors duration-300 ${
                theme === "light" ? "bg-white" : "bg-[#151515]"
              }`}
            >
              <h2
                className={`text-lg font-semibold mb-2 ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                Thumbnail Product
              </h2>
              <p
                className={`text-sm mb-4 ${
                  theme === "light" ? "text-gray-500" : "text-gray-300"
                }`}
              >
                Drag and drop image here
              </p>

              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center hover:border-gray-400 transition cursor-pointer ${
                  theme === "light"
                    ? "border-gray-300 bg-gray-100"
                    : "border-gray-600 bg-[#151515]"
                }`}
              >
                <MdOutlineImage
                  className={`mx-auto mb-3 ${
                    theme === "light" ? "text-gray-400" : "text-gray-300"
                  }`}
                  size={48}
                />
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  Drag and drop here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
