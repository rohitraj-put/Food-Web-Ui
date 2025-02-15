import { image } from "motion/react-client";
import React from "react";

function Gallery() {
  const images = [
    {
      id: 1,
      url: "https://venuscateringservice.com/myimages/gallery/1.jpg",
      description: "A beautiful sunrise",
    },
    {
      id: 2,
      url: "https://venuscateringservice.com/myimages/gallery/2.jpg",
      description: "A tranquil beach",
    },
    {
      id: 3,
      url: "https://venuscateringservice.com/myimages/gallery/3.jpg",
      description: "A bustling cityscape",
    },
    {
      id: 4,
      url: "https://venuscateringservice.com/myimages/gallery/4.jpg",
      description: "A serene mountain range",
    },
    {
      id: 5,
      url: "https://venuscateringservice.com/myimages/gallery/5.jpg",
      description: "A vibrant garden",
    },
    {
      id: 6,
      url: "https://venuscateringservice.com/myimages/gallery/6.jpg",
      description: "A picturesque waterfall",
    },
    {
      id: 7,
      url: "https://venuscateringservice.com/myimages/gallery/7.jpg",
      description: "A calm lake",
    },
    {
      id: 8,
      url: "https://venuscateringservice.com/myimages/gallery/8.jpg",
      description: "A dense forest",
    },
    {
      id: 9,
      url: "https://venuscateringservice.com/myimages/gallery/9.jpg",
      description: "A stunning sunset",
    },
  ];

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
          <h1 className="text-5xl max-md:text-3xl font-bold mb-4">Gallery</h1>
          <p className="text-lg"> Home / Gallery</p>
        </div>
      </div>

      <div className="flex justify-between gap-4 flex-row flex-wrap my-12 px-8">
        {images.map((item, index) => (
          <div
            className="w-[32%] h-[50vh] rounded-2xl overflow-hidden max-md:w-full "
            key={index}
          >
            <img src={item.url} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
