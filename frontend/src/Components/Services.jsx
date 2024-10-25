import React from 'react';
import Burger from '../assets/burger.png'

const Services = () => {
  return (
    <div className='padding my-32 max-container  '>
        <section className=' w-full flex flex-col service-md:flex-row  items-center service-md:h-72 rounded-3xl bg-customYellow'>
              <div className='w-[30rem] h-full relative'>
                <img src={Burger} className='service-md:absolute service-md:scale-[1.6] service-md:scale-x-[1.9] top-0 left-0 ' />
              </div>


              <div className='flex w-full justify-center py-4'>
              <div className='flex flex-col lg:flex-row gap-5 text-textColor bg-white p-6 pr-0 rounded-3xl' >
                <div className='flex lg:block items-center gap-4 border-b-2 lg:border-b-0 lg:border-r-2 pr-6 border-customYellow text-center'>
                  <p className='text-4xl lg:text-5xl font-extrabold mb-3'>100</p>
                  <p>100+ users</p>
                </div>
                
                <div className='flex lg:block items-center gap-4 border-b-2 lg:border-b-0 lg:border-r-2 pr-6 border-customYellow text-center'>
                  <p className='text-4xl lg:text-5xl font-extrabold mb-3'>1k</p>
                  <p>1K+ recipes</p>
                </div>

                <div className='flex lg:block items-center gap-4 pr-6 text-center'>
                  <p className='text-4xl lg:text-5xl font-extrabold mb-3'>Easy</p>
                  <p>Instructions and ingredients
                    
                  </p>
                </div>
              </div>
              </div>

        </section>
    </div>
  )
}

export default Services