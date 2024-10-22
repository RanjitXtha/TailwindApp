import React, { useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { MdOutlineInventory2 } from "react-icons/md"
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoLogInOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';
import { recipes } from '../data';

const Header = () => {
  const [search , setSearch] = useState('');
  const [filterResult , setFilterResult] = useState(null);

  const handleSearch = (e)=>{
    setSearch(e.target.value.toLowerCase());

    const filteredData = [...recipes].filter(recipe=> 
      recipe.title.toLowerCase().includes(search)
    || recipe.category.toLowerCase().includes(search)
    ||recipe.description.toLowerCase().includes(search)
    ||recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(search))
    )
    setFilterResult(filteredData);

  }
  return (
    <header className='relative w-full grid grid-cols-[16rem_1fr_16rem] padding text-textColor font-bold '>
            <div className='flex items-center'>
                Foodie
            </div>
            <div className='navigation flex items-center justify-evenly'>
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

            <div className='absolute right-0 mr-[5rem] mt-[4.2rem] rounded-2xl w-[25rem] bg-white shadow-slate-500 shadow-md p-2 z-50'>
              <input type="text" placeholder="Search" className="p-1 w-full bg-transparent" onChange={handleSearch} />
              <div>
                {
                  filterResult? filterResult.map((recipe)=>(
                    <div>
                      <p>{recipe.title}</p>
                    </div>
                  )):null
                }
              </div>
            </div>
    </header>
  )
}

export default Header