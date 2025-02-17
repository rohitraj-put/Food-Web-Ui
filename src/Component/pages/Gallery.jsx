import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Gallery() {
  const images = [
    {
      id: 1,
      url: "https://img.freepik.com/free-photo/close-up-delicious-acai-cereal-bowl_23-2149258877.jpg?t=st=1739772927~exp=1739776527~hmac=3a2260df3403b5b5d0916a2c1ed5dc7dd16264a34fd61be92369508389f0eefd&w=740",
      description: "Chia Seed Pudding",
    },
    {
      id: 2,
      url: "https://img.freepik.com/premium-photo/indian-dishes_2587-4.jpg?w=996",
      description: "vegetarian Indian Thali",
    },
    {
      id: 3,
      url: "https://img.freepik.com/premium-photo/traditional-south-indian-meal-food-served-big-banana-leaf-food-platter-complete-thali-selective-focus_466689-50782.jpg?w=740",
      description: "traditional South Indian meal",
    },
    {
      id: 4,
      url: "https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg?t=st=1739773119~exp=1739776719~hmac=cde7ff579a8eaa6bd9b2c80635a9f34c8625f2ea20386381abe71e84e41ffa3d&w=996",
      description: "Vegetable Biryani",
    },
    {
      id: 5,
      url: "https://img.freepik.com/premium-photo/gajar-halwa_1114710-3434.jpg?w=740",
      description: "Gajar ka halwa",
    },
    {
      id: 6,
      url: "https://www.thestatesman.com/wp-content/uploads/2019/04/idli.jpg",
      description: " South Indian meal - Idli,Dosa",
    },
    {
      id: 7,
      url: "https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246080.jpg?t=st=1739773385~exp=1739776985~hmac=682d765d364a9961b3acab6c7a4f852a1e43ff0c5eb5a1e52c06c137409b029d&w=740",
      description: "Paneer Curry",
    },
    {
      id: 8,
      url: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19997.jpg?t=st=1739773432~exp=1739777032~hmac=56b8881feff32a93684929beb2cd2d244730f39f499f3d1b9ff08be0dbde6892&w=996",
      description: "Tandoori Paneer Tikka",
    },
    {
      id: 9,
      url: "https://img.freepik.com/free-photo/homemade-mango-yoghurt-marble-surface_1150-41963.jpg?t=st=1739773459~exp=1739777059~hmac=43112dddcfc294ac462fc517da0f8447f6ce75f5ecbbeeae91f5e46c9e3a11d1&w=996",
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
          backgroundImage:
            "url('https://venuscateringservice.com/myimages/otherpagesbg.jpg')",
        }}
      >
        <div className="text-center text-white p-8 bg-opacity-50 rounded-lg">
          <h1 className="text-5xl max-md:text-3xl font-bold mb-4">Gallery</h1>
          <p className="text-lg"> Home / Gallery</p>
        </div>
      </div>

      <div className="flex justify-between gap-4 flex-row flex-wrap my-12 px-8">
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
