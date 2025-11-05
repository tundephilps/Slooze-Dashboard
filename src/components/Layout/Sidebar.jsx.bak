import React, { useState } from "react";
import {
  MdHome,
  MdDashboard,
  MdStore,
  MdBarChart,
  MdAttachMoney,
  MdSettings,
  MdHelp,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import { useTheme } from "../../context/ThemeContext"; // Import theme context

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({
    home: false,
    dashboard: false,
    store: false,
    analytic: false,
    finances: false,
    accountSetting: false,
    helpAndSupport: false,
  });

  const { theme } = useTheme(); // Get the current theme from context

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const menuItems = [
    {
      id: "home",
      label: "Home",
      icon: <MdHome size={20} />,
      link: "/Dashboard",
      subItems: [],
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <MdDashboard size={20} />,
      link: "/Dashboard",
      subItems: [],
    },
    {
      id: "store",
      label: "Store",
      icon: <MdStore size={20} />,
      link: "/store",
      subItems: [
        { label: "Product", link: "/Product" },
        { label: "Add Product", link: "/AddNewProduct" },
      ],
    },
    {
      id: "analytic",
      label: "Analytic",
      icon: <MdBarChart size={20} />,
      link: "/analytic",
      subItems: [
        { label: "Traffic", link: "" },
        { label: "Earning", link: "" },
      ],
    },
    {
      id: "finances",
      label: "Finances",
      icon: <MdAttachMoney size={20} />,
      link: "/finances",
      subItems: [
        { label: "Payment", link: "" },
        { label: "Payout", link: "" },
      ],
    },
    {
      id: "accountSetting",
      label: "Account Setting",
      icon: <MdSettings size={20} />,
      link: "/account-setting",
      subItems: [
        { label: "My Profile", link: "" },
        { label: "Security", link: "" },
      ],
    },
    {
      id: "helpAndSupport",
      label: "Help And Support",
      icon: <MdHelp size={20} />,
      link: "/help-support",
      subItems: [],
    },
  ];

  return (
    <div
      className={`w-64 h-screen overflow-y-auto 
        ${theme === "light" ? "bg-[#e9eef4] " : "bg-[#000000] "}`}
    >
      {/* Brand Header */}
      <div
        className={`p-4 
          ${theme === "light" ? "border-gray-200" : "border-gray-600"}`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center
              ${theme === "light" ? "bg-gray-200" : "bg-gray-700"}`}
          >
            <MdStore
              className={`${
                theme === "light" ? "text-gray-600" : "text-white"
              }`}
              size={20}
            />
          </div>
          <span
            className={`text-lg font-semibold 
              ${theme === "light" ? "text-gray-800" : "text-white"}`}
          >
            Bitstore
          </span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="py-4">
        {menuItems.map((item) => (
          <div key={item.id}>
            {/* Main Menu Item */}
            <button
              onClick={() =>
                item.subItems.length > 0
                  ? toggleMenu(item.id)
                  : (window.location.href = item.link)
              }
              className={`w-full flex items-center justify-between px-4 py-3 
                ${
                  theme === "light"
                    ? "text-gray-700 hover:bg-gray-50"
                    : "text-white hover:bg-[#271c60]"
                } 
                transition`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`${
                    theme === "light" ? "text-gray-500" : "text-white"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-sm font-medium 
                    ${theme === "light" ? "text-gray-700" : "text-white"}`}
                >
                  {item.label}
                </span>
              </div>
              {item.subItems.length > 0 &&
                (openMenus[item.id] ? (
                  <MdExpandLess
                    className={`${
                      theme === "light" ? "text-gray-400" : "text-white"
                    }`}
                    size={20}
                  />
                ) : (
                  <MdExpandMore
                    className={`${
                      theme === "light" ? "text-gray-400" : "text-white"
                    }`}
                    size={20}
                  />
                ))}
            </button>

            {/* Sub Menu Items */}
            {item.subItems.length > 0 && openMenus[item.id] && (
              <div
                className={`${
                  theme === "light" ? "bg-gray-50" : "bg-[#271c60]"
                }`}
              >
                {item.subItems.map((subItem, index) => (
                  <a
                    key={index}
                    href={subItem.link}
                    className={`block px-4 py-2.5 pl-14 text-sm 
                      ${
                        theme === "light"
                          ? "text-gray-600 hover:bg-gray-100"
                          : "text-white hover:bg-[#3a2a77]"
                      } 
                      transition`}
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
