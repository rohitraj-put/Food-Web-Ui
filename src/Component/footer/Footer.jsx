import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white py-8 bg-[url(https://venuscateringservice.com/images/footer-bg.png)]"
      style={{ padding: "50px 20px" }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-wrap justify-between gap-4">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            {/* <img
              className="h-20 w-32"
              src="https://venuscateringservice.com/myimages/logo/logo.jpeg"
              alt="logo"
            /> */}
            <h2 className="text-3xl text-white uppercase font-bold">
              Namrata foods
            </h2>
            <p className="mt-4" style={{ marginTop: "20px" }}>
              Let Namrata Foods Catering transform your special occasion into a
              masterpiece with our professional touch.
            </p>
            <div style={{ marginTop: "20px" }} className="flex gap-4">
              <button
                style={{ padding: "10px 10px" }}
                className="btn font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-rose-800 bg-white backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
                type="button"
              >
                <FaLinkedin />
              </button>
              <button
                style={{ padding: "10px 10px" }}
                className="btn font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-rose-800 bg-white backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
                type="button"
              >
                <FaYoutube />
              </button>
              <button
                style={{ padding: "10px 10px" }}
                className="btn font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-rose-800 bg-white backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
                type="button"
              >
                <FaFacebook />
              </button>
              <button
                style={{ padding: "10px 10px" }}
                className="btn font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-rose-800 bg-white backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
                type="button"
              >
                <FaInstagram />
              </button>
            </div>
          </div>

          {/* Our Services */}
          <div className="  md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Our Services</h2>
            <div className="w-full flex justify-between flex-row gap-2">
              <ul>
                <li style={{ padding: "4px 0" }} className="mb-2">
                  Annaprasana
                </li>
                <li style={{ padding: "4px 0" }} className="mb-2">
                  Birthday Party
                </li>
                <li style={{ padding: "4px 0" }} className="mb-2">
                  House Warming
                </li>
                <li style={{ padding: "4px 0" }} className="mb-2">
                  Mehndi Function
                </li>
                <li style={{ padding: "4px 0" }} className="mb-2">
                  Corporate Events
                </li>
              </ul>
              <ul>
                <li style={{ padding: "4px 0" }} className="mb-2">
                  Wedding Event
                </li>
                <li style={{ padding: "4px 0" }} className="mb-2">
                  60th Wedding Event
                </li>

                <li style={{ padding: "4px 0" }} className="mb-2">
                  Engagement
                </li>
                <li style={{ padding: "4px 0" }} className="mb-2">
                  Seemantham
                </li>
                <li style={{ padding: "4px 0" }} className="mb-2">
                  Seemantham
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Contact Now</h2>
            <p style={{ padding: "4px 0" }}>
              No.1234, Noida Street, Ghaziabad, Delhi, Haryana, India .
            </p>
            <p className="mt-4" style={{ padding: "4px 0" }}>
              Phone:{" "}
              <a
                href="tel:+911234567899"
                className=" "
                style={{ color: "white" }}
              >
                +91 1234567899
              </a>
              ,{" "}
              <a
                href="tel:+911234567899"
                className=""
                style={{ color: "white" }}
              >
                +91 1234567899
              </a>
            </p>
            <p className="mt-4 " style={{ padding: "4px 0", color: "white" }}>
              Email:{" "}
              <a
                href="mailto:namratafoods@gmail.com"
                className=" "
                style={{ color: "white" }}
              >
                namratafoods@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div
          className="border-t border-gray-700 mt-8 pt-4 text-center"
          style={{ padding: "20px", marginTop: "10px" }}
        >
          <p>
            &copy; 2024 Namrata Foods All rights reserved | Designed By{" "}
            <a
              style={{ color: "white" }}
              className=" underline"
              href="https://rohitrajputweb.netlify.app/"
              target="_blank"
            >
              Rohit Rajput.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
