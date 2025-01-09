import React, { useEffect, useState } from 'react';
import { RxCross1 } from "react-icons/rx";

const GalleryComp = () => {
  const [image, setImage] = useState("");

  const handleOverlay = (event) => {
    if (event.target.classList.contains("overlay")) {
      setImage("");
    }
  };

  useEffect(()=>{
    if(image != ""){
      document.body.style.overflow="hidden"
    }else{
      document.body.style.overflow="auto"
    }
  },[image])

  const array = [
    "https://res.cloudinary.com/djpvajewe/image/upload/v1733723249/forklist1_dlb0et.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1733722147/IMG_20241205_133057_mqnbqp.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1733722144/IMG_20241205_141547_ceni0m.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1733722143/IMG_20241205_125308_ubaaxu.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1733722143/IMG_20241205_125053_luhixg.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1733722143/IMG_20241205_141538_oi3kiq.jpg",

    // WareHouse1
    "https://res.cloudinary.com/djpvajewe/image/upload/v1733469584/storage_warehouse_fvpc4h.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422955/WhatsApp_Image_2024-12-17_at_12.04.26_i1io0u.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422954/WhatsApp_Image_2024-12-17_at_12.04.26_2_rsn2fu.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422953/WhatsApp_Image_2024-12-17_at_12.04.26_1_u9imay.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422953/WhatsApp_Image_2024-12-17_at_12.04.25_vvfizy.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422952/WhatsApp_Image_2024-12-17_at_12.04.25_1_ztgx0r.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422951/WhatsApp_Image_2024-12-17_at_12.04.24_qdm9kj.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422950/WhatsApp_Image_2024-12-17_at_12.04.24_2_rpaqu5.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422948/WhatsApp_Image_2024-12-17_at_12.04.23_souair.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422947/WhatsApp_Image_2024-12-17_at_12.04.23_2_vxcrn2.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422945/WhatsApp_Image_2024-12-17_at_12.04.22_m95hcr.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422945/WhatsApp_Image_2024-12-17_at_12.04.22_2_ohvf9f.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422944/WhatsApp_Image_2024-12-17_at_12.04.22_1_wxkgqp.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422943/WhatsApp_Image_2024-12-17_at_12.04.21_fmuy44.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422942/WhatsApp_Image_2024-12-17_at_12.04.21_1_gppspe.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422940/WhatsApp_Image_2024-12-17_at_12.04.05_nutqeb.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422939/WhatsApp_Image_2024-12-17_at_12.04.05_1_ux1fhr.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422939/WhatsApp_Image_2024-12-17_at_12.04.04_rjd1r0.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422938/WhatsApp_Image_2024-12-17_at_12.04.04_2_d6deyf.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422937/WhatsApp_Image_2024-12-17_at_12.04.04_1_vxnzeb.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422936/WhatsApp_Image_2024-12-17_at_12.04.03_fg5x3c.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422935/WhatsApp_Image_2024-12-17_at_12.04.01_2_bculpo.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422935/WhatsApp_Image_2024-12-17_at_12.04.03_2_vlaktx.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422934/WhatsApp_Image_2024-12-17_at_12.04.03_1_qop4eu.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422933/WhatsApp_Image_2024-12-17_at_12.04.02_j5qkoo.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422932/WhatsApp_Image_2024-12-17_at_12.04.01_izc5ej.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422931/WhatsApp_Image_2024-12-17_at_12.04.01_1_hesmgy.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422930/WhatsApp_Image_2024-12-17_at_12.04.02_1_g1k81k.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422929/WhatsApp_Image_2024-12-17_at_12.04.00_1_h2ljsh.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422929/WhatsApp_Image_2024-12-17_at_12.04.00_kalsfb.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422927/WhatsApp_Image_2024-12-17_at_12.04.00_2_wd0lok.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422926/forklist1_dc2tyx.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422925/WhatsApp_Image_2024-12-17_at_12.03.59_uu8wsa.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422924/WhatsApp_Image_2024-12-17_at_12.03.59_1_jckllz.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422924/WhatsApp_Image_2024-12-17_at_12.03.59_2_rajuml.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1734422923/WhatsApp_Image_2024-12-17_at_12.03.58_gl1qpr.jpg",

    "https://res.cloudinary.com/djpvajewe/image/upload/v1736157354/ribbon2_zzsxve.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1736157352/dua1_ihwezs.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1736157352/dua3_ovlb7f.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1736157352/dua2_ctepm8.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1736157352/869A8DC8-BA51-4D94-9A3B-AB0E2986BECD_v9kq27.png",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1736157356/ribbon2_jd7rgb.png",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1736157357/sitting1_bpmvvw.jpg",
    "https://res.cloudinary.com/djpvajewe/image/upload/v1736157357/shutter1_f21jnt.png",
];

  return (
    <div className="w-full h-max px-3 sm:px-5 mt-5 sm:mt-9">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {array.map((url, index) => (
          <div
            onClick={() => setImage(url)}
            key={index}
            className="w-full h-[300px] sm:h-[400px] cursor-pointer relative group"
          >
            <img
              className="w-full h-full object-cover"
              src={url} // Directly use the URL here
              alt=""
            />
            <div className='w-full h-full absolute top-0 left-0 bg-[rgb(0,0,0,0.7)] scale-[0] group-hover:scale-[1] transition-all duration-700 invisible group-hover:visible cursor-crosshair flex justify-center items-center'>
                <div className='w-[80px] h-[80px] cursor-pointer bg-red-500 duration-300 rounded-full text-white flex justify-center items-center font-[600] hover:bg-blue-500'>View</div>
            </div>
          </div>
        ))}
      </div>

      {image && (
        <div
          onClick={handleOverlay}
          className="overlay w-full flex justify-center items-center h-screen fixed top-0 left-0 z-30 cursor-crosshair bg-[rgb(0,0,0,0.8)]"
        >
          <div className="w-[90%] md:w-[80%] lg:w-[70%] lg:h-[85vh] relative cursor-auto">
            <div
              onClick={() => setImage("")}
              className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] hover:bg-black hover:text-white duration-300 text-xl absolute -right-2 sm:-right-4 -top-5 bg-white rounded-full flex justify-center items-center cursor-pointer"
            >
              <RxCross1 />
            </div>
            <img className="w-full h-full" src={image} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComp;
