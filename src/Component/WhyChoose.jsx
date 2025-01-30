import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function WhyChoose() {
  useEffect(() => {
    Aos.init({ duration: 2000, isOnce: true });
  });

  return (
    <div className="" style={{ marginTop: "70px", padding: "20px" }}>
      <div className="w-2/3 max-md:w-full" style={{ margin: "auto" }}>
        <h1 className="text-xl text-center  font-bold text-rose-800 tracking-widest uppercase">
          Why Choose us
        </h1>
        <h1
          style={{ padding: "20px 0" }}
          className="text-5xl text-center font-bold text-[#222222 max-md:text-3xl"
        >
          {" "}
          Leave Your Guests Speechless With Our Fabulous Food!
        </h1>
        <p
          style={{ padding: "10px 0" }}
          className="text-lg text-center text-[#222222"
        >
          We are a full-service catering company that specializes in creating
          custom menus that are tailored to your specific needs and budget. Our
          team of professionals will work with you to create a menu that is
          perfect for your event .
        </p>
      </div>
      {/* -----servers promissed----- */}
      <div
        style={{ paddingTop: "10px" }}
        className="flex justify-between flex-row max-md:flex-col gap-2"
      >
        <div
          className=" max-md:h-52 min-h-48 shadow-xl text-center rounded-md bg-white"
          style={{ padding: "30px" }}
          data-aos="flip-up"
        >
          <img
            src="https://venuscateringservice.com/myimages/n1.png"
            className="w-20"
            style={{ margin: "auto" }}
          />
          <h2
            className="text-[#222222 text-lg font-semibold"
            style={{ padding: "10px 0" }}
          >
            Authentic Taste
          </h2>
          <p className="text-[#222222] text-sm font-semibold">
            Enjoy our traditional recipes, inspired by rich culinary heritage.
          </p>
        </div>
        <div
          className=" max-md:h-52 min-h-48 shadow-xl text-center rounded-md bg-white"
          style={{ padding: "30px" }}
          data-aos="flip-up"
        >
          <img
            src="https://venuscateringservice.com/myimages/n2.png"
            className="w-20"
            style={{ margin: "auto" }}
          />
          <h2
            className="text-[#222222 text-lg font-semibold"
            style={{ padding: "10px 0" }}
          >
            Service Excellence
          </h2>
          <p className="text-[#222222] text-sm font-semibold">
            Outstanding service and unforgettable experiences. .
          </p>
        </div>
        <div
          className="max-md:h-68 min-h-48 shadow-xl text-center  rounded-md bg-white"
          style={{ padding: "30px" }}
          data-aos="flip-up"
        >
          <img
            src="https://venuscateringservice.com/myimages/n3.png"
            className="w-20"
            style={{ margin: "auto" }}
          />
          <h2
            className="text-[#222222 text-lg font-semibold"
            style={{ padding: "10px 0" }}
          >
            Best Quality
          </h2>
          <p className="text-[#222222] text-sm font-semibold">
            Top quality standards, excellence in every bite.
          </p>
        </div>
        <div
          className=" max-md:h-52 min-h-48 shadow-xl text-center rounded-md bg-white"
          style={{ padding: "30px" }}
          data-aos="flip-up"
        >
          <img
            src="https://venuscateringservice.com/myimages/n4.png"
            className="w-20"
            style={{ margin: "auto" }}
          />
          <h2
            className="text-[#222222 text-lg font-semibold"
            style={{ padding: "10px 0" }}
          >
            Heritage
          </h2>
          <p className="text-[#222222] text-sm font-semibold">
            Namrata Foods caterings blends food and heart, rooted in family
            traditions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
