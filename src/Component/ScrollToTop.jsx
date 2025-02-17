import React, { useState, useEffect } from "react";
import { IoMdArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-2 right-2 p-3 z-50 rounded-full bg-rose-800 text-white shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <IoMdArrowUp size={24} />
    </button>
  );
}
