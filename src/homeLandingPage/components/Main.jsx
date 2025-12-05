
import { useState } from 'react'
import BlockGallery from './BlockGallery'
import Factory from './Factory'
import Fair from './Fair'
import Hero from './Hero'
import Mine from './Mine'
import News from './News'
import PaverGallery from './PaverGallery'
import SlabGallery from './SlabGallery'
import TileGallery from './TileGallery'
const Main = () => {
  return (
    <div className='grid grid-cols-2 gap-5 w-full'> 
      <Hero />
      {/* <TripleInfo />
      
      <Product />
     <References />
      <AboutUs /> */}
      <SlabGallery />
      <TileGallery />
      <Mine />
      <PaverGallery />
      <BlockGallery />
      
      <div className='flex flex-col col-span-2'>
        <Factory />
        <Fair />
        <News />
      </div>
      

      
      
      
      
      
    </div>
  )
}

export default Main