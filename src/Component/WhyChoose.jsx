import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function WhyChoose() {
  useEffect(() => {
    Aos.init({ duration: 2000, isOnce: true });
  });

  return (
    <div className="mt-17 p-5">
      <div className="w-2/3 max-md:w-full mx-auto">
        <h1 className="text-xl text-center  font-bold text-rose-800 tracking-widest uppercase">
          Why Choose us
        </h1>
        <h1 className="text-5xl text-center font-bold text-[#222222] max-md:text-3xl py-5">
          {" "}
          Leave Your Guests Speechless With Our Fabulous Food!
        </h1>
        <p className="text-lg text-center text-[#222222] py-2">
          We are a full-service catering company that specializes in creating
          custom menus that are tailored to your specific needs and budget. Our
          team of professionals will work with you to create a menu that is
          perfect for your event .
        </p>
      </div>
      {/* -----servers promissed----- */}
      <div className="flex justify-between flex-row max-md:flex-col gap-2 pt-2">
        <div
          className=" max-md:h-52 min-h-48 shadow-xl text-center rounded-md bg-white p-7"
          data-aos="flip-up"
        >
          <img
            src="https://venuscateringservice.com/myimages/n1.png"
            className="w-20 mx-auto"
          />
          <h2 className="text-[#222222 text-lg font-semibold py-2">
            Authentic Taste
          </h2>
          <p className="text-[#222222] text-sm font-semibold">
            Enjoy our traditional recipes, inspired by rich culinary heritage.
          </p>
        </div>
        <div
          className=" max-md:h-52 min-h-48 shadow-xl text-center rounded-md bg-white p-7"
          data-aos="flip-up"
        >
          <img
            src="https://venuscateringservice.com/myimages/n2.png"
            className="w-20 mx-auto"
          />
          <h2 className="text-[#222222 text-lg font-semibold py-2">
            Service Excellence
          </h2>
          <p className="text-[#222222] text-sm font-semibold">
            Outstanding service and unforgettable experiences. .
          </p>
        </div>
        <div
          className="max-md:h-68 min-h-48 shadow-xl text-center  rounded-md bg-white p-7"
          data-aos="flip-up"
        >
          <img
            src="https://venuscateringservice.com/myimages/n3.png"
            className="w-20 mx-auto"
          />
          <h2 className="text-[#222222 text-lg font-semibold py-2">
            Best Quality
          </h2>
          <p className="text-[#222222] text-sm font-semibold">
            Top quality standards, excellence in every bite.
          </p>
        </div>
        <div
          className=" max-md:h-52 min-h-48 shadow-xl text-center rounded-md bg-white p-7"
          data-aos="flip-up"
        >
          <img
            src="https://venuscateringservice.com/myimages/n4.png"
            className="w-20 mx-auto"
          />
          <h2 className="text-[#222222 text-lg font-semibold py-2">Heritage</h2>
          <p className="text-[#222222] text-sm font-semibold">
            Taj Taazagi Catters blends food and heart, rooted in family
            traditions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
