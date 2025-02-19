import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SpecialOccasionMenu = () => {
  return (
    <div className="bg-purple-50 min-h-screen p-6 flex justify-center items-center">
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      >
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
          Special Occasion Menu
        </h1>
        <p className="text-gray-600 italic mb-6">
          A luxurious selection for a memorable celebration
        </p>

        <div className="space-y-6">
          {["Appetizers", "Main Course", "Desserts", "Drinks"].map(
            (category, index) => (
              <motion.section
                key={category}
                className="bg-purple-100 p-4 rounded-xl shadow-md"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-purple-600 mb-2">
                  {category}
                </h2>
                <ul className="text-gray-700">
                  {category === "Appetizers" && (
                    <>
                      <li>🦪 Oysters on the Half Shell</li>
                      <li>🍤 Lobster & Avocado Tartare</li>
                      <li>🥗 Truffle Caesar Salad</li>
                    </>
                  )}
                  {category === "Main Course" && (
                    <>
                      <li>🥩 Wagyu Beef with Red Wine Reduction</li>
                      <li>🐟 Pan-Seared Chilean Sea Bass</li>
                      <li>🍝 Handmade Porcini Mushroom Ravioli</li>
                    </>
                  )}
                  {category === "Desserts" && (
                    <>
                      <li>🍫 Decadent Chocolate Lava Cake</li>
                      <li>🍓 Champagne-Infused Berry Parfait</li>
                      <li>🍮 Vanilla Bean Crème Brûlée</li>
                    </>
                  )}
                  {category === "Drinks" && (
                    <>
                      <li>🍷 Premium Wine Pairings</li>
                      <li>🍹 Signature Celebration Cocktails</li>
                      <li>☕ Artisanal Coffee & Herbal Infusions</li>
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

export default SpecialOccasionMenu;
