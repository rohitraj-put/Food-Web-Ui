import React, { useState } from "react";
import { IoArrowForwardSharp, IoArrowBackOutline } from "react-icons/io5";
import TestimonialsImage from "../assets/Image/testimonial-img.png";

const reviews = [
  {
    text: "A very special day today in our life and this is the second time we booked Taj Taazagi Catters for birthday party and as expected the food and service was extremely well. Multiple varieties and all tastes were awesome. All our guests enjoyed and specially mentioned about food taste. Many thanks to Taj Taazagi Catters. We really enjoyed and also India won today's match... Soo happy. Will definitely refer to all our friends and relatives😀.",
    author: "Rohit Rajput",
  },
  {
    text: "Taj Taazagi Catters is very very good in catering service, their hospitality is very very good , unexpected crowd was came into my daughters marriage, but Mr .Gurumoorthy tackled the situation easily and immediately managed and served to all coming to our marriage , I’m very very grateful to him , food they served was excellent and praised by all coming to our marriage at 18/2/24 &19/2/24. I wish them all the best and I recommend them to all my friends and relatives.",
    author: "Anita Sharma",
  },
  {
    text: "Taj Taazagi Catters made our event memorable with their exceptional service and mouth-watering dishes. Will definitely book them again. Highly recommended. Thank you Taj Taazagi Catters for making our event a grand success. Keep up the good work. 👍",
    author: "Rajesh Kumar",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");

  const handleNext = () => {
    setAnimation("slide-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setAnimation("");
    }, 500);
  };

  const handlePrev = () => {
    setAnimation("slide-right");
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
      );
      setAnimation("");
    }, 500);
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="testimonials-container mt-7 w-full flex justify-between items-center flex-row max-md:flex-col bg-black gap-4 pt-5 pr-5 pl-5">
      <div className="w-1/2 max-md:w-full bg-[url(https://Taj Taazagi Catterservice.com/images/testimonial-bg.png)] bg-no-repeat">
        <h1 className="text-xl font-bold text-[#fff] tracking-widest uppercase">
          Testimonials.
        </h1>
        <h1 className="text-6xl font-bold text-white max-md:text-3xl py-5">
          What People's Say About us?
        </h1>

        <div className={`review-text ${animation} min-h-[250px]`}>
          <p className="text-lg text-start text-[#fff] py-2">
            {currentReview.text}
          </p>
          <h1 className="text-xl font-bold text-[#fff] tracking-widest uppercase">
            {currentReview.author}
          </h1>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            className=" font-sans flex justify-center gap-2 items-center  shadow-xl text-lg text-rose-800 bg-white backdrop-blur-md lg:font-semibold relative z-10 p-2 overflow-hidden border-2 rounded-full"
            type="button"
            onClick={handlePrev}
          >
            <IoArrowBackOutline />
          </button>
          <button
            className=" font-sans flex justify-center gap-2 items-center  shadow-xl text-lg text-rose-800 bg-white backdrop-blur-md lg:font-semibold relative z-10 p-2 overflow-hidden border-2 rounded-full"
            type="button"
            onClick={handleNext}
          >
            <IoArrowForwardSharp />
          </button>
        </div>
      </div>
      <div className="w-[400px] h-[630px] max-md:w-full">
        <img
          className="w-full h-full"
          src={TestimonialsImage}
          alt="Testimonial"
        />
      </div>
    </div>
  );
}

export default Testimonials;
