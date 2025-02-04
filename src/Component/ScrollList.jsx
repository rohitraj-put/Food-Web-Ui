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
    <div
      className="scroll-container overflow-hidden"
      style={{ marginTop: "50px" }}
    >
      <ul
        className="scroll-list bg-rose-800 text-white text-xl max-md:text-sm"
        style={{ padding: "10px" }}
      >
        {items.map((item, index) => (
          <div className="flex items-center ">
            {" "}
            <li key={index} style={{ marginRight: "15px" }}>
              {item}
            </li>
            <div
              className="w-2 h-2 rounded-full bg-white"
              style={{ marginRight: "4px" }}
            ></div>
          </div>
        ))}
        {items.map((item, index) => (
          <div className="flex items-center">
            <li key={index + items.length} style={{ marginRight: "15px" }}>
              {item}
            </li>
            <div
              className="w-2 h-2 rounded-full bg-white"
              style={{ marginRight: "4px" }}
            ></div>
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
