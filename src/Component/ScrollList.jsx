import React from "react";

function ScrollList() {
  const items = [
    "Wedding",
    " Anniversary",
    " Engagement",
    " Seemantham",
    " Annaprasana",
    " Birthday",
    " Mehndi",
    " Corporate",
    " Retirement",
    " House Warming",
    " Reception",
    " Naming Ceremony",
  ];

  return (
    <div className="scroll-container overflow-hidden mt-12">
      <ul className="scroll-list bg-rose-800 text-white text-xl max-md:text-sm p-2">
        {items.map((item, index) => (
          <div className="flex items-center " key={index}>
            {" "}
            <li key={index} className="mr-4">
              {item}
            </li>
            <div className="w-2 h-2 rounded-full bg-white mr-1"></div>
          </div>
        ))}
        {items.map((item, index) => (
          <div className="flex items-center" key={index}>
            <li key={index + items.length} className="mr-4">
              {item}
            </li>
            <div className="w-2 h-2 rounded-full bg-white mr-1"></div>
          </div>
        ))}
      </ul>
      <style jsx>{`
        .scroll-container {
          overflow: hidden;
          white-space: nowrap;
        }
        .scroll-list {
          display: inline-flex;
          animation: scroll 20s linear infinite;
        }
        .scroll-list li {
          margin-right: 15px;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default ScrollList;
