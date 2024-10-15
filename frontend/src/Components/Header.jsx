import React from 'react';
import { IoSearch } from "react-icons/io5";
import { MdOutlineInventory2 } from "react-icons/md"
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoLogInOutline } from "react-icons/io5";


const Header = () => {
  return (
    <header className='h-20 w-full bg-cyan-500 grid grid-cols-[16rem_1fr_16rem] padding'>
            <div className='flex items-center'>
                Foodie
            </div>
            <div className='navigation flex justify-evenly'>
                <nav>Home <RiArrowDropDownLine /></nav>
                <nav>Category <RiArrowDropDownLine /></nav>
                <nav>Recipies <RiArrowDropDownLine /></nav>
                <nav>Contact< RiArrowDropDownLine /></nav>
            </div>
                    
            <div className='flex justify-end gap-8 text-xl'>
                <button><IoSearch /></button>
                <button>< MdOutlineInventory2 /></button>
                <button className='text-base flex items-center gap-2 round-buttons py-2 px-5'><IoLogInOutline />Login</button>
            </div>
    </header>
  )
}

export default Header