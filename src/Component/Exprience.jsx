import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function Experience() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <div
      className="flex justify-center gap-8 flex-row max-md:flex-col"
      style={{ padding: "10px", marginTop: "20px" }}
    >
      <div
        className="w-[300px] h-44 rounded-2xl overflow-hidden relative max-md:w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://venuscateringservice.com/images/info-bar-4.jpg')",
        }}
      >
        <div className="text-white text-center px-7 py-10">
          <h1 ref={ref1} className="text-6xl font-bold">
            {inView1 ? <CountUp end={25} duration={3} /> : "0"}+
          </h1>
          <p className="text-md font-extrabold">Years Of Excellence</p>
        </div>
      </div>
      <div
        className="w-[300px] h-44 rounded-2xl overflow-hidden relative max-md:w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://venuscateringservice.com/images/info-bar-1.jpg')",
        }}
      >
        <div className="text-white text-center px-7 py-10">
          <h1 ref={ref2} className="text-6xl font-bold">
            {inView2 ? <CountUp end={250} duration={3} /> : "0"}+
          </h1>
          <p className="text-md font-extrabold">Menu Options</p>
        </div>
      </div>
      <div
        className="w-[300px] h-44 rounded-2xl overflow-hidden relative max-md:w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://venuscateringservice.com/images/info-bar-2.jpg')",
        }}
      >
        <div className="text-white text-center px-7 py-10">
          <h1 ref={ref3} className="text-6xl font-bold">
            {inView3 ? <CountUp end={340} duration={3} /> : "0"}+
          </h1>
          <p className="text-md font-extrabold">Staff</p>
        </div>
      </div>
      <div
        className="w-[300px] h-44 rounded-2xl overflow-hidden relative max-md:w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://venuscateringservice.com/images/info-bar-3.jpg')",
        }}
      >
        <div className="text-white text-center px-7 py-10">
          <h1 ref={ref4} className="text-6xl font-bold">
            {inView4 ? <CountUp end={125} duration={3} /> : "0"}K
          </h1>
          <p className="text-md font-extrabold">Happy Foodies</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
