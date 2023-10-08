import React from 'react'
import Hero from './Sections/Hero';
import Massage from './Sections/Massage';
import Map from './Sections/Map';
import Navbar from "../Layout/Navbar";
import MainFooter from "../Layout/MainFooter";

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Map/>
        <Massage/>
        <MainFooter />
       
    </div>
  )
}

export default Contact
