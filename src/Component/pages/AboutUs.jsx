import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "../Testimonials";
import AboutImg from "../../assets/Image/about.jpg";
import bg from "../../assets/Image/AboutBg.jpg";

function AboutUs() {
  return (
    <>
      <div
        className=" relative flex justify-center items-center h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-[#222222ba] bg-opacity-50"></div>
        <div className=" relative text-center text-white p-8  bg-opacity-50 rounded-lg">
          <h1 className="text-5xl max-md:text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg"> Home / About Us</p>
        </div>
      </div>

      {/* ---------About US--------- */}
      <div>
        <div
          className="flex flex-row max-md:flex-col  justify-center p-10 gap-2"
          style={{ padding: "10px", marginTop: "70px" }}
        >
          <div className="w-1/2 h-[120vh] max-md:h-[60vh] flex justify-between gap-4 max-md:w-full rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover  hover:scale-125 duration-700 "
              src={AboutImg}
              loading="lazy"
              alt="foods"
            />
          </div>
          <div className="w-1/2 p-7 max-md:w-full max-md:px-2">
            <h1 className="text-xl  font-bold text-rose-800 tracking-widest uppercase">
              About Us.
            </h1>
            <h1 className="text-6xl  font-bold text-[#222222] max-md:text-3xl py-5">
              {" "}
              Indulge in a celebration with great food!
            </h1>

            <p className=" text-lg text-[#222222 py-2">
              Taj Taazagi Catters Service is a professional catering company
              that was established in 1998, offering comprehensive services to
              meet all your culinary needs nearly two decades. Our primary goal
              is to provide a unique and memorable dining experience with each
              meal we serve. We are committed to maintaining uncompromised
              quality, exceptional hygiene standards, meticulous presentation
              and attention to detail to ensure the utmost satisfaction of our
              customers.
            </p>
            <Link
              to={"/contactus"}
              className=" mt-5 w-64 font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
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
            </Link>
          </div>
        </div>
      </div>

      {/* ----------------------- */}
      <div className="flex flex-col md:flex-row items-center px-12 py-20 max-md:px-4">
        <div className="w-1/2 md:pr-10 max-md:w-full ">
          <h1 className="text-5xl font-bold mb-4 max-md:text-3xl text-[#222222]">
            A Quality-Driven Catering Company
          </h1>

          <p className="text-lg mb-4 text-[#222222]">
            Taj Taazagi Catters Service is a professional catering company that
            was established in 1998, offering comprehensive services to meet all
            your culinary needs for nearly two decades. Our primary goal is to
            provide a unique and memorable dining experience with each meal we
            serve. We are committed to maintaining uncompromised quality,
            exceptional hygiene standards, meticulous presentation, and
            attention to detail to ensure the utmost satisfaction of our
            customers.
          </p>
          {/* <button className="mt-4 px-6 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600">
            Book Now
          </button> */}
        </div>
        <div className="w-1/2 mt-5 md:mt-0 max-md:w-full">
          <img
            src="https://cdn.pixabay.com/photo/2013/02/09/04/28/sous-chef-79598_1280.jpg"
            alt="Catering Service"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
      <Testimonials />
    </>
  );
}

export default AboutUs;
