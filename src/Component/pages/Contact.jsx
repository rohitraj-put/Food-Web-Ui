import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import bg from "../../assets/Image/contactbg.jpg";

function Contact() {
  return (
    <>
      <div
        className="relative flex justify-center items-center h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-[#222222ba] bg-opacity-50"></div>
        <div className="relative text-center text-white p-8 rounded-lg">
          <h1 className="text-5xl max-md:text-3xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg">Home / Contact Us</p>
        </div>
      </div>
      {/* ---------------------- */}

      <div className="w-full max-md:w-full px-4 py-8">
        <h1 className="text-md font-bold text-rose-800 tracking-widest uppercase">
          Hello Everyone.
        </h1>
        <h1 className="text-5xl font-bold text-[#222222] max-md:text-3xl leading-[65px] max-md:leading-[45px] py-5">
          We prepare food just like your home in large quantities. That's it. Do
          book us and relax.
        </h1>
        <p className="text-lg py-8 text-[#222222]">
          We offer personalized catering solutions for all events, ensuring
          every detail is perfect. Contact us for exceptional service and
          exquisite culinary experiences tailored to your needs. Your
          satisfaction is our top priority.
        </p>
      </div>
      <div className="bg-gray-100">
        <h1 className="text-md text-center font-bold pt-8 text-rose-800 tracking-widest uppercase">
          Contact Us.
        </h1>
        <h1 className="text-5xl font-bold text-center text-[#222222] py-5 max-md:text-3xl">
          Get In Touch
        </h1>
        <div className="w-full min-h-[70vh] flex justify-between flex-row flex-wrap gap-4 px-8 py-8 max-md:flex-col max-md:p-2">
          <div className="w-[66%] h-[60vh] overflow-hidden max-md:w-full border-rose-800 border-[1px] rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3550.077241238811!2d78.0688040741044!3d27.153859849688256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!1s0x3974713cc4a9238b%3A0x94adedd7bc3afe5b!5e0!3m2!1shi!2sin!4v1739608095645!5m2!1shi!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="w-[30%] min-h-[60vh] bg-white p-6 rounded-2xl max-md:w-full max-md:p-4 max-md:min-h-[30vh]">
            <h1 className="text-2xl font-bold">Contact Details</h1>
            <ul>
              <li className="py-4 flex gap-2 items-center">
                <FaLocationDot size={32} />
                <a>
                  At. Kh No. 61, In Front Of Basera Near Hotel Jaya Pee Palace,
                  Fatehabad Road, Agra.
                </a>
              </li>
              <li className="py-4 flex gap-2 items-center">
                <CiMail size={24} />
                <a href="mailto:tajtaazagicatters@gmail.com">
                  tajtaazagicatters@gmail.com
                </a>
              </li>
              <li className="py-4 flex gap-2 items-center">
                <MdAddCall size={24} />
                <a href="tel:+91 9084153502">+91 9084153502</a>
                <br />
                <a href="tel:+91 6386437881">+91 6386437881</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
