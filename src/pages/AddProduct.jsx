import React, { useState } from "react";
import { MdOutlineImage } from "react-icons/md";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
            + Add New Product
          </button>
        </div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8 bg-white p-6 rounded-2xl">
          <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition">
              Discard Change
            </button>
            <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
              Save
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* General Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                General Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    placeholder="Product name"
                    value={formData.productName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border  border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Category
                  </label>
                  <select
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                  >
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Food</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows="6"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tag Keywords
                  </label>
                  <textarea
                    name="tagKeywords"
                    rows="4"
                    value={formData.tagKeywords}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Pricing
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Product price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount
                    </label>
                    <input
                      type="text"
                      name="discount"
                      placeholder="Discount"
                      value={formData.discount}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Category
                    </label>
                    <select
                      name="discountCategory"
                      value={formData.discountCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
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

          {/* Right Column - Image Uploads */}
          <div className="space-y-6">
            {/* Preview Product */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Preview Product
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Drag and drop image here
              </p>

              <div className="border-2 border-dashed border-gray-300 bg-gray-100 rounded-lg p-8 text-center hover:border-gray-400 transition cursor-pointer">
                <MdOutlineImage
                  className="mx-auto text-gray-400 mb-3"
                  size={48}
                />
                <p className="text-sm text-gray-500">Drag and drop here</p>
              </div>
            </div>

            {/* Thumbnail Product */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Thumbnail Product
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Drag and drop image here
              </p>

              <div className="border-2 border-dashed border-gray-300 bg-gray-100 rounded-lg p-8 text-center hover:border-gray-400 transition cursor-pointer">
                <MdOutlineImage
                  className="mx-auto text-gray-400 mb-3"
                  size={48}
                />
                <p className="text-sm text-gray-500">Drag and drop here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
