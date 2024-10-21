import React from 'react';
import Burger from '../assets/burger.png'

const Services = () => {
  return (
    <div className='padding my-14 '>
        <section className='w-full grid grid-cols-[20rem_1fr] h-64 rounded-3xl bg-customYellow relative items-center'>
            <img src={Burger} className='absolute left-[-20px] w-[26rem] h-[160%]' />
            <div className='flex items-center'>
              <div className=''>
                <div>
                  <p>100</p>
                  <p>More than 100 users active</p>
                </div>
                
                <div>
                  <p>1k</p>
                  <p>Over a thousand recipe available</p>
                </div>

                <div>
                  <p>Easy</p>
                  <p>Easy recipes with detailed instructions and ingredients
                    
                  </p>
                </div>



              </div>

            </div>

        </section>
    </div>
  )
}

export default Services