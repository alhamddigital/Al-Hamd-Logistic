import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Calculation = () => {
    const [count, setcount] = useState(false)
    return (
        <>
            <div className='transportCalculation w-full min-h-[60vh] h-auto '>
                <div className='w-full min-h-[60vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[45px] lg:px-[100px]'>
                    <div className='flex justify-center items-center mt-5 sm:mt-0 flex-col'>
                        <ScrollTrigger onEnter={() => setcount(true)} onExit={() => setcount(false)}>
                            <h1 className='text-white text-[50px] md:text-[60px] lg:text-[60px] font-[600] flex items-center '>{count && <CountUp start={0} end={30000} duration={1.5} delay={0} />}<span className='text-2xl font-[700]'>Sqft</span></h1>
                        </ScrollTrigger>
                        <h1 className='text-white font-[600] text-xl'>PTC Storage</h1>
                    </div>
                    <div className='flex justify-center items-center mt-5 sm:mt-0 flex-col'>
                        <ScrollTrigger onEnter={() => setcount(true)} onExit={() => setcount(false)}>
                            <h1 className='text-white text-[50px] md:text-[60px] lg:text-[60px] font-[600] flex items-center'>{count && <CountUp start={0} end={25000} duration={1.5} delay={0} />}<span className='text-2xl font-[700]'>Sqft</span></h1>
                        </ScrollTrigger>
                        <h1 className='text-white font-[600] text-xl'>Airlift (Grocery)</h1>
                    </div>
                    <div className='flex justify-center items-center mt-5 sm:mt-0 flex-col'>
                        <ScrollTrigger onEnter={() => setcount(true)} onExit={() => setcount(false)}>
                            <h1 className='text-white text-[50px] md:text-[60px] lg:text-[60px] font-[600] flex items-center'>{count && <CountUp start={0} end={45000} duration={1.5} delay={0} />}<span className='text-2xl font-[700]'>Sqft</span></h1>
                        </ScrollTrigger>
                        <h1 className='text-white font-[600] text-xl'>IFFCO-PAKISTAN</h1>
                    </div>
                    <div className='flex justify-center items-center mt-5 sm:mt-0 flex-col'>
                        <ScrollTrigger onEnter={() => setcount(true)} onExit={() => setcount(false)}>
                            <h1 className='text-white text-[50px] md:text-[60px] lg:text-[60px] font-[600] flex items-center'>{count && <CountUp start={0} end={39000} duration={1.5} delay={0} />}<span className='text-2xl font-[700]'>Sqft</span></h1>
                        </ScrollTrigger>
                        <h1 className='text-white font-[600] text-xl'>MAERSK</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculation