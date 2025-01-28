import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Catering() {
  useEffect(() => {
    Aos.init({ duration: 1200, isOnce: true });
  });
  return (
    <div className="" style={{ marginTop: "70px" }}>
      <div className="w-2/3 max-md:w-full" style={{ margin: "auto" }}>
        <h1 className="text-xl text-center  font-bold text-rose-800 tracking-widest uppercase">
          What We Do.
        </h1>
        <h1
          style={{ padding: "20px 0" }}
          className="text-5xl text-center font-bold text-[#222222"
        >
          {" "}
          Premium catering services
        </h1>
        <p
          style={{ padding: "10px 0" }}
          className="text-lg text-center text-[#222222"
        >
          We provide premium catering services for all events, big and small.
          Our team of professionals will work with you to create a custom menu
          that fits your needs and budget. Whether you're planning a wedding,
          corporate event, or private party, we have the experience and
          expertise to make your event a success.
        </p>
      </div>

      <div
        className="flex flex-row max-md:flex-col  justify-center gap-4 overflow-hidden"
        style={{ padding: "20px" }}
      >
        <div
          className="w-1/2 min-h-80 bg-gray-100  max-md:w-full"
          data-aos="fade-right"
        >
          <div className="w-full h-68 overflow-hidden">
            <img
              className="w-full h-full hover:scale-125 duration-700"
              src="https://img.freepik.com/free-photo/beautiful-woman-long-red-dress-walks-around-city-with-her-husband_1157-13377.jpg?t=st=1738045525~exp=1738049125~hmac=249cb8095281fcb25c9680f2cad0c97b94899f43cc9d020be73ee4c5b9742e58&w=900"
              alt="Catering"
            />
          </div>
          <div className="" style={{ padding: "20px" }}>
            <h1 className="text-xl underline   font-bold text-rose-800 tracking-widest uppercase">
              Wedding Event
            </h1>
            <p
              className="text-lg text-start text-[#222222]"
              style={{ padding: "20px 0" }}
            >
              Wedding. Why we have the concept of inviting all our relatives,
              friends and known ones? Its because, when a family celebrates an
              event means, its an occasion, when lot of people celebrates an
              event means, it turns as a feast. If there any feast occurs
              without food?? We are here to make a memorable experience for your
              guests by pampering their taste buds.
            </p>
          </div>
        </div>
        <div
          className="w-1/2 min-h-80 bg-gray-100  max-md:w-full"
          data-aos="fade-up"
        >
          <div className="w-full h-68 overflow-hidden">
            <img
              className="w-full h-full hover:scale-125 duration-700"
              src="https://venuscateringservice.com/myimages/corporate.jpg"
              alt="Catering"
            />
          </div>
          <div className="" style={{ padding: "20px" }}>
            <h1 className="text-xl underline   font-bold text-rose-800 tracking-widest uppercase">
              Corporate Event
            </h1>
            <p
              className="text-lg text-start text-[#222222]"
              style={{ padding: "20px 0" }}
            >
              From corporate events to business occasions or milestone
              celebrations, our event catering team captures the heart of their
              audiences on their special occasions. We focus on delivering the
              customized delicacies of different types. We make sure all the
              audience feel good about the food too and that make your event
              unique.
            </p>
          </div>
        </div>
        <div
          className="w-1/2 min-h-80 bg-gray-100  max-md:w-full "
          data-aos="fade-left"
        >
          <div className="w-full h-68 overflow-hidden">
            <img
              className="w-full h-full hover:scale-125 duration-700"
              src="https://img.freepik.com/premium-photo/cheerful-kids-attending-birthday-party_259150-5020.jpg?ga=GA1.1.1889603430.1735627527&semt=ais_hybrid"
              alt="Catering"
            />
          </div>
          <div className="" style={{ padding: "20px" }}>
            <h1 className="text-xl underline   font-bold text-rose-800 tracking-widest uppercase">
              Birthday Party
            </h1>
            <p
              className="text-lg text-start text-[#222222]"
              style={{ padding: "20px 0" }}
            >
              Make every birthday a memorable one with our birthday photography.
              Whether it’s a child's first birthday or a milestone celebration,
              we capture the joy, excitement, and love of the day and preserve
              it forever. At Venus Catering Service, we take care of the
              happiness of your guests by offering them amazing food on behalf
              of you.
            </p>
          </div>
        </div>
      </div>
      <button
        style={{ margin: "auto", padding: "10px 20px" }}
        className="btn font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
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
      </button>
    </div>
  );
}

export default Catering;
