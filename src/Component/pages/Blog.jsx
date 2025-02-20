import React from "react";
import vegetable from "../../assets/Image/vegetable.jpg";
import Thali from "../../assets/Image/indian-food.jpg";
import salad from "../../assets/Image/salad.jpg";
import bg from "../../assets/Image/blogBg.webp";

function Blog() {
  const articles = [
    {
      date: "July 08, 2024",
      title:
        "The Rising Popularity of Vegetarian Catering. More Events Are Going Meat-Free",
      image: vegetable,
      description:
        "In recent years, there has been a significant shift in the way events are catered, with more organizers opting for vegetarian menus. This growing trend is driven by several factors, including health consciousness, environmental concerns, and the increasing demand for plant-based options among attendees.",
    },
    {
      date: "Aug 22, 2024",
      title:
        "Delicious and Nutritious: Top 10 Vegetarian Dishes for Your Next Event",
      image: salad,
      description:
        "Planning an event and looking for mouthwatering vegetarian options? Whether it’s a wedding, corporate gathering, or casual get-together, offering delicious plant-based dishes can leave a lasting impression on your guests. This guide highlights ten incredible vegetarian dishes that combine flavor, nutrition, and visual appeal, ensuring your event menu is both satisfying and memorable.",
    },
    {
      date: "Jan 16, 2025",
      title: "Planning the Perfect Vegetarian Menu for Any Occasion",
      image: Thali,
      description:
        "Creating a balanced and satisfying meat-free spread has never been easier. This guide will help you curate the perfect vegetarian menu, ensuring every guest enjoys a delicious and memorable dining experience. From gourmet appetizers to hearty main courses and delectable desserts, we have everything you need to impress your guests.",
    },
  ];
  return (
    <>
      <div
        className="flex justify-center items-center h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="text-center text-white p-8  bg-opacity-50 rounded-lg">
          <h1 className="text-5xl max-md:text-3xl font-bold mb-4">Blog</h1>
          <p className="text-lg"> Home / Blog</p>
        </div>
      </div>

      {/* ---- */}

      <div className="flex justify-center min-h-80 items-start gap-4 flex-wrap my-8 max-md:px-2">
        {articles.map((item, index) => (
          <div
            key={index}
            className="w-[31%] min-h-80 bg-gray-100 max-md:w-full rounded-2xl overflow-hidden flex flex-col justify-between"
          >
            <div className="w-full flex-1 overflow-hidden">
              <img
                className="w-full h-full hover:scale-125 transition-transform duration-700 object-cover aspect-[3/2]"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="flex-1 p-5 flex flex-col justify-between">
              <div>
                <h1 className="text-xl font-bold text-rose-800 py-8 tracking-widest uppercase">
                  {item.date}
                </h1>
                <h1 className="text-md font-bold text-[#222222] capitalize">
                  {item.title}
                </h1>
              </div>
              <p className="text-justify pt-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
