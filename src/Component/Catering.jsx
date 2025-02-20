import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import wedding from "../assets/Image/wedding.avif";
import birthdayparty from "../assets/Image/birthday-party.avif";
import Corporate from "../assets/Image/Corporate.jpg";

const services = [
  {
    title: "Wedding Event",
    description:
      "Wedding. Why we have the concept of inviting all our relatives, friends and known ones? Its because, when a family celebrates an event means, its an occasion, when lot of people celebrates an event means, it turns as a feast. If there any feast occurs without food?? We are here to make a memorable experience for your guests by pampering their taste buds.",
    imgUrl: wedding,
    aosEffect: "fade-right",
  },
  {
    title: "Corporate Event",
    description:
      "From corporate events to business occasions or milestone celebrations, our event catering team captures the heart of their audiences on their special occasions. We focus on delivering the customized delicacies of different types. We make sure all the audience feel good about the food too and that make your event unique.",
    imgUrl: Corporate,
    aosEffect: "fade-up",
  },
  {
    title: "Birthday Party",
    description:
      "Make every birthday a memorable one with our birthday photography. Whether it’s a child's first birthday or a milestone celebration, we capture the joy, excitement, and love of the day and preserve it forever. At Taj Taazagi Catters Service, we take care of the happiness of your guests by offering them amazing food on behalf of you.",
    imgUrl: birthdayparty,
    aosEffect: "fade-left",
  },
];

function Catering() {
  useEffect(() => {
    Aos.init({ duration: 1200, isOnce: true });
  }, []);

  return (
    <div className="mt-16">
      <div className="w-2/3 max-md:w-full mx-auto">
        <h1 className="text-xl text-center  font-bold text-rose-800 tracking-widest uppercase">
          What We Do.
        </h1>
        <h1 className="text-5xl text-center font-bold text-[#222222 max-md:text-3xl py-5">
          Premium catering services
        </h1>
        <p className="text-lg text-center text-[#222222] py-2 px-2">
          We provide premium catering services for all events, big and small.
          Our team of professionals will work with you to create a custom menu
          that fits your needs and budget. Whether you're planning a wedding,
          corporate event, or private party, we have the experience and
          expertise to make your event a success.
        </p>
      </div>

      <div className="flex flex-row max-md:flex-col justify-center gap-4 overflow-hidden p-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-1/2 min-h-80 bg-gray-100 max-md:w-full rounded-2xl overflow-hidden"
            data-aos={service.aosEffect}
          >
            <div className="w-full h-68 overflow-hidden">
              <img
                className="w-full h-full hover:scale-125 duration-700"
                src={service.imgUrl}
                alt={service.title}
              />
            </div>
            <div className="p-5">
              <h1 className="text-xl font-bold text-rose-800 tracking-widest uppercase">
                {service.title}
              </h1>
              <p className="text-lg text-start text-[#222222] py-5">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link
        to={"/services"}
        className="font-sans w-80 flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2.5 overflow-hidden border-2 rounded-full"
        type="submit"
      >
        View All Services
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
  );
}

export default Catering;
