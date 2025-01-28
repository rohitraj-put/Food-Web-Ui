import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center h-[80px] bg-white shadow-md sticky top-0 z-100 p-14 ">
      <Link to="/">
        <img
          src="https://venuscateringservice.com/myimages/logo/logo.jpeg"
          alt="Logo"
          className="h-16 w-24"
        />
      </Link>
      <button
        className="lg:hidden block text-gray-700 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div
        className={`${isOpen ? "block" : "hidden"} lg:flex w-full lg:w-auto`}
      >
        <ul className="lg:flex lg:space-x-4 mt-4 lg:mt-0 space-y-2 lg:space-y-0 gap-8">
          <li>
            <Link className="block text-gray-700" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="block text-gray-700" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="block text-gray-700" to="/services">
              Services
            </Link>
          </li>
          <li className="relative group">
            <Link
              className="block text-gray-700"
              to="#"
              onClick={(e) => e.preventDefault()}
            >
              Menu
            </Link>
            <ul className="dropList absolute hidden group-hover:block bg-rose-800 top-6 shadow-lg  rounded-lg  w-48">
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
                "Corporate menu",
                "Retirement Function menu",
                "Live counter",
                "Counters & stalls for wedding function",
              ].map((item, index) => (
                <li key={index}>
                  <Link className="dropList block px-4" to="#">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link className="block text-gray-700 " to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link className="block text-gray-700" to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link className="block text-gray-700" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <button
        className="btn font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
        type="submit"
      >
        Book Now
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
      </button>
    </nav>
  );
}

export default Navbar;
