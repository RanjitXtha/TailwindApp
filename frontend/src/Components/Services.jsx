import React from 'react';
import Burger from '../assets/burger.png'

const Services = () => {
  return (
    <div className='padding my-32 '>
        <section className=' w-full flex flex-row  items-center h-64 rounded-3xl bg-customYellow'>
              <div>
              <img src={Burger} className='w-[28rem] h-[150%]' />

              </div>
  
              <div className='flex gap-5 justify-center text-textColor bg-white p-6 pr-0 rounded-3xl' >
                <div className='border-r-2 pr-6 border-customYellow text-center'>
                  <p className='text-5xl font-extrabold mb-3'>100</p>
                  <p>100+ users</p>
                </div>
                
                <div className='border-r-2 pr-6 border-customYellow text-center'>
                  <p className='text-5xl font-extrabold mb-3'>1k</p>
                  <p>1K+ recipes</p>
                </div>

                <div className='pr-6 text-center'>
                  <p className='text-5xl font-extrabold mb-3'>Easy</p>
                  <p>Instructions and ingredients
                    
                  </p>
                </div>
                



              </div>

        </section>
    </div>
  )
}

export default Services