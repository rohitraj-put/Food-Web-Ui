import React from "react";
import "./App.css";
import Navbar from "./Component/navbar/Navbar";
import Slider from "./Component/Slider";
import About from "./Component/About";
import Catering from "./Component/Catering";
import AnimatedCursor from "react-animated-cursor";
import WhyChoose from "./Component/WhyChoose";
import Loading from "./Component/Loading";
import StoryCorner from "./Component/StoryCorner";

function App() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <AnimatedCursor
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
      />
      <Navbar />
      <Slider />
      <About />
      <Catering />
      <WhyChoose />
      <StoryCorner />
    </>
  );
}

export default App;
