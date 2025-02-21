import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../../utils";
import logo from "../../assets/Image/11zon_cropped.png";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  {
    label: "Menu",
    path: "#",
    submenu: [
      { label: "Wedding Menu", path: "/weddingmenu" },
      { label: "Anniversary Menu", path: "/anniversarymenu" },
      { label: "Birthday Menu", path: "/birthdaymenu" },
      { label: "Corporate Events", path: "/corporatemenu" },
      { label: "Special Occasions", path: "/specialoccasionmenu" },
      { label: "Seasonal Specials", path: "/seasonalmenu" },
    ],
  },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blogs" },
  { label: "Contact", path: "/contactus" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="sticky top-0 left-0 py-2 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2  h-28 w-28 z-20 mt-4"
            onClick={closeMenu}
          >
            <span className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {isOpen ? (
                ""
              ) : (
                <img
                  className=" rounded-full mt-4 scale-110 max-md:scale-105 "
                  src={logo}
                  alt="logo"
                />
              )}
            </span>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.submenu && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "text-gray-900 hover:text-rose-800 px-3 py-2 text-md font-medium transition-all duration-200 relative group",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 hover:after:scale-x-100"
                  )}
                  onClick={() => !item.submenu && closeMenu()}
                >
                  <span className="flex items-center space-x-1">
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </span>
                </Link>
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div
                    className={cn(
                      "absolute left-0 mt-2 pt-4 w-56 origin-top-left transition-all duration-200",
                      activeDropdown === item.label
                        ? "visible opacity-100 translate-y-0"
                        : "invisible opacity-0 -translate-y-2"
                    )}
                  >
                    <div className=" bg-white py-1 shadow-lg  ">
                      {item.submenu.map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-800 hover:text-white  transition-colors duration-150"
                          onClick={closeMenu}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="tel:+91 9084153502"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-rose-800 hover:bg-rose-700 transition-colors duration-200"
            >
              Book Now
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-rose-900 hover:text-rose-900 hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-800 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "max-h-[calc(100vh-4rem)] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          {menuItems.map((item) => (
            <div key={item.label}>
              <button
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150"
                onClick={() => {
                  if (item.submenu) {
                    setActiveDropdown(
                      activeDropdown === item.label ? null : item.label
                    );
                  } else {
                    closeMenu();
                  }
                }}
              >
                <span className="flex items-center justify-between">
                  <Link to={item.path} className="hover:text-rose-800">
                    {" "}
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        activeDropdown === item.label ? "rotate-180" : ""
                      )}
                    />
                  )}
                </span>
              </button>
              {/* Mobile Submenu */}
              {item.submenu && (
                <div
                  className={cn(
                    "transition-all duration-200 space-y-1",
                    activeDropdown === item.label
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0 overflow-hidden"
                  )}
                >
                  {item.submenu.map((subItem, index) => (
                    <Link
                      key={index}
                      to={subItem.path}
                      className="block pl-6 pr-3 py-2 text-base font-medium text-gray-800 hover:text-rose-800 hover:bg-gray-50 rounded-md transition-colors duration-150"
                      onClick={closeMenu}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Contact Button */}
          <div className="px-3 py-3">
            <Link
              to="tel:+91 9084153502"
              className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-rose-800 hover:bg-rose-700 transition-colors duration-200"
              onClick={closeMenu}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
