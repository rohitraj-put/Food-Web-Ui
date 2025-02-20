import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/Image/11zon_cropped.png";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import bg from "../../assets/Image/footer-bg.png";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white py-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-wrap justify-between gap-2">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img className="h-32 w-32" src={logo} alt="logo" />

            <p className="mt-5">
              Let Taj Taazagi Catters transform your special occasion into a
              masterpiece with our professional touch.
            </p>
            <div className="flex gap-2 mt-5">
              <Link
                to={"#"}
                className="text-lg text-rose-800 bg-white lg:font-semibold  p-2 border-2 rounded-full"
              >
                <FaYoutube />
              </Link>
              <Link
                to={"https://www.facebook.com/share/1B1PjVfUYh/"}
                target="_blank"
                className="text-lg text-rose-800 bg-white lg:font-semibold  p-2 border-2 rounded-full"
              >
                <FaFacebook />
              </Link>
              <Link
                to={
                  "https://www.instagram.com/tajtaazagicatters?igsh=d3UyaHlyaWpiZzI5"
                }
                target="_blank"
                className="text-lg text-rose-800 bg-white lg:font-semibold  p-2 border-2 rounded-full"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Our Services */}
          <div className="  md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Our Services</h2>
            <div className="w-full flex justify-between flex-row gap-2">
              <ul>
                <li className="mb-2 py-1">Annaprasana</li>
                <li className="mb-2 py-1">Birthday Party</li>
                <li className="mb-2 py-1">House Warming</li>
                <li className="mb-2 py-1">Mehndi Function</li>
                <li className="mb-2 py-1">Corporate Events</li>
              </ul>
              <ul>
                <li className="mb-2 py-1">Wedding Event</li>
                <li className="mb-2 py-1">60th Wedding Event</li>

                <li className="mb-2 py-1">Engagement</li>
                <li className="mb-2 py-1">Seemantham</li>
                <li className="mb-2 py-1">Seemantham</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Contact Now</h2>
            <p className="py-1 flex gap-1 items-center">
              <FaLocationDot size={32} /> At. Kh No. 61, In Front Of Basera Near
              Hotel Jaya Pee Palace, Fatehabad Road, Agra.
            </p>
            <p className="mt-4 py-1 flex gap-1 items-center">
              <MdAddCall size={32} />
              <a
                href="tel:+91 9084153502"
                className=""
                style={{ color: "white" }}
              >
                {""}
                +91 9084153502
              </a>
              <br />
              <a href="tel:+91 6386437881" className="text-white">
                {""}
                +91 6386437881
              </a>
            </p>
            <p className="mt-4 text-white py-1 flex gap-1 items-center">
              <CiMail size={32} />
              <a
                href="mailto:tajtaazagicatters@gmail.com"
                className="text-white"
              >
                tajtaazagicatters@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center p-5">
          <p>
            &copy; 2025 Taj Taazagi Catters All rights reserved | Designed By
            <a href="https://namratauniversal.com/" target="_blank">
              {" "}
              Namrata Universal
            </a>
            <a className=" hidden" href="https://rohitrajputweb.netlify.app/">
              || Created By Rohit Rajput
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
