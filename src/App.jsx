import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Layout/Footer";
import AddNewProduct from "./pages/AddProduct";
import Product from "./pages/Product";

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      {/* <Dashboard /> */}
      {/* <AddNewProduct /> */}
      <Product />
      <Footer />
    </div>
  );
};

export default App;
