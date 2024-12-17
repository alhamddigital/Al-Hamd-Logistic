import React from 'react'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'
import Calculation from '../Components/Calculation'
import About from '../Components/About'
import Explore from '../Components/Explore'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Clients from '../Components/Clients'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <Services/>
        <Calculation/>
        <About/>
        {/* <Map/> */}
        <Explore/>
        <Clients/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home