import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../../context/ThemeContext"; // ✅ import theme context

const Layout = () => {
  const { theme } = useTheme(); // ✅ get current theme

  return (
    <>
      <div
        className={`flex w-full min-h-screen transition-colors duration-300 ${
          theme === "light" ? "bg-[#e9eef4]" : "bg-[#000000] text-white"
        }`}
      >
        {/* Sidebar (hidden on small screens) */}
        <div className="lg:block hidden">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 pb-12">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
