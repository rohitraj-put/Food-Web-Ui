import React from "react";
import Slider from "../Slider";
import About from "../About";
import Catering from "../Catering";
import WhyChoose from "../WhyChoose";
import StoryCorner from "../StoryCorner";
import Testimonials from "../Testimonials";
import Exprience from "../Exprience";

function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Catering />
      <WhyChoose />
      <StoryCorner />
      <Testimonials />
      <Exprience />
    </div>
  );
}

export default Home;
