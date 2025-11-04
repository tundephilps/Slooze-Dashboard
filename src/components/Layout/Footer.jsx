import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

export default function Footer() {
  const columns = [
    {
      title: "Get Started",
      links: ["Service", "Contact Us", "Affiliate Program", "About Us"],
    },
    {
      title: "Get Started",
      links: ["Dashboard", "Platform", "Workout Library", "App Design"],
    },
    {
      title: "Get Started",
      links: ["About Us"],
    },
  ];

  return (
    <footer className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <IoDiamondOutline className="text-yellow-500" size={24} />
              <span className="text-xl font-bold text-gray-800">Onion</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ease of shipping is our main focus. With powerful search features
              and customizable filters, you can easily find the products you are
              looking for.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
              >
                <FaFacebookF className="text-gray-100" size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
              >
                <FaInstagram className="text-gray-100" size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
              >
                <FaLinkedinIn className="text-gray-100" size={14} />
              </a>
            </div>
            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-3">
                Subscribe to Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  className="flex-1 px-4 py-2 text-sm border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900 transition"
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
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">2024 MayFit</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-700 transition"
            >
              Twitter
            </a>
            <span className="text-gray-300">—</span>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-700 transition"
            >
              Instagram
            </a>
            <span className="text-gray-300">—</span>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-700 transition"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
