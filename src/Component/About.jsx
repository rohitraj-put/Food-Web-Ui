import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 600, isOnce: true });
  });
  return (
    <div
      className="flex flex-row max-md:flex-col  justify-center p-10 gap-2"
      style={{ padding: "10px", marginTop: "70px" }}
    >
      <div className="w-1/2 flex justify-between gap-4 max-md:w-full overflow-hidden">
        <div
          className="w-1/2 bg-rose-gray-300 rounded-2xl overflow-hidden"
          data-aos="fade-right"
        >
          <img
            className="w-full h-full hover:scale-125 duration-700"
            src="https://venuscateringservice.com/myimages/aboutus.jpg"
            alt="foods"
          />
        </div>
        <div
          className="w-1/2 bg-rose-gray-300 rounded-2xl overflow-hidden"
          data-aos="fade-right"
        >
          <img
            className="w-full h-full hover:scale-125 duration-700"
            src="	https://venuscateringservice.com/myimages/about3.jpg"
            alt="foods"
          />
        </div>
      </div>
      <div style={{ padding: "30px" }} className="w-1/2 max-md:w-full">
        <h1 className="text-xl  font-bold text-rose-800 tracking-widest uppercase">
          About Us.
        </h1>
        <h1
          style={{ padding: "20px 0" }}
          className="text-6xl  font-bold text-[#222222] max-md:text-3xl"
        >
          {" "}
          Elevating Your Events with Exceptional Food.
        </h1>

        <p style={{ padding: "10px 0" }} className=" text-lg text-[#222222">
          Namrata Foods is The Place where Food is Celebrated over 25 Years. We
          Love to Create Unforgettable Culinary Experiences.
        </p>

        <div
          style={{ paddingTop: "10px" }}
          className="flex justify-center flex-row gap-2"
        >
          <div
            className="w-48 max-md:min-h-52 min-h-44 shadow-xl  rounded-md bg-white"
            style={{ padding: "10px" }}
            data-aos="flip-down"
          >
            <img
              src="https://venuscateringservice.com/myimages/wcu2.png"
              className="w-20"
              style={{ margin: "auto" }}
            />
            <h2
              className="text-[#222222 text-lg font-semibold"
              style={{ paddingTop: "10px" }}
            >
              25 Years of Experience
            </h2>
          </div>
          <div
            className="w-48 max-md:min-h-52 min-h-44 shadow-xl  rounded-md bg-white"
            style={{ padding: "10px" }}
            data-aos="flip-down"
          >
            <img
              src="https://venuscateringservice.com/myimages/wcu1.png"
              className="w-20"
              style={{ margin: "auto" }}
            />
            <h2
              className="text-[#222222 text-lg font-semibold"
              style={{ paddingTop: "10px" }}
            >
              2000+ Successful Marriages
            </h2>
          </div>
          <div
            className="w-48 max-md:min-h-52 min-h-44 shadow-xl  rounded-md bg-white"
            style={{ padding: "10px" }}
            data-aos="flip-down"
          >
            <img
              src="https://venuscateringservice.com/myimages/wcu3.png"
              className="w-20"
              style={{ margin: "auto" }}
            />
            <h2
              className="text-[#222222 text-lg font-semibold"
              style={{ paddingTop: "10px" }}
            >
              98% Repeated Customers
            </h2>
          </div>
        </div>
        <button
          style={{ marginTop: "20px", padding: "10px 20px" }}
          className="btn font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
          type="submit"
        >
          More About Us
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
      </div>
    </div>
  );
}

export default About;
