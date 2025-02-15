import React from "react";
import About from "../About";

function AboutUs() {
  return (
    <>
      <div
        className="flex justify-center items-center h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://venuscateringservice.com/myimages/otherpagesbg.jpg')",
        }}
      >
        <div className="text-center text-white p-8  bg-opacity-50 rounded-lg">
          <h1 className="text-5xl max-md:text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg"> Home / About Us</p>
        </div>
      </div>
      {/* ------------------ */}
      <About />

      {/* ----------------------- */}
      <div className="flex flex-col md:flex-row items-center px-12 py-20 ">
        <div className="md:w-1/2 md:pr-10">
          <h1 className="text-5xl font-bold mb-4 max-md:text-3xl text-[#222222]">
            A Quality-Driven Catering Company
          </h1>

          <p className="text-lg mb-4 text-[#222222]">
            Venus Catering Service is a professional catering company that was
            established in 1998, offering comprehensive services to meet all
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
        <div className="md:w-1/2 mt-5 md:mt-0">
          <img
            src="https://venuscateringservice.com/myimages/aboutcater.png"
            alt="Catering Service"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
