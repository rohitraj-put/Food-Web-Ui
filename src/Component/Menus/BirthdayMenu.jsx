import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BirthdayMenu = () => {
  return (
    <div className="bg-yellow-50 min-h-screen p-6 flex justify-center items-center">
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      >
        <h1 className="text-4xl font-extrabold text-yellow-600 mb-4">
          Birthday Menu
        </h1>
        <p className="text-gray-600 italic mb-6">
          A joyful feast for a special celebration
        </p>

        <div className="space-y-6">
          {["Appetizers", "Main Course", "Desserts", "Drinks"].map(
            (category, index) => (
              <motion.section
                key={category}
                className="bg-yellow-100 p-4 rounded-xl shadow-md"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-yellow-500 mb-2">
                  {category}
                </h2>
                <ul className="text-gray-700">
                  {category === "Appetizers" && (
                    <>
                      <li>🧀 Cheese Platter with Crackers</li>
                      <li>🍢 Mini Caprese Skewers</li>
                      <li>🌮 Spicy Chicken Tacos</li>
                    </>
                  )}
                  {category === "Main Course" && (
                    <>
                      <li>🍔 Gourmet Sliders with Fries</li>
                      <li>🍕 Assorted Pizza Selection</li>
                      <li>🍝 Classic Spaghetti & Meatballs</li>
                    </>
                  )}
                  {category === "Desserts" && (
                    <>
                      <li>🎂 Birthday Cake (Chocolate & Vanilla)</li>
                      <li>🍪 Freshly Baked Cookies</li>
                      <li>🍦 Ice Cream Sundae Bar</li>
                    </>
                  )}
                  {category === "Drinks" && (
                    <>
                      <li>🥤 Soft Drinks & Lemonade</li>
                      <li>🍹 Signature Birthday Mocktails</li>
                      <li>☕ Hot Chocolate & Coffee</li>
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

export default BirthdayMenu;
