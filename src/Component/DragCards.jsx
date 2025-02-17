import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
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
        src="https://img.freepik.com/free-photo/beautiful-woman-long-red-dress-walks-around-city-with-her-husband_1157-13377.jpg?t=st=1738045525~exp=1738049125~hmac=249cb8095281fcb25c9680f2cad0c97b94899f43cc9d020be73ee4c5b9742e58&w=900"
        alt="Example image"
        rotate="6deg"
        top="5%"
        left="5%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://venuscateringservice.com/myimages/corporate.jpg"
        alt="Example image"
        rotate="12deg"
        top="5%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://img.freepik.com/premium-photo/cheerful-kids-attending-birthday-party_259150-5020.jpg?ga=GA1.1.1889603430.1735627527&semt=ais_hybrid"
        alt="Example image"
        rotate="-6deg"
        top="30%"
        left="5%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://img.freepik.com/free-photo/view-white-guest-chairs-decorated-ceremonial-archway-open-air-sunny-day_8353-11514.jpg?t=st=1738062632~exp=1738066232~hmac=db7de8a6bdb2a9c6bda14d2846051ad136686580658b7b572fd1ee6b1da271bf&w=900"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />

      <Card
        containerRef={containerRef}
        src="https://www.cateringcorner.in/wp-content/themes/cateringcorner-v2/images/webp/home-story-1.webp"
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
