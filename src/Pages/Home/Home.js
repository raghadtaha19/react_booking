import React from "react";
import Navbar from "../Layout/Navbar";
import MainFooter from "../Layout/MainFooter";
import Hero from "./Sections/Hero";
import Category from "./Sections/Category";
import AfterHeader from "./Sections/AfterHeader";
import ComingSoon from "./Sections/ComingSoon";
import NeedHelp from "./Sections/NeedHelp";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <ComingSoon />
      <NeedHelp />
      <MainFooter />
    </div>
  );
};

export default Home;
