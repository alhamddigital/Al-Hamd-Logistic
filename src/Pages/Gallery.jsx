import React from 'react'
import Navbar1 from '../Components/Navbar1'
import Navbar from '../Components/Navbar2'
import Footer from '../Components/Footer'
import GalleryComp from '../Components/GalleryComp'

const Gallery = () => {
  return (
    <>
        <Navbar1/>
        <Navbar/>
        <GalleryComp/>
        <Footer/>
    </>
  )
}

export default Gallery