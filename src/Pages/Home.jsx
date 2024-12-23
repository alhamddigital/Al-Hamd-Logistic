import React from 'react'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'
import Calculation from '../Components/Calculation'
import About from '../Components/About'
import Explore from '../Components/Service'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Clients from '../Components/Clients'
import News from '../Components/News'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <Explore/>
        {/* <Services/> */}
        <Calculation/>
        <About/>
        <News/>
        <Clients/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home