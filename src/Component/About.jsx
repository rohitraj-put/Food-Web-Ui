import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import insta from "../assets/video/Insta.mp4";
import { GoMute } from "react-icons/go";
import { GoUnmute } from "react-icons/go";

function About() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleSoundToggle = () => {
    setIsMuted(!isMuted);
  };
  useEffect(() => {
    Aos.init({ duration: 600, isOnce: true });
  });
  return (
    <div className="flex flex-row max-md:flex-col  justify-center py-10 gap-2 mt-12 px-10 max-md:px-2">
      <div className="w-1/2 h-[100vh] flex justify-between gap-4 max-md:w-full overflow-hidden">
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
          className="w-1/2 h-full bg-rose-gray-300 rounded-2xl overflow-hidden"
          data-aos="fade-right"
        >
          {/* <img
            className="w-full h-full hover:scale-125 duration-700"
            src="	https://venuscateringservice.com/myimages/about3.jpg"
            alt="foods"
          /> */}
          <div className="relative h-full">
            <video
              className="h-full object-cover"
              loop
              muted={isMuted}
              autoPlay
              ref={videoRef}
            >
              <source src={insta} type="video/mp4" />
            </video>
            <button
              onClick={handleSoundToggle}
              className="absolute top-4 right-4  text-white p-2 rounded"
            >
              {isMuted ? <GoMute size={32} /> : <GoUnmute size={32} />}
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 max-md:w-full p-7 max-md:px-2">
        <h1 className="text-xl  font-bold text-rose-800 tracking-widest uppercase">
          About Us.
        </h1>
        <h1 className="text-6xl  font-bold text-[#222222] max-md:text-3xl py-5 ">
          {" "}
          Elevating Your Events with Exceptional Food.
        </h1>

        <p className=" text-lg text-[#222222 py-2">
          Taj Taazagi Catters is The Place where Food is Celebrated over 25
          Years. We Love to Create Unforgettable Culinary Experiences.
        </p>

        <div className="flex justify-center flex-row gap-2 py-2.5">
          <div
            className="w-48 max-md:min-h-52 min-h-44 shadow-xl  rounded-md bg-white py-2.5"
            data-aos="flip-down"
          >
            <img
              src="https://venuscateringservice.com/myimages/wcu2.png"
              className="w-20 mx-auto"
            />
            <h2 className="text-[#222222 text-lg font-semibold p-2">
              25 Years of Experience
            </h2>
          </div>
          <div
            className="w-48 max-md:min-h-52 min-h-44 shadow-xl  py-2.5 rounded-md bg-white"
            data-aos="flip-down"
          >
            <img
              src="https://venuscateringservice.com/myimages/wcu1.png"
              className="w-20 mx-auto"
            />
            <h2 className="text-[#222222 text-lg font-semibold p-2">
              2000+ Successful Marriages
            </h2>
          </div>
          <div
            className="w-48 max-md:min-h-52 min-h-44 shadow-xl  py-2.5 rounded-md bg-white"
            data-aos="flip-down"
          >
            <img
              src="https://venuscateringservice.com/myimages/wcu3.png"
              className="w-20 mx-auto"
            />
            <h2 className="text-[#222222 text-lg font-semibold p-2">
              98% Repeated Customers
            </h2>
          </div>
        </div>
        <Link
          to={"/about"}
          className=" font-sans w-64 px-2 py-2.5 mt-5 flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 overflow-hidden border-2 rounded-full"
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
        </Link>
      </div>
    </div>
  );
}

export default About;
