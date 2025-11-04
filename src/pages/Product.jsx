import React from "react";
import ProductTable from "../components/Products/ProductsTable";
import TotalViews from "../components/Products/TotalViews";

const Product = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Product</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
          + Add New Product
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 ">
          {" "}
          <ProductTable />{" "}
        </div>
        <div>
          <TotalViews />`
        </div>
      </div>
    </div>
  );
};

export default Product;
