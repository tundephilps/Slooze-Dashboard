import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddNewProduct from "./pages/AddProduct";
import Product from "./pages/Product";
import Layout from "./components/Layout/layout";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<Layout />}>
            <Route path="/Dashboard" element={<Dashboard />} />

            <Route path="/AddNewProduct" element={<AddNewProduct />} />

            <Route path="/Product" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
