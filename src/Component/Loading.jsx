import React from "react";

function Loading() {
  return (
    <div className="w-full h-screen bg-rose-800 text-white flex justify-center items-center ">
      <div>
        <img
          className="w-32 h-32"
          src="https://venuscateringservice.com/images/loader.svg"
        />
        <div
          style={{ margin: "auto" }}
          class="w-10 h-10 border-4 border-t-white border-[#222222] rounded-full animate-spin"
        ></div>
      </div>
    </div>
  );
}

export default Loading;
