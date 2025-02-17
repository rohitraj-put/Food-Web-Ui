import React, { useState } from "react";

const WeddingMenu = () => {
  const [activeFilter, setActiveFilter] = useState(1);

  const menuItems = [
    { id: 1, name: "Evening Snacks Stall" },
    { id: 6, name: "Stimulating Drinks" },
    { id: 3, name: "Chaat Stall" },
    { id: 4, name: "Fresh Juice Stall" },
    { id: 5, name: "Mocktail Stall" },
    { id: 7, name: "Desserts" },
    { id: 8, name: "Ice Creams" },
    { id: 9, name: "Fruit Stall" },
    { id: 10, name: "Starters" },
    { id: 11, name: "Soup Stall" },
    { id: 12, name: "Indian Breads With Accompaniments" },
    { id: 13, name: "South Indian Tiffin With Accompaniments" },
    { id: 14, name: "Main Course With Rice & Accompaniments" },
    { id: 15, name: "Early Morning Bed Coffee" },
    { id: 16, name: "Muhurtham Breakfast" },
    { id: 17, name: "Kalyana Lunch" },
    { id: 18, name: "Counters For Special Occasion" },
    { id: 19, name: "Thamboolam Bags" },
  ];

  const handleFilterClick = (id) => {
    setActiveFilter(id);
  };

  return (
    <div>
      <div className="menu-page-section">
        <div className=" mx-auto">
          <div className="row flex gap-4">
            <div className="col-lg-3 col-md-12">
              <div
                className="menu-dises-nav wow fadeInLeft bg-gray-100 "
                data-wow-delay="0.75s"
              >
                <ul>
                  {menuItems.map((item) => (
                    <li
                      key={item.id}
                      className="d-flex flex-row mb-4 px-4 py-1"
                    >
                      <img
                        src="images/icon-dinner.svg"
                        alt=""
                        className="mr-2"
                      />
                      <a
                        href="#"
                        className={`cursor-pointer   ${
                          activeFilter === item.id ? "active-menu-dises" : ""
                        }`}
                        onClick={() => handleFilterClick(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="row menu-item-boxes wow fadeInUp">
                {menuItems
                  .filter((item) => item.id === activeFilter)
                  .map((item) => (
                    <div key={item.id} className="col-md-6 col-lg-4 mb-4">
                      <div className="card">
                        <img
                          src={`images/menu/${item.id}.jpg`}
                          className="card-img-top"
                          alt={item.name}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">
                            Description of {item.name} goes here.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="row">
                <div className="col-12 d-flex flex-row justify-content-center">
                  <div id="pagination-controls" className="hidden">
                    <button id="prev-page" className="pagination-button">
                      Prev
                      <img
                        src="images/menu/previcon.png"
                        className="w-5 ml-1"
                      />
                    </button>
                    <span id="page-info"></span>
                    <button id="next-page" className="pagination-button">
                      <img
                        src="images/menu/nexticon.png"
                        className="w-5 mr-1"
                      />
                      Next
                    </button>
                  </div>
                </div>
              </div>
              {/* Pagination Controls */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingMenu;
