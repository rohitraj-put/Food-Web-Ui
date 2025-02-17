import React from "react";

function Blog() {
  const articles = [
    {
      date: "July 08, 2024",
      title:
        "The Rising Popularity of Vegetarian Catering: Why More Events Are Going Meat-Free",
      image: "https://venuscateringservice.com/myimages/blog1.jpg",
    },
    {
      date: "July 08, 2024",
      title:
        "Delicious and Nutritious: Top 10 Vegetarian Dishes for Your Next Event",
      image: "https://venuscateringservice.com/myimages/blog2.jpg",
    },
    {
      date: "July 08, 2024",
      title: "Planning the Perfect Vegetarian Menu for Any Occasion",
      image: "https://venuscateringservice.com/images/post-3.jpg",
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
          <h1 className="text-5xl max-md:text-3xl font-bold mb-4">Blog</h1>
          <p className="text-lg"> Home / Blog</p>
        </div>
      </div>

      {/* ---- */}

      <div className="flex justify-center items-center gap-4 flex-wrap my-8 max-md:px-2">
        {articles.map((item, index) => (
          <div
            key={index}
            className="w-[31%] min-h-80 bg-gray-100 max-md:w-full rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="w-full flex-1 overflow-hidden">
              <img
                className="w-full h-full hover:scale-125 duration-700 object-cover aspect-[3/2]"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="p-5">
              <h1 className="text-xl font-bold text-rose-800 py-8 tracking-widest uppercase">
                {item.date}
              </h1>
              <h1 className="text-md  font-bold text-[#222222] capitalize">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
