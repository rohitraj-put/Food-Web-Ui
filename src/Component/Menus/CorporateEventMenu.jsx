import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CorporateEventMenu = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 flex justify-center items-center">
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      >
        <h1 className="text-4xl font-extrabold text-gray-700 mb-4">
          Corporate Event Menu
        </h1>
        <p className="text-gray-600 italic mb-6">
          A sophisticated selection for a professional gathering
        </p>

        <div className="space-y-6">
          {["Appetizers", "Main Course", "Desserts", "Drinks"].map(
            (category, index) => (
              <motion.section
                key={category}
                className="bg-gray-100 p-4 rounded-xl shadow-md"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                  {category}
                </h2>
                <ul className="text-gray-700">
                  {category === "Appetizers" && (
                    <>
                      <li>🧀 Assorted Cheese & Crackers</li>
                      <li>🍤 Shrimp Cocktail with Cocktail Sauce</li>
                      <li>🥗 Mediterranean Hummus Platter</li>
                    </>
                  )}
                  {category === "Main Course" && (
                    <>
                      <li>🥩 Herb-Crusted Beef Tenderloin</li>
                      <li>🐟 Grilled Lemon Butter Salmon</li>
                      <li>🍛 Vegetarian Stuffed Peppers</li>
                    </>
                  )}
                  {category === "Desserts" && (
                    <>
                      <li>🍫 Chocolate Fondue with Fresh Fruit</li>
                      <li>🍰 Classic New York Cheesecake</li>
                      <li>🍪 Assorted Gourmet Cookies</li>
                    </>
                  )}
                  {category === "Drinks" && (
                    <>
                      <li>🍷 Selection of Red & White Wines</li>
                      <li>🍹 Signature Corporate Cocktails</li>
                      <li>☕ Premium Coffee & Herbal Teas</li>
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

export default CorporateEventMenu;
