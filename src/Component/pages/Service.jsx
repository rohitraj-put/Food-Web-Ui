import React from "react";
import wedding from "../../assets/Image/wedding.jpg";
import wedding60 from "../../assets/Image/wedding60.jpg";
import Engagement from "../../assets/Image/Engagement.jpg";
import Seemantham from "../../assets/Image/Seemantham.jpg";
import Birthday from "../../assets/Image/Birthday.jpg";
import Mehndi from "../../assets/Image/Mehndi.jpg";
import Corporate from "../../assets/Image/Corporate.jpg";
import House from "../../assets/Image/House.jpg";
import retirement from "../../assets/Image/retirement.jpg";
import bg from "../../assets/Image/servicebg.jpg";

function Service() {
  const premiumCateringServices = [
    {
      title: "Wedding Event",
      description:
        "Wedding. Why do we have the concept of inviting all our relatives, friends, and known ones? It's because when a family celebrates an event, it means it's an occasion. When a lot of people celebrate an event, it turns into a feast. Can any feast occur without food? We are here to make a memorable experience for your guests by pampering their taste buds.",
      image: wedding,
    },
    {
      title: "60th Wedding Event",
      description:
        "What more happiness can we get than receiving blessings from a couple who are stepping into their 60th year of wedding life?  seeing our elders and spending time with them has become a rarity. We at Taj Taazagi Catters Service want to provide sumptuous food for all your guests attending your family's 60th wedding anniversary.",
      image: wedding60,
    },

    {
      title: "Engagement",
      description:
        "A wedding is a special bond that makes the life of any person beautiful. Engagement is the first step of the wedding process and it assures the bond and relationship between two individuals. Engagements are celebrated in a very grand manner. According to us, we give more importance to the satisfaction of the guests in terms of food.",
      image: Engagement,
    },
    {
      title: "Seemantham",
      description:
        "What can be more special than a woman giving life to another soul in this world? It’s an amazing experience to witness a woman getting transformed into motherhood. All the friends, relatives, and people in our locality will be coming to greet and bless the to-be mother and the baby to arrive safely. We make sure that the food taste gives you extra happiness and smile.",
      image: Seemantham,
    },
    {
      title: "Birthday Party",
      description:
        "Make every birthday a memorable one with our birthday photography. Whether it’s a child's first birthday or a milestone celebration, we capture the joy, excitement, and love of the day and preserve it forever. At Taj Taazagi Catters Service, we take care of the happiness of your guests by offering them amazing food on behalf of you.",
      image: Birthday,
    },
    {
      title: "House Warming",
      description:
        "Houses make our life complete. Most of our life we are going to spend in houses. So houses are always special. They carry out all the emotions of family and pass it to generations and on. In our society, building a house is considered an achievement and it gives immense happiness and a secure feeling. We take care of your guests and they will praise your house and our food as well.",
      image: House,
    },
    {
      title: "Mehndi Function",
      description:
        "The core significance of applying Mehndi is to utilize its natural medicinal herbal remedies, cooling the body, and relieving the bride of any stress before her big day. Apart from the medicinal benefit, the bride looks beautiful with her mehndi-filled hands. In modern-day marriages, it’s a trend to have a mehndi function exclusively and we obviously take care of the food.",
      image: Mehndi,
    },
    {
      title: "Corporate Events",
      description:
        "From corporate events to business occasions or milestone celebrations, our event catering team captures the heart of their audiences on their special occasions. We focus on delivering customized delicacies of different types. We make sure all the audience feels good about the food too and that makes your event unique.",
      image: Corporate,
    },
    {
      title: "Retirement Function",
      description:
        "A retirement party is definitely a time to get emotional and relish the moments of hard work and perseverance. We do this by organizing an event to present highlights of the retiree's personal life and work life. Both are important to display at this occasion. We call all our colleagues and near ones and it’s unfair to send them without good food.",
      image: retirement,
    },
  ];

  return (
    <>
      <div
        className=" relative flex justify-center items-center h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-[#222222ba] bg-opacity-50"></div>
        <div className=" relative text-center text-white p-8  bg-opacity-50 rounded-lg">
          <h1 className="text-5xl max-md:text-3xl font-bold mb-4">Services</h1>
          <p className="text-lg">Home / Services</p>
        </div>
      </div>

      <div className="w-2/3 max-md:w-full py-8" style={{ margin: "auto" }}>
        <h1 className="text-xl text-center  font-bold text-rose-800 tracking-widest uppercase">
          What We Do.
        </h1>
        <h1
          style={{ padding: "20px 0" }}
          className="text-5xl text-center font-bold text-[#222222] max-md:text-3xl"
        >
          {" "}
          Premium catering services
        </h1>
      </div>

      <div className="flex justify-center items-center gap-4 flex-wrap my-8">
        {premiumCateringServices.map((item, index) => (
          <div
            key={index}
            className="w-[31%] min-h-80 bg-gray-100 max-md:w-full max-md:px-4 rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="w-full flex-1 overflow-hidden">
              <img
                className="w-full h-full hover:scale-125 duration-700 object-cover aspect-[3/2]"
                loading="lazy"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="p-5">
              <h1 className="text-xl font-bold text-rose-800 tracking-widest uppercase">
                {item.title}
              </h1>
              <p className="text-lg text-start text-[#222222] py-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Service;
