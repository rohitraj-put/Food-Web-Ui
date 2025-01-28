import React from "react";
import { TypeAnimation } from "react-type-animation";

function Slider() {
  return (
    <div className="bgImage w-full h-[86vh] flex items-center justify-center text-center">
      <div className="w-2/3 back max-md:w-full">
        <h1 className="p text-[18px] tracking-widest text-white font-bold ">
          Welcome to Namrata Foods
        </h1>
        <h1 className="p text-3xl text-white font-bold max-md:text-xl">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Hello to Namrata Foods ",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Namaste to Namrata Foods ",
              1000,
              "Hey to Namrata Foods ",
              1000,
              "Hii to Namrata Foods ",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <p className="p text-[18px] text-white font-semibold">
          We are the top vegetarian wedding caterer in Tamil Nadu. We have
          completed over 2,000+ weddings, supported by a professional team of
          340 members.
        </p>
        <button
          style={{ margin: "auto" }}
          className="btn font-sans flex justify-center gap-2 items-center  shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
          type="submit"
        >
          Explore
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

export default Slider;
