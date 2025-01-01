import React, { useEffect, useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
// import Sidebar from './Sidebar';

const Navbar1 = () => {
    const [checkMenu, setCheckMenu] = useState(false)

    useEffect(() => {
        if (checkMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [checkMenu]);

    return (
        <div className='w-full h-[100px] hidden lg:flex justify-between items-center py-[6px] md:px-[25px] pl-1 pr-2 lg:px-[100px] sticky top-0 left-0 bg-white z-20'>

            <div className='flex items-center'>

                <div className='w-[90px] cursor-pointer'>
                    <a href="/">
                        <img className='w-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/logoTransport_gwchby.png" alt="" />
                    </a>
                </div>

                <h1 className='hidden sm:block sm:text-2xl lg:3xl sm:ml-5 font-[600] text-[rgb(226,31,47)] text-nowrap'>Al Hamd Logistics</h1>
            </div>

            <div className='flex hidden lg:flex items-center'>
                <div>
                    <div className='text-[rgb(226,31,47)]'><FaPhone /></div>
                    <p className='mt-1'>Call Us Anytime</p>
                    <p>+923224326125</p>
                </div>
                <div className='ml-5'>
                    <div className='text-[rgb(226,31,47)]'><FiClock /></div>
                    <p className='mt-1'>Opening Time</p>
                    <p>09:00 - 06:00</p>
                </div>
                <div className='ml-5'>
                    <div className='text-[rgb(226,31,47)]'><MdEmail /></div>
                    <p className='hover:text-red-500 transition duration-300'><a href="https://mail.google.com/mail/?view=cm&fs=1&to=ahl@alhamdges.com.pk" target="_blank">ahl@alhamdges.com.pk</a></p>
                    <p className='hover:text-red-500 transition duration-300'><a href="https://mail.google.com/mail/?view=cm&fs=1&to=wasimsalim@alhamdges.com.pk" target="_blank">wasimsalim@alhamdges.com.pk</a></p>
                </div>
            </div>

        </div>
    )
}

export default Navbar1