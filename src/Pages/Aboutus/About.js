import React from 'react';
import Navbar from "../Layout/Navbar";
import Icons from "./icons";
import Hero from "./Hero";

import MainFooter from "../Layout/MainFooter";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Icons />
      <MainFooter />
    </div>
  );
};

export default About;