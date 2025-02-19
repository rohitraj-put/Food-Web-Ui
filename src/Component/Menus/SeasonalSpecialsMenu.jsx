import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SeasonalSpecialsMenu = () => {
  return (
    <div className="bg-green-50 min-h-screen p-6 flex justify-center items-center">
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      >
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">
          Seasonal Specials Menu
        </h1>
        <p className="text-gray-600 italic mb-6">
          A fresh selection inspired by the season
        </p>

        <div className="space-y-6">
          {["Appetizers", "Main Course", "Desserts", "Drinks"].map(
            (category, index) => (
              <motion.section
                key={category}
                className="bg-green-100 p-4 rounded-xl shadow-md"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-green-600 mb-2">
                  {category}
                </h2>
                <ul className="text-gray-700">
                  {category === "Appetizers" && (
                    <>
                      <li>🥗 Spring Pea & Mint Salad</li>
                      <li>🍄 Wild Mushroom Bruschetta</li>
                      <li>🍜 Butternut Squash Soup</li>
                    </>
                  )}
                  {category === "Main Course" && (
                    <>
                      <li>🐟 Cedar Plank Salmon with Citrus Glaze</li>
                      <li>🥩 Grilled Lamb Chops with Rosemary</li>
                      <li>🍆 Stuffed Eggplant with Quinoa & Feta</li>
                    </>
                  )}
                  {category === "Desserts" && (
                    <>
                      <li>🍓 Fresh Berry Pavlova</li>
                      <li>🍋 Lemon Tart with Almond Crust</li>
                      <li>🍏 Spiced Apple Crumble</li>
                    </>
                  )}
                  {category === "Drinks" && (
                    <>
                      <li>🍹 Cucumber & Basil Spritz</li>
                      <li>🍷 Seasonal Mulled Wine</li>
                      <li>☕ Spiced Chai Latte</li>
                    </>
                  )}
                </ul>
              </motion.section>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SeasonalSpecialsMenu;
