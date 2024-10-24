import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

import hero from '../assets/hero.png'
import rename from '../assets/rename.png'

const Main = () => {
  return (
    <section className='relative h-[calc(100vh-5rem)] padding text-textColor '>
            <div className=' flex flex-col w-[50%] h-full justify-evenly'>
                <div className='flex text-3xl gap-3'>
                    <nav><FaFacebook /></nav>
                    <nav><RiInstagramFill /></nav>
                    <nav><FaTwitter /></nav>
                </div>
                
                <p className='text-7xl font-extrabold'>
                    START MAKING YOUR OWN FOOD
                </p>

                <p className='text-lightColor'>Find recipes to different dishes from all
                    around the world and improve your diet with healthy meals.s
                </p>

                <button className='round-buttons py-4 px-7 font-bold self-start'>Get started</button>

            </div>

            <div className='absolute w-[50%]  h-full right-0 top-0 mr-[5rem] z-[-1]'>
                  <img src={hero} alt="image" />
            </div>
           
    </section>
  )
}

export default Main