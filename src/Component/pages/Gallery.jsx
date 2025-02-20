import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import biryani from "../../assets/Image/biryani.jpg";
import paneer from "../../assets/Image/paneer.jpg";
import paneerTeeka from "../../assets/Image/paneer-tikka.jpg";
import pannaCotta from "../../assets/Image/panna-cotta.jpg";
import idli from "../../assets/Image/idli.jpg";
import sheed from "../../assets/Image/sheed.jpg";
import bg from "../../assets/Image/gellarybg.jpg";
import IndianThali from "../../assets/Image/indian-dishes.avif";
import southMeal from "../../assets/Image/south_meal.jpg";
import GajarHalwa from "../../assets/Image/GajarHalwa.jpg";

function Gallery() {
  const images = [
    {
      id: 1,
      url: sheed,
      description: "Chia Seed Pudding",
    },
    {
      id: 2,
      url: IndianThali,
      description: "vegetarian Indian Thali",
    },
    {
      id: 3,
      url: southMeal,
      description: "traditional South Indian meal",
    },
    {
      id: 4,
      url: biryani,
      description: "Vegetable Biryani",
    },
    {
      id: 5,
      url: GajarHalwa,
      description: "Gajar ka halwa",
    },
    {
      id: 6,
      url: idli,
      description: " South Indian meal - Idli,Dosa",
    },
    {
      id: 7,
      url: paneer,
      description: "Paneer Curry",
    },
    {
      id: 8,
      url: paneerTeeka,
      description: "Tandoori Paneer Tikka",
    },
    {
      id: 9,
      url: pannaCotta,
      description: "Mango Panna Cotta, an Italian dessert",
    },
  ];

  React.useEffect(() => {
    Aos.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <>
      <div
        className="flex justify-center items-center h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="text-center text-white p-8 bg-opacity-50 rounded-lg">
          <h1 className="text-5xl max-md:text-3xl font-bold mb-4">Gallery</h1>
          <p className="text-lg"> Home / Gallery</p>
        </div>
      </div>

      <div className="flex justify-between gap-4 flex-row flex-wrap my-12 px-8 max-md:px-2">
        {images.map((item, index) => (
          <div
            className="w-[32%] h-[50vh] max-md:h-[35vh] rounded-2xl overflow-hidden max-md:w-full relative group"
            key={index}
          >
            <img
              src={item.url}
              className="w-full h-full object-cover"
              data-aos="zoom-in"
            />
            <div className="absolute inset-0 bg-[#222222aa] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl capitalize text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
