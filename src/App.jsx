import React, { useState, useEffect } from "react";
import "./App.css";
// import AnimatedCursor from "react-animated-cursor";
import Navbar from "./Component/navbar/Navbar";
import Loading from "./Component/Loading";
import Footer from "./Component/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Service from "./Component/pages/Service";
import Home from "./Component/pages/Home";
import ScrollList from "../src/Component/ScrollList";
import Gallery from "./Component/pages/Gallery";
import Blog from "./Component/pages/Blog";
import Contact from "./Component/pages/Contact";
import AboutUs from "./Component/pages/AboutUs";
import PageNotFound from "./Component/PNF/PageNotFound";
import ScrollTop from "./Component/ScrollTop";
import WeddingMenu from "../src/Component/Menus/WeddingMenu";
import BirthdayMenu from "./Component/Menus/BirthdayMenu";
import CorporateEventMenu from "./Component/Menus/CorporateEventMenu";
import AnniversaryMenu from "./Component/Menus/AnniversaryMenu";
import SpecialOccasionMenu from "./Component/Menus/SpecialOccasionMenu";
import SeasonalSpecialsMenu from "./Component/Menus/SeasonalSpecialsMenu";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ScrollTop />
      {/* <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="services" element={<Service />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />

        {/* -------------------Menus Routes--------------- */}

        <Route path="weddingmenu" element={<WeddingMenu />} />
        <Route path="birthdaymenu" element={<BirthdayMenu />} />
        <Route path="corporatemenu" element={<CorporateEventMenu />} />
        <Route path="anniversarymenu" element={<AnniversaryMenu />} />
        <Route path="specialoccasionmenu" element={<SpecialOccasionMenu />} />
        <Route path="seasonalmenu" element={<SeasonalSpecialsMenu />} />
      </Routes>
      <ScrollList />
      <Footer />
    </>
  );
}

export default App;
