import React from 'react';
import { recipes } from '../data';
import { Link } from 'react-router-dom';

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { FavouriteContext } from '../context/favourite';
import { useContext } from 'react';

const Popular = () => {
  const {addFav} = useContext(FavouriteContext);
  
  const filteredRecipe = [...recipes].sort((a,b)=>b.count - a.count).slice(0,6);
  return (
    <div className='padding text-textColor'>
        <h1 className='titles'>Popular Recipes</h1>
        <section className='w-full flex flex-wrap justify-between gap-y-10 '>
            {
              filteredRecipe.map((element)=>(
                <Link to={`/recipe/${element.id}`}>
                <div className='relative group w-[20rem] rounded-3xl shadow-lg shadow-slate-400 grid justify-center p-5 hover:hover-cards'> 
                <button onClick={()=>addFav(element)} className='absolute right-0 top-0 m-4 p-2 text-2xl rounded-full group-hover:bg-white'>
                  <FaRegHeart className='text-lightColor' />
                </button>
                  <div className='w-[16rem] h-[16rem]'>
                    <img src={element.image} alt={element.title} />
                  </div>
                  <p className='mt-3 mb-3 font-bold text-xl '>{element.title} </p>
                  <p className='text-lightColor group-hover:text-white'>{element.category}</p>
              </div>
              </Link>
              ))
            }
        </section>
    </div>
  )
}

export default Popular