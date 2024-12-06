import React, { useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { transportHome } from '../Redux/Slice';

const HeroSection = () => {
  const homeRef=useRef()
  const dispatch=useDispatch()

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      dispatch(transportHome(homeRef.current.getBoundingClientRect().top))
    })
  },[])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div ref={homeRef} id='home' className='transportHeroSec w-full h-screen p-[1px] px-2 md:px-[40px] lg:px-[70px]'>
        <Navbar />
        <div data-aos="fade-up" data-aos-duration="1000" className='w-full md:w-[60%] lg:w-[48%] mt-[110px] md:mt-[140px] lg:mt-[140px]'>
          <h1 className='text-white text-[30px] md:text-[40px] lg:text-[56px] leading-9 font-[600] md:leading-[50px] lg:leading-[70px]'>Quality Transport, Every Mile Covered</h1>
          <p className='text-white text-[20px] mt-5 md:tracking-wide text-justify'>Al Hamd Transport offers dependable, efficient, and safe transportation across cities. With professional drivers, we prioritize customer comfort, reliability, and punctuality on every trip.</p>
          <button className='bg-[rgb(236,26,35)] hover:bg-[rgb(248,66,75)] mt-3 text-white rounded cursor-pointer px-3 py-2'><a href="#transportAbout">Read More</a></button>
        </div>
      </div>
    </>
  )
}

export default HeroSection