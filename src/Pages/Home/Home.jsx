import React from 'react'
import { Carousel } from './Carousel'
import { FeaturedProducts } from './FeaturedProducts'
import { Categories } from './Categories'

export const Home = () => {
  return (
    <div>
      <Carousel/>
      <FeaturedProducts/>
      <Categories/>
    </div>
  )
}
