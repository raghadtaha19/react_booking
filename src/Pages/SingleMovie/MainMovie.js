import React from 'react'
import MovieDetails from './Sections/MovieDetails'
import MainFooter from '../Layout/MainFooter'
import Hero from './Sections/Hero'
import Navbar from '../Layout/Navbar'
import Reviews from './Sections/Review'

const MainMovie = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MovieDetails />
      <Reviews />
      <MainFooter />
    </div>
  )
}

export default MainMovie
