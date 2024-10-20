import React from 'react';
import { IoSearch } from "react-icons/io5";
import { MdOutlineInventory2 } from "react-icons/md"
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoLogInOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className=' w-full grid grid-cols-[16rem_1fr_16rem] padding text-textColor'>
            <div className='flex items-center'>
                Foodie
            </div>
            <div className='navigation flex justify-evenly'>
                <nav><Link to="/">Home <RiArrowDropDownLine className='text-customRed text-2xl'/></Link></nav>
                <nav><Link>Category <RiArrowDropDownLine className='text-customRed text-2xl' /></Link></nav>
                <nav><Link to="/recipes">Recipies <RiArrowDropDownLine className='text-customRed text-2xl' /></Link></nav>
                <nav><Link>Contact< RiArrowDropDownLine className='text-customRed text-2xl' /></Link></nav>
            </div>
                    
            <div className='flex justify-end gap-8 text-xl'>
                <button><IoSearch /></button>
                <button>< MdOutlineInventory2 /></button>
                <button className='text-base flex items-center gap-2 round-buttons py-2 px-4'><IoLogInOutline />Login</button>
            </div>
    </header>
  )
}

export default Header