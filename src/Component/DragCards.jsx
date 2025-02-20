import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import wedding from "../assets/Image/wedding.jpg";
import Birthday from "../assets/Image/Birthday.jpg";
import Engagement from "../assets/Image/Engagement.jpg";
import Mehndi from "../assets/Image/Mehndi.jpg";
import Seemantham from "../assets/Image/Seemantham.jpg";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-[#222222b6]">
      <h2 className="relative z-0 text-[20vw] font-black text-white md:text-[50px]">
        Taj Taazagi<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src={wedding}
        alt="Example image"
        rotate="6deg"
        top="5%"
        left="5%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src={Birthday}
        alt="Example image"
        rotate="12deg"
        top="5%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src={Engagement}
        alt="Example image"
        rotate="-6deg"
        top="30%"
        left="5%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src={Mehndi}
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />

      <Card
        containerRef={containerRef}
        src={Seemantham}
        alt="Example image"
        rotate="-3deg"
        top="28%"
        left="60%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
