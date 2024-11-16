import React, { useEffect, useState } from 'react';
import { recipes } from '../data';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

import { FaFire } from "react-icons/fa";
import { TbDumpling } from "react-icons/tb";
import { GiDumplingBao } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";
import { RiDrinksFill } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";
import { IoFastFood } from "react-icons/io5";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


import { FavouriteContext } from '../context/favourite';
import { useContext } from 'react';

import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer'

const Recipes = () => {

  const [active , setActive] = useState('All');
  const {addFav , favourites} = useContext(FavouriteContext);
  const location = useLocation();
  const getQueryParams = (param)=>{
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(param);
  }

  useEffect(() => {
    const category = getQueryParams('category') || 'All'; // Default to 'All' if no category is passed
    setCategory(category);
  }, [location.search]);

  const categories = [
    {title:'All',img:<IoFastFood />},
    {title:'Popular',img:<FaFire />},
    {title:'Western',img:<FaPizzaSlice />},
    {title:'Local',img:<GiDumplingBao />},
    {title:'Drinks',img:<RiDrinksFill />},
    {title:'Vegetarian',img:<LuCakeSlice />},
    {title:'Desserts',img:<LuCakeSlice />}
  ]

  const [filteredRecipes , setfilteredRecipes]= useState(recipes);
  
  const setCategory=(category)=>{
    setActive(category);
    if(category ==='All'){
      setfilteredRecipes([...recipes]);
    }else if(category === 'Popular'){
      const filterData = [...recipes].sort((a,b)=>b.count - a.count);
      setfilteredRecipes(filterData);
    }
    else{
      const filterData = [...recipes].filter(recipe=> recipe.category === category);
      setfilteredRecipes(filterData);
    }
  
    
  }
  return (
    <div>
      <Header />

     
    <section className='padding text-textColor max-container'>
      <h1 className='titles mb-2'>Recipes</h1>

      <section className='flex justify-evenly flex-wrap my-10 font-bold'>
        { 
          categories.map(category=>(
            <button key={category.title} onClick={()=>setCategory(category.title)} className={`${active===category.title?'bg-customRed text-white':'bg-customWhite'}
            rounded-full px-4 py-3 flex items-center justify-center gap-3 transition-all`} >
              <div>{category.img}</div>
              <div>{category.title}</div>
            </button>
          ))
        }
        
      </section>

      <div className='grid grid-cols-1 sm:grid-cols-2 custom-md:grid-cols-3 gap-x-3 gap-y-6 justify-items-center'>
           {
              filteredRecipes && filteredRecipes.map((recipe)=>(
              <Link to={`/recipe/${recipe.id}`}>
                <div className='relative mb-[5rem] group max-w-[20rem] rounded-3xl shadow-lg shadow-slate-400 grid justify-center p-5 hover:hover-cards'>
                <button onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  addFav(recipe);
                  }
                  } className='absolute right-0 top-0 m-4 p-2 text-2xl rounded-full group-hover:bg-white'>

{
              favourites.some(fav => fav.id === recipe.id) ? (
                <FaHeart className='text-customRed' />  // Filled heart if it's a favorite
              ) : (
                <FaRegHeart className='text-lightColor' />  // Regular heart if it's not
              )
            }

                </button> 
                  <div className='max-w-[16rem] h-[16rem]'>
                    <img src={recipe.image} alt={recipe.title} />
                  </div>
                  <p className='mt-3 mb-3 font-bold text-xl w-full truncate text-ellipsis '>{recipe.title} </p>
                  <p className='text-lightColor group-hover:text-white'>{recipe.category}</p>
                </div>
              </Link>
              ))
          }
      </div>
    </section>
    <Footer />
    </div>
  )
}

export default Recipes