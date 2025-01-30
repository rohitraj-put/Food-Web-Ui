import React from "react";

function Exprience() {
  return (
    <div
      className="flex justify-center gap-8 flex-row max-md:flex-col"
      style={{ padding: "10px", marginTop: "20px" }}
    >
      <div className="w-[300px] h-44 rounded-2xl overflow-hidden relative ">
        <img
          className=" w-full h-full hover:scale-110 duration-700"
          src="https://venuscateringservice.com/images/info-bar-4.jpg"
        />
        <div
          className="absolute  top-5 left-12 rounded-3xl text-white p-2 text-center"
          style={{ padding: "30px" }}
        >
          <h1 className="text-6xl font-bold">25+</h1>
          <p className="text-md">Years Of Excellence</p>
        </div>
      </div>
      <div className="w-[300px] h-44 rounded-2xl overflow-hidden relative  ">
        <img
          className="w-full h-full hover:scale-110 duration-700"
          src="https://venuscateringservice.com/images/info-bar-1.jpg"
        />
        <div
          className="absolute  top-5 left-12 rounded-3xl text-white p-2 text-center"
          style={{ padding: "30px" }}
        >
          <h1 className="text-6xl font-bold">250+</h1>
          <p className="text-md">Menu Options</p>
        </div>
      </div>
      <div className="w-[300px] h-44 rounded-2xl overflow-hidden relative  ">
        <img
          className="w-full h-full hover:scale-110 duration-700"
          src="https://venuscateringservice.com/images/info-bar-2.jpg"
        />
        <div
          className="absolute  top-5 left-12 rounded-3xl text-white p-2 text-center"
          style={{ padding: "30px" }}
        >
          <h1 className="text-6xl font-bold">340+</h1>
          <p className="text-md">Staff</p>
        </div>
      </div>
      <div className="w-[300px] h-44 rounded-2xl overflow-hidden relative  ">
        <img
          className="w-full h-full hover:scale-110 duration-700"
          src="https://venuscateringservice.com/images/info-bar-3.jpg"
        />
        <div
          className="absolute  top-5 left-12 rounded-3xl text-white p-2 text-center"
          style={{ padding: "30px" }}
        >
          <h1 className="text-6xl font-bold">125k</h1>
          <p className="text-md">Happy Foodies</p>
        </div>
      </div>
    </div>
  );
}

export default Exprience;
