import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { transportExplore } from "../Redux/Slice";
// import { useDispatch } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
//   const dispatch = useDispatch();
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();
  const card4 = useRef();
  const card5 = useRef();
  const card6 = useRef();

  const exploreRef = useRef();

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       dispatch(
//         transportExplore(exploreRef.current.getBoundingClientRect().top)
//       );
//     });
//   }, []);

  useEffect(() => {
    gsap.fromTo(
      card1.current,
      { x: "-120%", y: "100%" }, // Start from the left side (offscreen)
      {
        x: "0%",
        y: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card1.current, // Trigger for the animation
          start: "top 210%", // When the top of the trigger hits 80% of the viewport
          end: "top 100%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
          markers: false,
        },
      }
    );
    gsap.fromTo(
      card2.current,
      { x: "-240%", y: "100%" }, // Start from the left side (offscreen)
      {
        x: "0%",
        y: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card2.current, // Trigger for the animation
          start: "top 170%", // When the top of the trigger hits 80% of the viewport
          end: "top 100%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
          markers: false,
        },
      }
    );
    gsap.fromTo(
      card3.current,
      { x: "-360%", y: "100%" }, // Start from the left side (offscreen)
      {
        x: "0%",
        y: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card3.current, // Trigger for the animation
          start: "top 150%", // When the top of the trigger hits 80% of the viewport
          end: "top 100%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
          markers: false,
        },
      }
    );

    gsap.fromTo(
      card4.current,
      { x: "460%", y: "100%" }, // Start from the left side (offscreen)
      {
        x: "0%",
        y: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card4.current, // Trigger for the animation
          start: "top 190%", // When the top of the trigger hits 80% of the viewport
          end: "top 100%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
          markers: false,
        },
      }
    );
    gsap.fromTo(
      card5.current,
      { x: "340%", y: "100%" }, // Start from the left side (offscreen)
      {
        x: "0%",
        y: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card5.current, // Trigger for the animation
          start: "top 170%", // When the top of the trigger hits 80% of the viewport
          end: "top 100%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
          markers: false,
        },
      }
    );
    gsap.fromTo(
      card6.current,
      { x: "200%", y: "100%" }, // Start from the left side (offscreen)
      {
        x: "0%",
        y: "0%", // Move to its original position
        scrollTrigger: {
          trigger: card6.current, // Trigger for the animation
          start: "top 150%", // When the top of the trigger hits 80% of the viewport
          end: "top 100%", // When the top of the trigger hits 50% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          toggleActions: "play none none reverse",
          once: false,
          markers: false,
        },
      }
    );
  }, []);

  const array = [
    {
      image:
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732857807/explore6_ymvxpr.jpg",
      name: "Warehouse Solutions",
      description: "Efficient warehouse solutions for streamlined inventory management and reliable distribution services",
      reference: card1,
    },
    {
      image:
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732857807/explore5_qtly8q.jpg",
      name: "Custom Clearnace",
      description: "Expert custom clearance services ensuring smooth import/export compliance and timely delivery",
      reference: card2,
    },
    {
      image:
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732857807/explore4_ir9ed7.jpg",
      name: "Train Freight",
      description: "Efficient and reliable train freight services for cost-effective, timely deliveries",
      reference: card3,
    },
    {
      image:
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732857807/explore1_ptz3pd.jpg",
      name: "Air Freight",
      description: "Fast, reliable, and secure air freight services for global, time-sensitive shipments",
      reference: card4,
    },
    {
      image:
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732857807/explore2_g8gkli.jpg",
      name: "Ocean Freight",
      description: "Reliable ocean freight solutions for efficient global cargo transportation and logistics",
      reference: card5,
    },
    {
      image:
        "https://res.cloudinary.com/djpvajewe/image/upload/v1732857807/explore3_nuuhmw.jpg",
      name: "Road Freight",
      description: "Cost-effective road freight services for secure and timely domestic cargo delivery",
      reference: card6,
    },
  ];

  return (
    <>
      <div
        ref={exploreRef}
        id="transportExplore"
        className="w-full min-h-screen py-9 lg:py-[50px] bg-[rgb(245,245,245)] overflow-hidden"
      >
        <h1 className="text-3xl font-[400] text-center">Explore Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 lg:mt-9 lg:px-[90px] gap-9">
          {array.map((e, i) => {
            return (
              <>
                <div ref={e.reference} className="bg-white p-5 group">
                  <div className="w-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 duration-500"
                      src={e.image}
                      alt=""
                    />
                  </div>
                  <h1 className="text-[rgb(6,3,21)] text-xl font-[600] mt-5">
                    {e.name}
                  </h1>
                  <p className="mt-2 text-justify">
                    {e.description}
                  </p>

                  <div className="w-[150px] overflow-hidden cursor-pointer h-[35px] mt-3 flex justify-start items-center rounded-tr-full rounded-br-full relative">
                    <div className=" w-[40px] h-[35px] z-10 relative cursor-pointer flex justify-center bg-[rgb(255,62,65)] rounded-tr-full rounded-br-full items-center text-white">
                      <FaArrowRight />
                    </div>
                    <div className="group-hover:left-[26px] w-[120px] h-[35px] absolute top-0 -left-[190px] duration-500 rounded-tr-full rounded-br-full text-white flex justify-center items-center bg-[rgb(255,62,65)]">
                      <a href="#transportAbout">Read More</a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

        </div>
      </div>
    </>
  );
};

export default Explore;
