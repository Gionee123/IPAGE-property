import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoMoon, IoSunny } from "react-icons/io5";
import { usePropertyContext } from "../context/PropertyContext";

export default function Header() {
  const [showmenu, setshowmenu] = useState(false);
  const [activeLink, setActiveLink] = useState("Services");
  const [darkMode, setDarkMode] = useState(false);
  const { searchTerm, setSearchTerm } = usePropertyContext();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      const isDark = JSON.parse(savedDarkMode);
      setDarkMode(isDark);
    }
  }, []);

  // Save dark mode preference and apply to document
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800">
      <header className="flex justify-between items-center px-4 py-4 mx-auto w-full max-w-7xl">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-gray-700 dark:text-white">
            <img src="/download.jpeg" className="w-[50px] h-[50px]" />
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative ${
                activeLink === link.name ? "font-medium" : ""
              }`}
              onClick={() => setActiveLink(link.name)}
            >
              {link.name}
              {activeLink === link.name && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden relative items-center lg:flex">
          <IoSearch className="absolute left-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="py-2 pr-4 pl-10 w-64 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Dark Mode Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <IoSunny className="w-6 h-6" />
            ) : (
              <IoMoon className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-gray-700 dark:text-gray-300 md:hidden"
            aria-label="Toggle Menu"
            onClick={() => setshowmenu(!showmenu)}
          >
            {showmenu ? (
              <RxCross2 className="w-6 h-6" />
            ) : (
              <IoReorderThreeOutline className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {showmenu && (
        <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 md:hidden">
          <nav className="px-4 py-4">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block py-2 px-3 rounded-lg transition-colors ${
                      activeLink === link.name
                        ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => {
                      setActiveLink(link.name);
                      setshowmenu(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Search */}
            <div className="relative mt-4">
              <IoSearch className="absolute left-3 top-1/2 w-5 h-5 text-gray-400 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="py-2 pr-4 pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
