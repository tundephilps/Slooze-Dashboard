import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  MdOutlineNotificationsActive,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import Face from "../../assets/Face.jpg";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="flex flex-wrap items-center justify-between p-4 bg-[#e9eef4] gap-3">
      {/* Left: Search Section */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        {/* Mobile Search Toggle */}
        <button
          className="md:hidden p-2 bg-white rounded-md shadow-sm"
          onClick={() => setShowSearch(!showSearch)}
        >
          <FaSearch className="text-gray-500 text-lg" />
        </button>

        {/* Search Input (hidden on small screens unless toggled) */}
        <div
          className={`relative flex-grow md:flex md:items-center md:w-96 ${
            showSearch ? "flex" : "hidden md:flex"
          }`}
        >
          <input
            type="text"
            placeholder="Search"
            className="p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400 hidden md:block" />
        </div>

        {/* Search Button (hidden on mobile) */}
        <button className="hidden md:block bg-[#1777FF] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">
          Search
        </button>
      </div>

      {/* Right: User Section */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-end">
        <div className="inline-flex items-center gap-1 bg-white p-2 rounded-md cursor-pointer text-sm">
          <p className="hidden sm:block">Admin</p>
          <MdKeyboardArrowDown />
        </div>

        <button className="text-gray-600 hover:text-gray-800">
          <RxDashboard className="text-xl" />
        </button>

        <button className="text-gray-600 hover:text-gray-800 relative">
          <MdOutlineNotificationsActive className="text-xl" />
          {/* Notification dot */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="">
          <img
            src={Face}
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover border border-gray-300"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
