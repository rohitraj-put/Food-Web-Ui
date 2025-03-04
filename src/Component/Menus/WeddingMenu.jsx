import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WeddingMenu = () => {
  return (
    <div className="bg-pink-50 min-h-screen p-6 flex justify-center items-center">
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      >
        <h1 className="text-4xl font-extrabold text-pink-600 mb-4">
          Wedding Menu
        </h1>
        <p className="text-gray-600 italic mb-6">
          A special selection for a memorable day
        </p>

        <div className="space-y-6">
          {["Appetizers", "Main Course", "Desserts", "Drinks"].map(
            (category, index) => (
              <motion.section
                key={category}
                className="bg-pink-100 p-4 rounded-xl shadow-md"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-pink-500 mb-2">
                  {category}
                </h2>
                <ul className="text-gray-700">
                  {category === "Appetizers" && (
                    <>
                      <li>🥗 Caesar Salad with Parmesan</li>
                      <li>🦐 Shrimp Cocktail</li>
                      <li>🍲 Tomato Basil Soup</li>
                    </>
                  )}
                  {category === "Main Course" && (
                    <>
                      <li>🥩 Grilled Filet Mignon with Garlic Butter</li>
                      <li>🐟 Lemon Herb Salmon</li>
                      <li>🍝 Truffle Mushroom Risotto</li>
                    </>
                  )}
                  {category === "Desserts" && (
                    <>
                      <li>🍰 Red Velvet Cake</li>
                      <li>🍮 Crème Brûlée</li>
                      <li>🍓 Chocolate Dipped Strawberries</li>
                    </>
                  )}
                  {category === "Drinks" && (
                    <>
                      <li>🍷 Fine Red & White Wine</li>
                      <li>🍹 Signature Wedding Cocktails</li>
                      <li>☕ Freshly Brewed Coffee & Tea</li>
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

export default WeddingMenu;
