import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

import hero from '../assets/hero.png'
import rename from '../assets/rename.png'

const Main = () => {
  return (
    <section className='flex flex-col items-center hero-md:flex-row gap-16 padding text-textColor mb-20 max-container '>
            <div className='flex flex-col w-full hero-md:w-[50%] h-full gap-10 justify-start hero-md:justify-evenly'>
                <div className='flex text-3xl gap-3'>
                    <nav><FaFacebook /></nav>
                    <nav><RiInstagramFill /></nav>
                    <nav><FaTwitter /></nav>
                </div>

                <div  className='text-5xl md:text-6xl lg:text-7xl font-extrabold' >
                  <p className='sm:text-nowrap' >START MAKING</p>
                  <p>YOUR OWN</p>
                  <p > FOOD</p>
                </div>

                <p className='text-lightColor'>Find recipes to different dishes from all
                  around the world and improve your diet with healthy meals.s
                </p>


                <button className='round-buttons py-4 px-7 font-bold self-start'>Get started</button>

            </div>

            <div className='w-full h-full z-[-1]'>
                  <img src={hero} alt="image" className='scale-[1.2]' />
            </div>
           
    </section>
  )
}

export default Main