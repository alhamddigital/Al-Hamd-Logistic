import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { logisticsNews } from '../Redux/Slice';

const News = () => {
    const dispatch=useDispatch()
    const newsRef=useRef()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            dispatch(logisticsNews(newsRef.current.getBoundingClientRect().top));
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                }
            }
        ]
    };

    const array = [
        {
            image: "https://res.cloudinary.com/djpvajewe/image/upload/v1736157354/ribbon2_zzsxve.jpg",
            heading1: "Grand Opening of Yusen Logistics",
            description: "Discover the highlights of our logistics ceremony celebrating innovation and excellence. Stay informed about industry advancements and network insights shaping the future of supply chain management",
        },
        {
            image: "https://res.cloudinary.com/djpvajewe/image/upload/v1736157352/869A8DC8-BA51-4D94-9A3B-AB0E2986BECD_v9kq27.png",
            heading1: "WHA Group Holds Stone Laying Ceremony ",
            description: "Discover the highlights of our logistics ceremony celebrating innovation and excellence. Stay informed about industry advancements and network insights shaping the future of supply chain management",
        },
        {
            image: "https://res.cloudinary.com/djpvajewe/image/upload/v1736157357/shutter1_f21jnt.png",
            heading1: "Institute of Transport and Logistics",
            description: "Discover the highlights of our logistics ceremony celebrating innovation and excellence. Stay informed about industry advancements and network insights shaping the future of supply chain management",
        }
    ]
    return (
        <div ref={newsRef} id='news' className="w-full min-h-screen bg-[rgb(31,66,93)] px-3 py-9 sm:px-[40px] md:px-[40px] lg:px-[100px] sm:py-[60px]">
            <h1 className="text-center text-white text-2xl sm:text-4xl font-semibold">
                News & Insights
            </h1>
            <div className="slider-container mt-9 overflow-hidden">
                <Slider {...settings}>
                    {
                        array.map((e, i) => {
                            return (
                                <>
                                    <div className='px-2 md:px-9 flex justify-center items-center flex-col'>
                                        <div className='w-[300px] h-[190px] lg:w-[400px] lg:h-[300px]'>
                                            <img className='w-full h-full' src={e.image} alt="" />
                                        </div>
                                        <h1 className='text-white self-start text-xl font-[600] mt-5'>{e.heading1}</h1>
                                        <p className='text-white text-justify mt-5'>{e.description}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default News