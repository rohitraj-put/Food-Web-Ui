import React from "react";

const menus = {
  "Wedding menu": ["Dish 1", "Dish 2", "Dish 3"],
  "60th wedding menu": ["Dish 1", "Dish 2", "Dish 3"],
  "70th wedding menu": ["Dish 1", "Dish 2", "Dish 3"],
  "80th wedding menu": ["Dish 1", "Dish 2", "Dish 3"],
  "Engagement menu": ["Dish 1", "Dish 2", "Dish 3"],
  "Seemantham menu": ["Dish 1", "Dish 2", "Dish 3"],
  "Annaprasana ceremony": ["Dish 1", "Dish 2", "Dish 3"],
  "Birthday menu": ["Dish 1", "Dish 2", "Dish 3"],
  "House warming breakfast menu": ["Dish 1", "Dish 2", "Dish 3"],
  "House warming lunch menu": ["Dish 1", "Dish 2", "Dish 3"],
  "Mehndi Function menu": ["Dish 1", "Dish 2", "Dish 3"],
};

const Menu = ({ event }) => (
  <div>
    <h2>{event}</h2>
    <ul>
      {menus[event].map((dish, index) => (
        <li key={index}>{dish}</li>
      ))}
    </ul>
  </div>
);

const MenuComponent = () => {
  const events = Object.keys(menus);

  return (
    <div>
      {events.map((event, index) => (
        <Menu key={index} event={event} />
      ))}
    </div>
  );
};

export default MenuComponent;
