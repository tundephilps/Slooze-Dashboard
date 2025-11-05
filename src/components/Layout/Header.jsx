import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  MdOutlineNotificationsActive,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { BsMoon, BsSun } from "react-icons/bs"; // icons for theme toggle
import { useTheme } from "../../context/ThemeContext"; // Your custom theme context
import Face from "../../assets/Face.jpg";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`flex flex-wrap items-center justify-between p-4 gap-3 transition-colors duration-300 
        ${
          theme === "light"
            ? "bg-[#e9eef4] text-gray-800"
            : "bg-[#000000] text-white"
        }`}
    >
      {/* Left: Search Section */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        {/* Mobile Search Toggle */}
        <button
          className={`md:hidden p-2 rounded-md shadow-sm 
            ${theme === "light" ? "bg-white" : "bg-gray-700"}`}
          onClick={() => setShowSearch(!showSearch)}
        >
          <FaSearch
            className={`${
              theme === "light" ? "text-gray-500" : "text-gray-300"
            } text-lg`}
          />
        </button>

        {/* Search Input */}
        <div
          className={`relative flex-grow md:flex md:items-center md:w-96 ${
            showSearch ? "flex" : "hidden md:flex"
          }`}
        >
          <input
            type="text"
            placeholder="Search"
            className={`p-2 w-full border rounded-lg 
              ${
                theme === "light"
                  ? "bg-white text-gray-900 border-gray-400"
                  : "bg-none text-white border-gray-600"
              } 
              focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400 hidden md:block" />
        </div>

        {/* Search Button */}
        <button
          className={`hidden md:block px-4 py-2 rounded-lg text-sm 
            ${
              theme === "light"
                ? "bg-[#1777FF] text-white hover:bg-blue-600"
                : "bg-purple-600 text-white hover:bg-[#40bcb6]"
            }`}
        >
          Search
        </button>
      </div>

      {/* Right: User Section */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-end">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full shadow-md hover:scale-105 transition-transform 
            ${theme === "light" ? "bg-white" : "bg-gray-700"}`}
        >
          {theme === "light" ? (
            <BsMoon className="text-gray-800" />
          ) : (
            <BsSun className="text-yellow-400" />
          )}
        </button>

        <div
          className={`inline-flex items-center gap-1  p-2 rounded-md cursor-pointer text-sm ${
            theme === "light" ? "text-black bg-white" : "text-white bg-none"
          }`}
        >
          <p
            className={`hidden sm:block ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Admin
          </p>
          <MdKeyboardArrowDown />
        </div>

        <button
          className={`text-gray-600 hover:text-gray-800 ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          <RxDashboard className="text-xl" />
        </button>

        <button
          className={`text-gray-600 hover:text-gray-800 relative ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          <MdOutlineNotificationsActive className="text-xl" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button>
          <img
            src={Face}
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover border border-gray-300 dark:border-gray-600"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
