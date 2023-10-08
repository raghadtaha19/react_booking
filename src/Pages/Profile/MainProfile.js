import React from 'react'
import Navbar from '../Layout/Navbar'
import PersonalDetails from './Sections/PersonalDetails'
import History from './Sections/History'
import MainFooter from '../Layout/MainFooter'
import Hero from './Sections/Hero'




const MainProfile = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PersonalDetails />
      <History />
      <MainFooter />
    </div>
  )
}

export default MainProfile





