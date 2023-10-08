import React from 'react'
import Navbar from '../Layout/Navbar'
import Hero from './sections/Hero'
import Main from './sections/Main'
import MainFooter from '../Layout/MainFooter'

const AllMovies = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Main />
        <MainFooter />
    </div>
  )
}

export default AllMovies