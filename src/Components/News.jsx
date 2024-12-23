import React from 'react'

const News = () => {
    const array=[
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWySN6qL3sS9OwjTm5UjYnHiqzZqAU_WjFw&s",
            description:"Grand Opening of Yusen Logistics"
        },
        {
            image:"https://www.wha-group.com/Uploads/elFinder/news_activity/companynews/2023/09/wha-group-wha-mega-logistics-km-23.jpg",
            description:"WHA Group Holds Stone Laying Ceremony "
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZYHwGYkcfDJ0tngZ1QAJbvft787mqx6irA&s",
            description:"Institute of Transport and Logistics"
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWySN6qL3sS9OwjTm5UjYnHiqzZqAU_WjFw&s",
            description:"Grand Opening of Yusen Logistics"
        },
        {
            image:"https://www.wha-group.com/Uploads/elFinder/news_activity/companynews/2023/09/wha-group-wha-mega-logistics-km-23.jpg",
            description:"WHA Group Holds Stone Laying Ceremony "
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZYHwGYkcfDJ0tngZ1QAJbvft787mqx6irA&s",
            description:"Institute of Transport and Logistics"
        }
    ]
  return (
    <div className='w-full bg-[rgb(31,66,93)] px-3 py-9 sm:px-[40px] md:px-[100px] sm:py-[60px]'>
        <h1 className='text-center text-white text-2xl sm:text-4xl font-[600]'>News & Insights</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 mt-9 gap-9'>
            {
                array.map((e,i)=>{
                    return(
                        <div className=''>
                            <div className='w-full h-[250px]'>
                                <img className='w-full h-full' src={e.image} alt="" />
                            </div>
                            <h1 className='text-white mt-6 text-xl'>{e.description}</h1>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default News