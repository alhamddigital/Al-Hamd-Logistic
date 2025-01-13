import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { transportService } from "../Redux/Slice";

const Service = () => {
  const dispatch = useDispatch();


  const serviceRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      dispatch(
        transportService(serviceRef.current.getBoundingClientRect().top)
      );
    });
  }, []);

  const array = [
    {
      image:
        "https://res.cloudinary.com/djpvajewe/image/upload/v1733469584/storage_warehouse_fvpc4h.jpg",
      name: "Warehousing Services",
      description: "Optimized space utilization for efficient stock management, ensuring safety, organization, and maximum storage capacity..",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/warehouseman-checking-delivery-stock-warehouse-260nw-2409869337.jpg",
      name: "Inventory Management",
      description: "Streamlined inventory control with real-time tracking, automated systems, stock audits, and optimized storage solutions.",
    },
    {
      image:
        "https://res.cloudinary.com/djpvajewe/image/upload/v1733723249/forklist1_dlb0et.jpg",
      name: "Material Handling",
      description: "Efficient material movement using forklifts, cranes, conveyors, ensuring safety and productivity in operations.",
    },
    {
      image:
      "https://res.cloudinary.com/djpvajewe/image/upload/v1734422922/WhatsApp_Image_2024-12-17_at_11.27.30_wiawht.jpg",
      name: "Transport Solutions",
      description: "Comprehensive transport solutions offering efficient, secure, and timely delivery for both domestic and international shipments",
    },
    {
      image:
      "https://res.cloudinary.com/djpvajewe/image/upload/v1734422943/WhatsApp_Image_2024-12-17_at_12.04.21_fmuy44.jpg",
      name: "Security aur Monitoring",
      description: "24/7 security and monitoring with CCTV, access control, and advanced systems to protect inventory and assets",
    },
    {
      image:
        "https://res.cloudinary.com/djpvajewe/image/upload/v1734423197/BEB14C12-7D0E-448B-9A04-5905847751EA_h82fsx.png",
      name: "Value-added Services",
      description: "Customized value-added services including labeling, packaging, assembly, and quality inspection to enhance product value and presentation",
    },
  ];

  return (
    <>
      <div
        ref={serviceRef}
        id="services"
        className="w-full min-h-screen py-9 lg:py-[50px] bg-[rgb(245,245,245)] overflow-hidden"
      >
        <h1 className="text-3xl font-[500] text-center">Our Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-9 lg:px-[90px] gap-9">
          {array.map((e, i) => {
            return (
              <>
                <div className="bg-white p-5 group">
                  <div className="w-full h-[250px] overflow-hidden">
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
                      <a href="#about">Read More</a>
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

export default Service;
