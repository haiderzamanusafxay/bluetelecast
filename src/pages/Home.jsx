import React from "react";

import { useMediaQuery } from "react-responsive";

import { Hero } from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
    </>
  );
};

export default Home;
