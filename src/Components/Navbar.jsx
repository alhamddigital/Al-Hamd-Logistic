import React from 'react'
import { useEffect, useState } from 'react'
import { HiOutlineBars3 } from 'react-icons/hi2'
// import { useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import { IoMdHome } from "react-icons/io";

const Navbar = () => {
//   const {
//     transportHomeTop,
//     transportServicesTop,
//     transportAboutTop,
//     transportExploreTop,
//     transportContactTop
//   } = useSelector(state => state.company)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setactiveLink] = useState('home')
  const [checkSidebar, setSidebar] = useState(false)

//   useEffect(() => {
//     if (transportHomeTop === 0 || transportHomeTop < window.innerHeight) {
//       setactiveLink('home')
//     }

//     if (transportServicesTop < window.innerHeight) {
//       setactiveLink('services')
//     }

//     if (transportAboutTop < window.innerHeight) {
//       setactiveLink('about')
//     }

//     if (transportExploreTop < window.innerHeight) {
//       setactiveLink('explore')
//     }

//     if (transportContactTop < window.innerHeight) {
//       setactiveLink('contact')
//     }
//   }, [
//     transportHomeTop,
//     transportServicesTop,
//     transportAboutTop,
//     transportExploreTop,
//     transportContactTop
//   ])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleHamburger = () => {
    setSidebar(!checkSidebar)
  }

  const handleOverlay = event => {
    if (event.target.classList.contains('overlay')) {
      setSidebar(false)
    }
  }

  const handleCross = () => {
    setSidebar(false)
  }

  useEffect(() => {
    if (checkSidebar) {
      document.body.style.overflow = 'hidden'
    }
    {
      document.body.style.overflow = 'auto'
    }
  }, [checkSidebar])

  useEffect(()=>{
    if(checkSidebar){
      document.body.style.overflow="hidden"
    }
    else{
      document.body.style.overflow="auto"
    }
  },[checkSidebar])

