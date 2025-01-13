import React from 'react'
import HeroSection from '../Components/HeroSection'
import Calculation from '../Components/Calculation'
import About from '../Components/About'
import Service from '../Components/Service'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Clients from '../Components/Clients'
import News from '../Components/News'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <Service/>
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