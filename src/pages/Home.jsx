import React from "react";

import { useMediaQuery } from "react-responsive";

import { Hero } from "../sections/Hero";
import WorkedWith from "../sections/WorkedWith";
import Services from "../sections/Services";
import About from "../sections/About";
import Projects from "../sections/Projects";
import WhyChooseUs from "../sections/WhyChooseUs";


const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <>
      <Hero />
      <WorkedWith />
      <Services />
      <About />
      <Projects />
      <WhyChooseUs />
    </>
  );
};

export default Home;
