import React, { useContext, useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { MdOutlineInventory2 } from "react-icons/md"
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoLogInOutline } from "react-icons/io5";
import { FaClock, FaHeart } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { ImSpoonKnife } from "react-icons/im";
import { useRef } from 'react';
import { IoIosCloseCircle } from "react-icons/io";

import { Link } from 'react-router-dom';
import { recipes } from '../data';

import { FavouriteContext } from '../context/favourite';

const Header = () => {
  const {favourites ,removeFav} = useContext(FavouriteContext);

  const [filterResult , setFilterResult] = useState(null);
  const searchRef = useRef(null);
  const favouriteRef = useRef(null);
  const [searchVisibility , setSearchVisibility] = useState(false);
  const [favVisibility , setFavisibility] = useState(false);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchVisibility(false);
      setFilterResult(null);
    }
  };

  const handleClickFav = (e)=>{
    if(favouriteRef.current && !favouriteRef.current.contains(e.target)){
      setFavisibility(false);
    }

  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(()=>{
    document.addEventListener("mousedown",handleClickFav);
    return ()=>{
      document.removeEventListener("mousedown",handleClickFav);
    }
  })


  const handleSearch = (e)=>{
    const searchValue = e.target.value.toLowerCase();
 
    
    if (searchValue === '') {
      setFilterResult(null); 
      return;
    }

    const filteredData = [...recipes].filter(recipe=> 
      recipe.title.toLowerCase().includes(searchValue)
    || recipe.category.toLowerCase().includes(searchValue)
    ||recipe.description.toLowerCase().includes(searchValue)
    ||recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchValue))
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
                <button onClick={()=>setSearchVisibility(!searchVisibility)}><IoSearch /></button>
                <button onClick={()=>setFavisibility(!favVisibility)} className='relative'>< MdOutlineInventory2 />
                {
                  (favourites.length !==0)?<p className='absolute w-5 h-5 p-2 flex items-center justify-center rounded-full bg-customRed top-0 right-[-15px] text-sm text-white'>
                  {
                    favourites.length
                  }
                </p>:null

                }
                  
                </button>
                <button className='text-base flex items-center gap-2 round-buttons py-2 px-4'><IoLogInOutline />Login</button>
            </div>
{
  searchVisibility &&

            <div ref={searchRef} className='absolute right-0 mr-[5rem] mt-[4.2rem] rounded-2xl w-[25rem] bg-white shadow-slate-500 shadow-md p-2 z-50'>
              <input type="text" placeholder="Search" className="p-1 w-full bg-transparent focus:outline-none" onChange={handleSearch} />
              <div className='max-h-[22rem] overflow-y-scroll hide-scrollbar'>
                {
                  filterResult? filterResult.map((recipe)=>(
                    <Link to={`/recipe/${recipe.id}`}>
                    <div className='flex gap-4 mb-2'>
                      <div className='w-16 h-16'>
                        <img src={recipe.image} alt={recipe.title} />
                      </div>
                      <div>
                        <p>{recipe.title}</p>
                        <div className='flex gap-5 text-lightColor text-sm'>
                          <p className='flex gap-2 items-center'><ImSpoonKnife />{recipe.servings}</p>
                          <p className='flex gap-2 items-center'><FaClock />{recipe.cookTime}</p>
                          <p className='flex gap-2 items-center'><FaHeart />{recipe.count}</p>
                        </div>
                      </div> 
                    </div>
                    </Link>
                  )):null
                }
              </div>
            </div>
            }
{
  favVisibility &&
  <div ref={favouriteRef} className=' absolute right-0 mr-[5rem] mt-[4.2rem] rounded-2xl w-[25rem] bg-white shadow-slate-500 shadow-md p-2 z-50'>
    {
    
      (favourites.length !== 0)? favourites.map((recipe)=>(
        <Link to={`/recipe/${recipe.id}`}>
        <div className='flex gap-4 mb-2 relative'>
          <button onClick={
            (e)=>{
              e.preventDefault();
              e.stopPropagation();
              removeFav(recipe);
            }
          } className='absolute right-0 top-0 text-customRed text-2xl'>
            <IoIosCloseCircle />
          </button>
          <div className='w-16 h-16'>
            <img src={recipe.image} alt={recipe.title} />
          </div>
          <div>
            <p>{recipe.title}</p>
            <div className='flex gap-5 text-lightColor text-sm'>
              <p className='flex gap-2 items-center'><ImSpoonKnife />{recipe.servings}</p>
              <p className='flex gap-2 items-center'><FaClock />{recipe.cookTime}</p>
              <p className='flex gap-2 items-center'><FaHeart />{recipe.count}</p>
            </div>
          </div> 
        </div>
        </Link>
      )):<p className='text-lightColor text-sm'>No recipe has been added to your favourites</p>
    }
  </div>
}


     
    </header>
  )
}

export default Header