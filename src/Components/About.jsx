import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDispatch } from 'react-redux';
import { transportAbout } from '../Redux/Slice';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const dispatch = useDispatch()
    const left = useRef()
    const right = useRef()
    const aboutRef = useRef()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            dispatch(transportAbout(aboutRef.current.getBoundingClientRect().top))
        })
    }, [])

    useEffect(() => {

        
        gsap.fromTo(left.current,
            { x: '-100%' },
            {
                x: '0%',
                scrollTrigger: {
                    trigger: left.current,
                    start: 'top 90%',
                    end: 'top 40%',
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                    once: false,
                },
            }
        );

        gsap.fromTo(right.current,
            { x: '100%' }, 
            {
                x: '0%', 
                scrollTrigger: {
                    trigger: right.current,
                    start: 'top 90%', 
                    end: 'top 40%', 
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                    once: false,
                },
            }
        );
    }, []);

    return (
        <>
            <div ref={aboutRef} id='about' className='w-full min-h-screen px-2 lg:px-[90px] py-9 lg:py-[40px] overflow-hidden'>
                <h1 className='text-[rgb(255,94,20)] text-3xl text-center font-[600]'>About Us</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-[60px] mt-5 lg:mt-9'>

                    <div ref={left} className='w-full md:h-[590px] relative'>
                        <img className='w-full h-full' src="https://pluginspoint.com/geoport/wp-content/uploads/2020/03/s_about_img.jpg" alt="" />
                        <div className='absolute bottom-9 right-9'>
                            <img src="https://pluginspoint.com/geoport/wp-content/uploads/2020/03/about_exp_bg.png" alt="" />
                            <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center flex-col'>
                                <h1 className='text-white text-5xl font-[700] text-center'>10</h1>
                                <h1 className='text-white text-xl text-center mt-2'>Years Experience</h1>
                            </div>
                        </div>
                    </div> 

                    <div ref={right} className='customShadow rounded-xl p-4'>
                        <h1 className='text-[rgb(0,29,103)] text-3xl md:text-4xl lg:text-6xl font-[600]'>CONNECTING AIR, ROADS AND SEAS</h1>
                        <p className='text-[rgb(36,75,117)] mt-3 md:mt-5 text-2xl font-[100]'>Vehicles traveling on these networks may include automobiles, buses, trains, trucks</p>

                        <div className='mt-5'>
                            <h1 className='text-[rgb(255,94,20)] text-2xl font-[600]'>Our Mission</h1>
                            <p className='text-[18px]'>Our mission is to deliver dependable, timely, and cost-effective transportation services prioritizing safety, customer satisfaction, and innovation for seamless journeys.</p>
                            <h1 className='text-[rgb(255,94,20)] mt-3 text-2xl font-[600]'>Our Values</h1>
                            <p className='text-[18px]'>Our core values are integrity, safety, and excellence. We commit to customer focus, environmental responsibility, and continuous improvement for superior transport experiences daily.</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About