import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AnniversaryMenu = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-6 flex justify-center items-center">
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      >
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Anniversary Menu
        </h1>
        <p className="text-gray-600 italic mb-6">
          A delightful feast for a special celebration
        </p>

        <div className="space-y-6">
          {["Appetizers", "Main Course", "Desserts", "Drinks"].map(
            (category, index) => (
              <motion.section
                key={category}
                className="bg-blue-100 p-4 rounded-xl shadow-md"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">
                  {category}
                </h2>
                <ul className="text-gray-700">
                  {category === "Appetizers" && (
                    <>
                      <li>🧀 Cheese & Charcuterie Board</li>
                      <li>🍤 Coconut Shrimp</li>
                      <li>🥑 Avocado Bruschetta</li>
                    </>
                  )}
                  {category === "Main Course" && (
                    <>
                      <li>🥩 Prime Rib with Rosemary Jus</li>
                      <li>🐠 Grilled Sea Bass with Citrus Glaze</li>
                      <li>🍝 Spinach & Ricotta Stuffed Ravioli</li>
                    </>
                  )}
                  {category === "Desserts" && (
                    <>
                      <li>🍫 Dark Chocolate Mousse</li>
                      <li>🍓 Strawberry Shortcake</li>
                      <li>🍮 Vanilla Bean Panna Cotta</li>
                    </>
                  )}
                  {category === "Drinks" && (
                    <>
                      <li>🥂 Champagne & Sparkling Wine</li>
                      <li>🍸 Classic Anniversary Cocktails</li>
                      <li>☕ Gourmet Coffee & Herbal Tea</li>
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

export default AnniversaryMenu;
