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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWySN6qL3sS9OwjTm5UjYnHiqzZqAU_WjFw&s",
            heading1: "Grand Opening of Yusen Logistics",
            description: "Discover the highlights of our logistics ceremony celebrating innovation and excellence. Stay informed about industry advancements and network insights shaping the future of supply chain management",
        },
        {
            image: "https://www.wha-group.com/Uploads/elFinder/news_activity/companynews/2023/09/wha-group-wha-mega-logistics-km-23.jpg",
            heading1: "WHA Group Holds Stone Laying Ceremony ",
            description: "Discover the highlights of our logistics ceremony celebrating innovation and excellence. Stay informed about industry advancements and network insights shaping the future of supply chain management",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZYHwGYkcfDJ0tngZ1QAJbvft787mqx6irA&s",
            heading1: "Institute of Transport and Logistics",
            description: "Discover the highlights of our logistics ceremony celebrating innovation and excellence. Stay informed about industry advancements and network insights shaping the future of supply chain management",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWySN6qL3sS9OwjTm5UjYnHiqzZqAU_WjFw&s",
            heading1: "Grand Opening of Yusen Logistics",
            description: "Discover the highlights of our logistics ceremony celebrating innovation and excellence. Stay informed about industry advancements and network insights shaping the future of supply chain management",
        },
        {
            image: "https://www.wha-group.com/Uploads/elFinder/news_activity/companynews/2023/09/wha-group-wha-mega-logistics-km-23.jpg",
            heading1: "WHA Group Holds Stone Laying Ceremony ",
            description: "Discover the highlights of our logistics ceremony celebrating innovation and excellence. Stay informed about industry advancements and network insights shaping the future of supply chain management",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZYHwGYkcfDJ0tngZ1QAJbvft787mqx6irA&s",
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