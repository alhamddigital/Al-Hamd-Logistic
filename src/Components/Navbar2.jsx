import React from 'react'
import { useEffect, useState } from 'react'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'

const Navbar2 = () => {
  const {
    transportHomeTop,
    transportServiceTop,
    transportAboutTop,
    logisticsNewsTop,
    transportClientsTop,
    transportContactTop
  } = useSelector(state => state.logistic)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setactiveLink] = useState('home')
  const [checkSidebar, setSidebar] = useState(false)

  useEffect(() => {
    if (transportHomeTop === 0 || transportHomeTop < window.innerHeight) {
      setactiveLink('Home')
    }

    if (transportServiceTop < window.innerHeight) {
      setactiveLink('Services')
    }

    if (transportAboutTop < window.innerHeight) {
      setactiveLink('About')
    }

    if (logisticsNewsTop < window.innerHeight) {
      setactiveLink('News')
    }

    if (transportClientsTop < window.innerHeight) {
      setactiveLink('Clients')
    }

    if (transportContactTop < window.innerHeight) {
      setactiveLink('Contact')
    }
  }, [
    transportHomeTop,
    transportServiceTop,
    transportAboutTop,
    transportContactTop
  ])

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
    if (checkSidebar === true) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "auto"
    }
  }, [checkSidebar])

  const array = [
    {
      list: "Home",
      path: "/"
    },
    {
      list: "Services",
      path: "/#services"
    },
    {
      list: "About",
      path: "/#about"
    },
    {
      list: "News",
      path: "/#news"
    },
    {
      list: "Clients",
      path: "/#clients"
    },
    {
      list: "Contact",
      path: "/#contact"
    },
    {
      list: "Gallery",
      path: "/gallery"
    },
  ]

  console.log(activeLink, "setactiveLink")

  return (
    <>
      <div
        className={`w-full h-[60px] bg-white md:bg-[rgb(31,66,93)] z-20 flex justify-between items-center pr-3 md:px-[40px] lg:px-[100px] sticky top-0 lg:top-[100px] left-0`}
      >

        <div className='flex items-center block md:hidden'>
          <div className='w-[70px] cursor-pointer'>
            <a href="/">
              <img className='w-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/logoTransport_gwchby.png" alt="" />
            </a>
          </div>
          <h1 className='hidden sm:block sm:text-2xl lg:3xl sm:ml-5 font-[600] text-[rgb(226,31,47)] text-nowrap'>Al Hamd Logistics</h1>
        </div>

        <div className='flex items-center hidden md:flex'>
          <div className='w-[40px] h-[40px] cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='watsapp'>
            <a href="https://wa.me/+923224326125" target="_blank" rel="noopener noreferrer">
              <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857807/watsapp_pyr5pq.png" alt="" />
            </a>
          </div>
          <div className='w-[40px] h-[40px] ml-[] cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='instagram'>
            <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/linkedin_egzsvk.png" alt="" />
          </div>
          <a target='_blank' href="https://www.facebook.com/p/Al-Hamd-General-Engineering-Services-Lahore-100065319076543/">
            <div className='w-[40px] h-[40px] cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='facebook'>
              <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/facebook_oozfbi.png" alt="" />
            </div>
          </a>
          <div className='w-[35px] h-[35px] ml-1 cursor-pointer flex justify-center items-center overflow-hidden text-white text-2xl' title='linkedin'>
            <img className='w-full h-full' src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/instagram_ygvf9t.png" alt="" />
          </div>
        </div>

        {/* ---------------------------------------Links---------------------------------------- */}

        <ul className='w-[450px] justify-between hidden md:flex'>
          {
            array.map((e, i) => {
              return (
                <li onClick={() => setactiveLink(e.list)} className={`cursor-pointer duration-500 text-white py-[6px] group rounded relative`}>
                  <a href={e.path}>{e.list}</a>
                  <div
                    className={`w-0 h-[4px] ${activeLink == `${e.list}` ? 'w-full' : 'w-0'
                      } group-hover:w-full duration-700 bg-red-500 absolute top-9 left-0`}></div>
                </li>
              )
            })
          }
        </ul>


        <div
          onClick={handleHamburger}
          className='text-3xl cursor-pointer md:hidden'
        >
          <HiOutlineBars3 />
        </div>
        
      </div>




      {/* ------------------------------Sidebar-------------------------------- */}

      <div
        onClick={handleOverlay}
        className={`overlay w-full h-screen z-20 bg-[rgba(0,0,0,0.6)] ${checkSidebar ? 'visible' : 'invisible'
          } fixed top-0 left-0 cursor-crosshair`}
      >
        <div className='w-[280px] sm:w-[300px] h-screen bg-[rgb(31,66,93)] absolute top-0 right-0 cursor-auto'>
          <div
            onClick={handleCross}
            className='w-[35px] h-[35px] absolute top-2 right-2 rounded-full text-black flex justify-center items-center text-2xl cursor-pointer bg-white hover:bg-black hover:text-white'
          >
            <RxCross2 />
          </div>
          <h1 className='ml-2 text-xl mt-4 text-white'>Al Hamd Logistics</h1>

          <ul className='px-1 mt-3'>
            {
              array.map((e, i) => {
                return (
                  <li
                    key={i}
                    onClick={handleCross}
                    className={`flex items-center mt-1 ${activeLink === `${e.list}` ? 'bg-red-500 text-black' : ''
                      } cursor-pointer hover:bg-red-500 group p-1`}
                  >
                    <a href={e.path} className='flex items-center text-white w-full'>
                      {e.list}
                    </a>
                  </li>

                )
              })
            }
          </ul>

        </div>
      </div>
    </>
  )
}

export default Navbar2
