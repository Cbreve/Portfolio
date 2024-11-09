import React from 'react'
import {feature} from '../constants/features-data'
import { FaArrowRight } from 'react-icons/fa'

const Features: React.FC = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 md:mx-16'>
        <div className='px-6 flex flex-col gap-4 pt-6 max-sm:items-center max-sm:pb-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>Our Key Features</h1>
            <div className="flex items-center gap-6">
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-700 px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105">
                    Get in Touch
                    <FaArrowRight className="text-lg -rotate-45" />
                </button>
            </div>
    </div>
        {feature.map((item: any) => {
            return (
                <div key={item.id} className='flex flex-col gap-2 border px-6 pt-10 pb-16'>
                    <h1 className='text-xl md:text-3xl font-bold'>{item.title}</h1>
                    <p>{item.description}</p>
                </div>
            )
        })}
    </section>
  )
}

export default Features