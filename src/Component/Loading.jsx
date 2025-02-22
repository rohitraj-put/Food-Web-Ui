import React from "react";
import Loader from "../assets/Image/loader.svg";

function Loading() {
  return (
    <div className="w-full h-screen bg-rose-800 text-white flex justify-center items-center ">
      <div>
        <img className="w-32 h-32" src={Loader} />
        <div className="w-10 h-10 border-4 border-t-white border-[#222222] rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}

export default Loading;
