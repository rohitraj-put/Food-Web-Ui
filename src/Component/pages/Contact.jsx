import React from "react";
import { MdLocationOn } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";

function Contact() {
  return (
    <>
      <div
        className="flex justify-center items-center h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://venuscateringservice.com/myimages/otherpagesbg.jpg')",
        }}
      >
        <div className="text-center text-white p-8  bg-opacity-50 rounded-lg">
          <h1 className="text-5xl max-md:text-3xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg"> Home / Contact Us</p>
        </div>
      </div>
      {/* ---------------------- */}

      <div className="w-full max-md:w-full px-4 py-8">
        <h1 className="text-md  font-bold text-rose-800 tracking-widest uppercase">
          Hello Everyone.
        </h1>
        <h1
          style={{ padding: "20px 0" }}
          className="text-5xl font-bold text-[#222222] max-md:text-3xl leading-[65px] max-md:leading-[45px]"
        >
          {" "}
          We prepare food just like your home in large quantities. Thats it. Do
          book us and relax.
        </h1>
        <p className="text-lg py-8  text-[#222222]">
          We offer personalized catering solutions for all events, ensuring
          every detail is perfect. Contact us for exceptional service and
          exquisite culinary experiences tailored to your needs.Your
          satisfaction is our top priority.
        </p>
        <button
          className="btn font-sans my-4 flex justify-center gap-2 items-center  shadow-xl text-lg text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full"
          type="submit"
        >
          Book Now
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
      <div className="bg-gray-100">
        {" "}
        <h1 className="text-md text-center font-bold pt-8 text-rose-800 tracking-widest uppercase">
          Contact Us.
        </h1>
        <h1
          style={{ padding: "20px 0" }}
          className="text-5xl font-bold text-center text-[#222222] max-md:text-3xl"
        >
          Get In Touch
        </h1>
        <div className="w-full min-h-[70vh]  flex justify-between flex-row flex-wrap gap-4 px-8 py-8 max-md:flex-col max-md:p-2 ">
          <div className="w-[66%] h-[60vh]  overflow-hidden max-md:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3550.077241238811!2d78.0688040741044!3d27.153859849688256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!1s0x3974713cc4a9238b%3A0x94adedd7bc3afe5b!5e0!3m2!1shi!2sin!4v1739608095645!5m2!1shi!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-full "
            ></iframe>
          </div>
          <div className="w-[30%] h-[60vh] bg-white p-6 rounded-2xl max-md:w-full max-md:p-2">
            <h1 className="text-2xl font-bold">Contact Details</h1>
            <ul>
              <li className="py-4 flex gap-2 items-center">
                <MdLocationOn size={32} />
                <a>
                  At. Kh No. 61, In Front Of Basera Near Hotel Jaya Pee Palace,
                  Fatehabad Road,
                </a>
              </li>
              <li className="py-4 flex gap-2 items-center">
                <CiMail size={24} />
                <a href="email:gurumurrthy@gmail.com">gurumurrthy@gmail.com</a>
              </li>
              <li className="py-4 flex gap-2 items-center">
                <MdAddCall size={24} />
                <a className="" href="tel:+91 9084153502">
                  +91 9084153502
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
