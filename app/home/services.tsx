import React from 'react'
import "./hero.css";
import { FaArrowRight } from 'react-icons/fa';
import { SwiperCard } from '../components/swipercard';
import { statistics } from '../constants/features-data'


const Services = () => {
  return (
    <div>
      <section className="relative min-h-screen mt-16 max-sm:pt-20 max-lg:pt-16 bg-black text-white hero-background">
        <div className="grid-overlay"></div>
        <div className='flex flex-col md:flex-row items-center md:items-end gap-10 justify-between pt-20 md:px-16'>
          <h1 className='text-5xl font-semibold md:w-80 max-md:text-center'>Our Advanced Tech Services</h1>
          <div className="flex items-center gap-6">
              <button className="bg-blue-700 px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105">
                  View All
                  <FaArrowRight className="text-lg -rotate-45" />
              </button>
          </div>
        </div>
        <div className='px-6 md:px-16 py-10'>
          <SwiperCard />
        </div>
      </section>
      <div className="relative w-full min-h-screen max-sm:pt-20 max-lg:pt-16 pt-20 px-6 md:px-16 bg-black text-white hero-background">
        <div className='flex flex-col gap-6 lg:flex-row lg:justify-between w-full lg:gap-52'>
          <h1 className='text-4xl md:text-5xl font-bold max-lg:text-center'>Explore The Latest Statistics And Data-Driven Insights</h1>
          <p className='lg:w-[70vw] w-full max-lg:text-center'>Explore the latest statistics and data-driven insights to understand the evolving tech landscape. Dive deep into market trends, user behaviors, and emerging innovations with our comprehensive and up-to-date data analysis. Our detailed visualizations and expert interpretations make complex data accessible, helping you stay informed and ahead in the world of technology.</p>
        </div>
        <div className="py-12 relative">
          <img src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/668d2d13633feda232ae627d_Team%20Image.webp" alt="team work" className="lg:w-[70vw] h-full rounded-2xl filter grayscale max-lg:h-[50vh]" />
          <div className="grid grid-cols-2 gap-6 absolute right-5 top-20">
            {
              statistics.map((item) => {
                return(
                  <div key={item.id} className="bg-white rounded-2xl p-4 lg:p-6 shadow-md flex flex-col gap-2">
                    <h1 className="text-blue-500 text-[50px] xl:text-[60px] font-semibold">{item.number}</h1>
                    <hr />
                    <p className="lg:text-xl font-semibold text-black">{item.details}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services