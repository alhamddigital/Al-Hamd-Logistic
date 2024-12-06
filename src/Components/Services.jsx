import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from "react-redux";
import { transportServices } from "../Redux/Slice";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const dispatch = useDispatch();
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();
  const card4 = useRef();
  const card5 = useRef();
  const card6 = useRef();

  const transportRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      dispatch(
        transportServices(transportRef.current.getBoundingClientRect().top)
      );
    });
  }, []);

  useEffect(() => {
    if(window.innerWidth >= 1024){
    gsap.fromTo(
      card1.current,
      { x: "-300%" }, // Start from the left side (offscreen)
      {
        x: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card1.current, // Trigger for the animation
          start: "top 50%", // When the top of the trigger hits 80% of the viewport
          end: "top 90%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
        },
      }
    );
    gsap.fromTo(
      card2.current,
      { x: "-300%" }, // Start from the left side (offscreen)
      {
        x: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card2.current, // Trigger for the animation
          start: "top 70%", // When the top of the trigger hits 80% of the viewport
          end: "top 80%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
        },
      }
    );
    gsap.fromTo(
      card3.current,
      { x: "-300%" }, // Start from the left side (offscreen)
      {
        x: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card3.current, // Trigger for the animation
          start: "top 90%", // When the top of the trigger hits 80% of the viewport
          end: "top 70%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
        },
      }
    );

    gsap.fromTo(
      card4.current,
      { x: "300%" }, // Start from the left side (offscreen)
      {
        x: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card4.current, // Trigger for the animation
          start: "top 90%", // When the top of the trigger hits 80% of the viewport
          end: "top 40%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
        },
      }
    );
    gsap.fromTo(
      card5.current,
      { x: "300%" }, // Start from the left side (offscreen)
      {
        x: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card5.current, // Trigger for the animation
          start: "top 80%", // When the top of the trigger hits 80% of the viewport
          end: "top 40%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
        },
      }
    );
    gsap.fromTo(
      card6.current,
      { x: "300%" }, // Start from the left side (offscreen)
      {
        x: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card6.current, // Trigger for the animation
          start: "top 70%", // When the top of the trigger hits 80% of the viewport
          end: "top 40%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
        },
      }
    );
   }
  }, []);



  const array = [
    {
      image:"https://res.cloudinary.com/djpvajewe/image/upload/v1732857808/service1_kb69xn.png",
      name: "Full Truckload",
      description:"Full Truckload or Full Container Load shipment services Outbound from Lahore, Karachi & Islamabad at market rates.",
      reference:card1,
      x:"-300%",
      start: "top 50%",
      end: "top 90%",
    },
    {
      image:"https://res.cloudinary.com/djpvajewe/image/upload/v1732857808/service2_oedr5v.png",
      name: "Loose Cargo",
      description:"Door to Door Loose Cargo Transportation on weight or volume basis at competitive rates, with great care, between Lahore and Karachi.",
      reference:card2,
      x:"-300%",
      start: "top 70%",
      end: "top 80%",
    },
    {
      image:"https://res.cloudinary.com/djpvajewe/image/upload/v1732857808/service3_rhl8qd.png",
      name: "Load Matching",
      description:"We Match LCL Cargo at affordable rates on long hual, book your sizeable load/cargo in sharing mode (LCL) in 17ft or 20Ft containers, Safety guaranteed.",
      reference:card3,
      x:"-300%",
      start: "top 90%",
      end: "top 70%",
    },
    {
      image:"https://res.cloudinary.com/djpvajewe/image/upload/v1732857808/service4_vdjumt.png",
      name: "Car Carrier",
      description:"Ship your car between Lahore, Karachi, Faisalabad,Peshawar and Islamabad at market competitive rates through our wide network of trusted partners.",
      reference:card4,
      x:"300%",
      start: "top 90%",
      end: "top 40%",
    },
    {
      image:"https://res.cloudinary.com/djpvajewe/image/upload/v1732857808/service5_kemr3k.png",
      name: "Premium Towing",
      description:"Specialized 20Ft Containerized Towing Service to move your Premium SUV's and Sports Cars with full safety between Lahore, Karachi and Islamabad.",
      reference:card5,
      x:"300%",
      start: "top 80%",
      end: "top 40%",
    },
    {
      image:
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732857808/service6_bm3iyk.png",
      name: "Tow Truck",
      description:"Mobilize a Tow Truck in Lahore, Islamabad and Karachi within minutes to service your borken down vehicle.",
      reference:card6,
      x:"300%",
      start: "top 70%",
      end: "top 40%",
    },
  ];

//   useEffect(() => {
//     const cards = document.querySelectorAll(".card");

//     cards.forEach((card, index) => {
//       const { x, start, end } = array[index];

//       gsap.fromTo(
//         card,
//         { x: x },
//         {
//           x: "0%",
//           scrollTrigger: {
//             trigger: card,
//             start: start,
//             end: end,
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, [array])

  return (
    <>
      <div
        ref={transportRef}
        id="services"
        className="w-full min-h-screen py-9 overflow-hidden"
      >
        <h1 className="text-center text-3xl font-[600]">Our Services</h1>
        <div className="w-[100px] mx-auto h-[4px] mt-3 bg-red-500"></div>

        {/* --------------------------Grid-------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-1 gap-x-9 gap-y-[80px] py-[60px] lg:py-[70px] px-3 lg:px-[90px]">
          {array.map((e, i) => {
            return (
                <div key={i} ref={e.reference} className="customShadow group bg-white cursor-pointer flex justify-center items-center flex-col px-2 lg:px-4 pb-[120px] rounded-2xl border border-[rgb(223,223,223)]">
                  <div className="w-[120px] h-[120px] duration-1000 group-hover:rotate-[360deg] rounded-full p-5 bg-white -mt-[60px]">
                    <img className="w-full h-full rounded-full object-cover" src={e.image} alt=""/>
                  </div>
                  <div className="flex items-center relative">
                    <div className="w-[30px] h-[30px] border-b-[5px] border-l-[5px]  border-red-500 absolute top-[40px] group-hover:rotate-[90deg] group-hover:top-[25px] duration-700 -left-5"></div>
                    <h1 className="text-[rgb(30,30,30)] text-xl mt-9 font-[500]">{e.name}</h1>
                    <div className="w-[30px] h-[30px] border-t-[5px] border-r-[5px]  border-red-500 group-hover:rotate-[90deg] group-hover:top-[43px] duration-700 absolute top-6 -right-5"></div>
                  </div>
                  <p className="text-center mt-9 leading-7">{e.description}</p>
                </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
