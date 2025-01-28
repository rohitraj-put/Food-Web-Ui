import React from "react";

function StoryCorner() {
  return (
    <>
      <div
        className="flex justify-between flex-row gap-8 max-md:flex-col"
        style={{ padding: "20px", marginTop: "30px" }}
      >
        <div className="w-1/2 max-md:w-full overflow-hidden rounded-3xl">
          <img
            className="hover:scale-125 duration-300"
            src="https://www.cateringcorner.in/wp-content/themes/cateringcorner-v2/images/webp/home-story-1.webp"
          />
        </div>
        <div className="w-1/2 max-md:w-full" style={{ padding: "20px" }}>
          <h1 className="text-xl font-bold text-rose-800 tracking-widest uppercase">
            Catering Corner.
          </h1>
          <h1
            style={{ padding: "20px 0" }}
            className="text-3xl font-bold text-[#222222] tracking-widest uppercase"
          >
            Story
          </h1>
          <p className="text-lg text-start text-[#222222]">
            We created just simple bridge between you and Creative Caterer “The
            Catering Corner” and you got the Boom on your event.
          </p>
          <p
            className="text-lg text-start text-[#222222]"
            style={{ padding: "10px 0" }}
          >
            Catering Corner is the place where you can reach the best Caterers
            aka “कैटरर्स” around you, Interact with them, Request for Quote for
            your events and choose which one best suit to your budget that too
            at no cost.
          </p>
          <button
            style={{ marginTop: "10px", padding: "10px 20px" }}
            className="btn font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
            type="submit"
          >
            Read More
          </button>
        </div>
      </div>
      {/* -------------- Wedding Destionation-------------- */}
      <div
        className="flex justify-between flex-row gap-8 max-md:flex-col"
        style={{ padding: "20px", marginTop: "30px" }}
      >
        <div className="w-1/2 max-md:w-full" style={{ padding: "20px" }}>
          <h1 className="text-xl font-bold text-rose-800 tracking-widest uppercase">
            wedding destination .
          </h1>
          <h1
            style={{ padding: "20px 0" }}
            className="text-3xl font-bold text-[#222222] tracking-widest uppercase"
          >
            Story
          </h1>
          <p className="text-lg text-start text-[#222222]">
            Planning a dreamy destination wedding? Let us help with smart tips
            and services for a smooth, stress-free celebration! 🌍💍
          </p>
          <p
            className="text-lg text-start text-[#222222]"
            style={{ padding: "10px 0" }}
          >
            Dreaming of a perfect destination wedding? ✨ From planning to
            execution, we’ve got you covered with smart tips and services. Enjoy
            a seamless, stress-free celebration in your dream location! 💍🌍
          </p>
          <button
            style={{ marginTop: "10px", padding: "10px 20px" }}
            className="btn font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
            type="submit"
          >
            Read More
          </button>
        </div>
        <div className="w-1/2 max-md:w-full overflow-hidden rounded-3xl">
          <img
            className="hover:scale-125 duration-300"
            src="https://img.freepik.com/free-photo/view-white-guest-chairs-decorated-ceremonial-archway-open-air-sunny-day_8353-11514.jpg?t=st=1738062632~exp=1738066232~hmac=db7de8a6bdb2a9c6bda14d2846051ad136686580658b7b572fd1ee6b1da271bf&w=900"
          />
        </div>
      </div>
    </>
  );
}

export default StoryCorner;
