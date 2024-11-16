import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row max-container min-h-[15rem] padding bg-[#333333] text-white py-[4rem] gap-8'>
        <div className='text-3xl flex-1 font-extrabold'>
            FOODIE
        </div>

        <div className='flex flex-1 flex-col justify-start gap-2'>
            <p className='text-2xl font-bold mb-4'><FaPhoneAlt className='inline mr-3' />+977 9123456789</p>
            <p>Baneshwor-5, Kathmandu</p>
            <p>recipeapp@gmail.com</p>
            <div className='flex text-3xl gap-3'>
                    <nav><FaFacebook /></nav>
                    <nav><RiInstagramFill /></nav>
                    <nav><FaTwitter /></nav>
            </div>
        </div>

        <div className='flex flex-1 flex-col gap-3'>
          <p className='text-2xl font-bold mb-3'>SUBSCRIBE TO OUR NEWSLETTER</p>
          <p>Email us to subscribe to our newsletter, so you won't miss our latest updates.</p>
          <span>
            <input className='outline-[1px] outline-white ring-[1px] ring-white px-2 py-1 rounded-lg mr-3 bg-transparent mb-5' type="email" placeholder='Enter your Email' />
            <button className='text-base items-center gap-2 round-buttons rounded-xl py-2 px-4'>SUBSCRIBE</button>
          </span>
          
        </div>

    </div>
  )
}

export default Footer