//   console.log(transportHomeTop, 'transportHomeTop')
//   console.log(transportContactTop, 'transposrtContactTop')
  console.log(activeLink)

  return (
    <>
      <div
        className={`w-full h-[80px] bg-white z-20 ${
          isScrolled ? 'customShadow' : ''
        } fixed top-0 left-0 flex justify-between items-center pr-3 md:px-9`}
      >
        <div className='flex items-center'>
          <div className='logosAnimation w-[80px] sm:w-[80px]'>
            <a href='/transportHome'>
              <img
                className='w-full h-full cursor-pointer'
                src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/logoTransport_gwchby.png"
                alt=''
              />
            </a>
          </div>
        </div>

        <ul className='w-[450px] justify-between hidden md:flex'>
          <li
            onClick={() => setactiveLink('home')}
            className={`cursor-pointer hover:text-red-500 duration-500 ${
              activeLink == 'home' ? 'text-red-500' : ''
            } px-2 py-[6px] group rounded`}
          >
            <a href='#transportHome'>Home</a>
            <div
              className={`w-0 h-[2px] ${
                activeLink == 'home' ? 'w-full' : 'w-0'
              } group-hover:w-full duration-700 bg-red-500`}
            ></div>
          </li>
          <li
            onClick={() => setactiveLink('services')}
            className={`cursor-pointer hover:text-red-500 duration-500 ${
              activeLink == 'services' ? 'text-red-500' : ''
            } px-2 py-[6px] group rounded`}
          >
            <a href='#transportServices'>Services</a>
            <div
              className={`w-0 h-[2px] ${
                activeLink == 'services' ? 'w-full' : 'w-0'
              } group-hover:w-full duration-700 bg-red-500`}
            ></div>
          </li>
          <li
            onClick={() => setactiveLink('about')}
            className={`cursor-pointer hover:text-red-500 duration-500 ${
              activeLink == 'about' ? 'text-red-500' : ''
            } px-2 py-[6px] group rounded`}
          >
            <a href='#transportAbout'>About</a>
            <div
              className={`w-0 h-[2px] ${
                activeLink == 'about' ? 'w-full' : 'w-0'
              } group-hover:w-full duration-700 bg-red-500`}
            ></div>
          </li>
          <li
            onClick={() => setactiveLink('explore')}
            className={`cursor-pointer hover:text-red-500 duration-500 ${
              activeLink == 'explore' ? 'text-red-500' : ''
            } px-2 py-[6px] group rounded`}
          >
            <a href='#transportExplore'>Explore</a>
            <div
              className={`w-0 h-[2px] ${
                activeLink == 'explore' ? 'w-full' : 'w-0'
              } group-hover:w-full duration-700 bg-red-500`}
            ></div>
          </li>
          <li
            onClick={() => setactiveLink('contact')}
            className={`cursor-pointer hover:text-red-500 duration-500 ${
              activeLink == 'contact' ? 'text-red-500' : ''
            } px-2 py-[6px] group rounded`}
          >
            <a href='#transportContact'>Contact</a>
            <div
              className={`w-0 h-[2px] ${
                activeLink == 'contact' ? 'w-full' : 'w-0'
              } group-hover:w-full duration-700 bg-red-500`}
            ></div>
          </li>
        </ul>
        <div
          onClick={handleHamburger}
          className='text-3xl cursor-pointer md:hidden'
        >
          <HiOutlineBars3 />
        </div>
      </div>

      <div
        onClick={handleOverlay}
        className={`overlay w-full h-screen z-20 bg-[rgba(0,0,0,0.6)] ${
          checkSidebar ? 'visible' : 'invisible'
        } fixed top-0 left-0 cursor-crosshair`}
      >
        <div className='w-[280px] sm:w-[300px] h-screen bg-[rgb(249,250,251)] absolute top-0 right-0 cursor-auto'>
          <div
            onClick={handleCross}
            className='w-[35px] h-[35px] absolute top-2 right-2 rounded-full border-2 border-black text-black flex justify-center items-center text-2xl cursor-pointer hover:bg-black hover:text-white'
          >
            <RxCross2 />
          </div>
          <h1 className='ml-2 text-xl mt-4'>Al Hamd Transport</h1>

          <ul className='px-1 mt-3'>
            <li
              onClick={handleCross}
              className={`flex items-center mt-1 ${
                activeLink === 'home' ? 'bg-[rgb(255,208,6)] text-black' : ''
              } cursor-pointer hover:bg-[rgb(231,236,245)] group p-1`}
            >
              <a href='#transportHome' className='flex items-center text-black w-full'>
                Home
              </a>
            </li>
            <li
              onClick={handleCross}
              className={`flex items-center mt-1 ${
                activeLink === 'services'
                  ? 'bg-[rgb(255,208,6)] text-black'
                  : ''
              } cursor-pointer hover:bg-[rgb(231,236,245)] group p-1`}
            >
              <a href='#transportServices' className='flex items-center text-black w-full'>
                Services
              </a>
            </li>
            <li
              onClick={handleCross}
              className={`flex items-center mt-1 ${
                activeLink === 'about' ? 'bg-[rgb(255,208,6)] text-black' : ''
              } cursor-pointer hover:bg-[rgb(231,236,245)] group p-1`}
            >
              <a href='#transportAbout' className='flex items-center text-black w-full'>
                About Us
              </a>
            </li>
            <li
              onClick={handleCross}
              className={`flex items-center mt-1 ${
                activeLink === 'explore'
                  ? 'bg-[rgb(255,208,6)] text-black'
                  : ''
              } cursor-pointer hover:bg-[rgb(231,236,245)] group p-1`}
            >
              <a href='#transportExplore' className='flex items-center text-black w-full'>
                Explore Us
              </a>
            </li>
            <li
              onClick={handleCross}
              className={`flex items-center mt-1 ${
                activeLink === 'contact'
                  ? 'bg-[rgb(255,208,6)] text-black'
                  : ''
              } cursor-pointer hover:bg-[rgb(231,236,245)] group p-1`}
            >
              <a href='#transportExplore' className='flex items-center text-black w-full'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
