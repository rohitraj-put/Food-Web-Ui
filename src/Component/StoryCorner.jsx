import React from "react";
import { DragCards } from "./DragCards";
import Destination from "../assets/Image/wedding_destination.avif";

function StoryCorner() {
  return (
    <>
      <div className="flex justify-between flex-row gap-8 max-md:flex-col p-5 mt-7">
        <div className="w-1/2 h-[70vh] max-md:w-full overflow-hidden rounded-3xl">
          <DragCards />
        </div>
        <div className="w-1/2 max-md:w-full p-5">
          <h1 className="text-xl font-bold text-rose-800 tracking-widest uppercase">
            Catering Corner.
          </h1>
          <h1 className="text-3xl font-bold text-[#222222] tracking-widest uppercase py-5">
            Story
          </h1>
          <p className="text-lg text-start text-[#222222]">
            We created just simple bridge between you and Creative Caterer “The
            Catering Corner” and you got the Boom on your event.
          </p>
          <p className="text-lg text-start text-[#222222] py-2">
            Catering Corner is the place where you can reach the best Caterers
            aka “कैटरर्स” around you, Interact with them, Request for Quote for
            your events and choose which one best suit to your budget that too
            at no cost.
          </p>
          <button
            className=" font-sans mt-2 py-2 cursor-pointer px-5 flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 overflow-hidden border-2 rounded-full"
            type="submit"
          >
            Read More
          </button>
        </div>
      </div>
      {/* -------------- Wedding Destionation-------------- */}
      <div className="flex justify-between flex-row gap-8 max-md:flex-col p-5 mt-7">
        <div className="w-1/2 max-md:w-full p-5">
          <h1 className="text-xl font-bold text-rose-800 tracking-widest uppercase">
            wedding destination .
          </h1>
          <h1 className="text-3xl font-bold text-[#222222] tracking-widest uppercase py-5">
            Story
          </h1>
          <p className="text-lg text-start text-[#222222]">
            Planning a dreamy destination wedding? Let us help with smart tips
            and services for a smooth, stress-free celebration! 🌍💍
          </p>
          <p className="text-lg text-start text-[#222222] py-2">
            Dreaming of a perfect destination wedding? ✨ From planning to
            execution, we’ve got you covered with smart tips and services. Enjoy
            a seamless, stress-free celebration in your dream location! 💍🌍
          </p>
          <button
            className=" font-sans cursor-pointer flex mt-2 py-2 px-5 justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10  overflow-hidden border-2 rounded-full"
            type="submit"
          >
            Read More
          </button>
        </div>
        <div className="w-1/2 max-md:w-full overflow-hidden rounded-3xl">
          <img
            className="hover:scale-125 duration-300 transition-transform "
            src={Destination}
          />
        </div>
      </div>
    </>
  );
}

export default StoryCorner;
