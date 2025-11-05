import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import theme context

export default function Footer() {
  const { theme } = useTheme(); // ✅ Access current theme

  const columns = [
    {
      title: "Get Started",
      links: ["Service", "Contact Us", "Affiliate Program", "About Us"],
    },
    {
      title: "Resources",
      links: ["Dashboard", "Platform", "Workout Library", "App Design"],
    },
    {
      title: "Company",
      links: ["About Us"],
    },
  ];

  return (
    <footer
      className={`py-12 px-6 md:px-20 transition-colors duration-300 ${
        theme === "light"
          ? "bg-white text-gray-800"
          : "bg-[#151515] text-gray-200 border-t border-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <IoDiamondOutline
                className={`${
                  theme === "light" ? "text-yellow-500" : "text-yellow-400"
                }`}
                size={24}
              />
              <span
                className={`text-xl font-bold ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                Onion
              </span>
            </div>

            <p
              className={`text-sm leading-relaxed ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Ease of shipping is our main focus. With powerful search features
              and customizable filters, you can easily find the products you are
              looking for.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                    theme === "light"
                      ? "bg-gray-700 hover:bg-gray-300"
                      : "bg-gray-600 hover:bg-[#3a2a77]"
                  }`}
                >
                  <Icon
                    className={`${
                      theme === "light" ? "text-gray-100" : "text-white"
                    }`}
                    size={14}
                  />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4
                className={`text-sm font-semibold mb-3 ${
                  theme === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                Subscribe to Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  className={`flex-1 px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    theme === "light"
                      ? "border border-gray-300 bg-gray-100 text-gray-700"
                      : "border border-gray-600 bg-[#000000] text-gray-100"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <h3
                className={`text-sm font-semibold mb-4 ${
                  theme === "light" ? "text-gray-800" : "text-gray-100"
                }`}
              >
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className={`text-sm transition ${
                        theme === "light"
                          ? "text-gray-600 hover:text-gray-900"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t transition ${
            theme === "light"
              ? "border-gray-200 text-gray-500"
              : "border-gray-700 text-gray-400"
          }`}
        >
          <p className="text-sm mb-4 md:mb-0">
            © 2025 Onion — All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Instagram", "Facebook"].map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <span
                    className={`${
                      theme === "light" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    —
                  </span>
                )}
                <a
                  href="#"
                  className={`text-sm transition ${
                    theme === "light"
                      ? "text-gray-500 hover:text-gray-700"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
