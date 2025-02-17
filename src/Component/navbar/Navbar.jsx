import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Image/11zon_cropped.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  Aos.init({
    duration: 600,
    once: true,
  });
  return (
    <nav className="flex justify-between items-center h-[80px] bg-white shadow-md sticky top-0 z-100 p-14">
      <Link to="/" className="overflow-hidden absolute top-2 h-28 w-28 z-20">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-full rounded-full object-cover"
        />
      </Link>
      <div></div>
      <div
        className={`${
          isOpen ? "block py-2" : "hidden"
        } lg:flex w-full lg:w-auto max-md:absolute max-md:top-[80px] left-0 bg-white max-md:text-center`}
      >
        <ul className="lg:flex lg:space-x-4 mt-4 lg:mt-0 space-y-2 lg:space-y-0 gap-8">
          <li>
            <Link
              className="block text-gray-700 hover:scale-125 duration-700 hover:max-md:bg-rose-700 hover:max-md:text-white"
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block text-gray-700 hover:scale-125 duration-700 hover:max-md:bg-rose-700 hover:max-md:text-white"
              to="/about"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="block text-gray-700 hover:scale-125 duration-700 hover:max-md:bg-rose-700 hover:max-md:text-white"
              to="/services"
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li className="relative group">
            <Link
              className="block text-gray-700 hover:scale-125 duration-700 hover:max-md:bg-rose-700 hover:max-md:text-white"
              to="#"
              onClick={(e) => e.preventDefault()}
            >
              Menu
            </Link>
            <ul
              className="dropList absolute hidden group-hover:block bg-white top-6 shadow-lg w-72"
              style={{ paddingTop: "28px" }}
            >
              {[
                "Wedding menu",
                "60th wedding menu",
                "70th wedding menu",
                "80th wedding menu",
                "Engagement menu",
                "Seemantham menu",
                "Annaprasana ceremony",
                "Birthday menu",
                "House warming breakfast menu",
                "House warming lunch menu",
                "Mehndi Function menu",
              ].map((item, index) => (
                <li key={index} className="hover:bg-rose-800">
                  <Link
                    className="dropList block px-4 hover:scale-105 duration-700 hover:text-white "
                    to="#"
                    style={{ padding: "4px 20px" }}
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              className="block text-gray-700 hover:scale-125 duration-700 hover:max-md:bg-rose-700 hover:max-md:text-white"
              to="/gallery"
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="block text-gray-700 hover:scale-125 duration-700 hover:max-md:bg-rose-700 hover:max-md:text-white"
              to="/blogs"
              onClick={closeMenu}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className="block text-gray-700 hover:scale-125 duration-700 hover:max-md:bg-rose-700 max-md:hover:text-white"
              to="/contactus"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-8">
        <Link
          style={{ padding: "8px 16px" }}
          className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full max-md:hidden"
          type="submit"
        >
          <a href={"tel:+91 9084153502"} className="text-white ">
            Book Now
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 19"
            className="w-8 h-8 bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 p-2 rotate-45"
          >
            <path
              className="fill-rose-800"
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            ></path>
          </svg>
        </Link>
        <button
          className="lg:hidden block text-white focus:outline-none bg-rose-800 rounded-full"
          style={{ padding: "8px" }}
          onClick={toggleMenu}
        >
          {isOpen ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
