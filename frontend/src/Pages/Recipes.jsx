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
import { GiCupcake } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

const Recipes = () => {

  const [active , setActive] = useState('All');
  

  const categories = [
    {title:'All',img:<IoFastFood />},
    {title:'Popular',img:<FaFire />},
    {title:'Western',img:<FaPizzaSlice />},
    {title:'Local',img:<GiDumplingBao />},
    {title:'Drinks',img:<RiDrinksFill />},
    {title:'Vegetarian',img:<LuCakeSlice />},
  ]

  const [filteredRecipes , setfilteredRecipes]= useState(recipes);
  
  const setCategory=(category)=>{
    setActive(category);
    console.log(active)
    if(category==='All'){
      setfilteredRecipes(recipes);
    }else if(category === 'Popular'){
      const filterData = recipes.sort((a,b)=>b.count - a.count);
      setfilteredRecipes(filterData);
    }
    else{
      const filterData = recipes.filter(recipe=> recipe.category === category);
      setfilteredRecipes(filterData);
    }
  
    
  }
  return (
    <div>
      <Header />

     
    <section className='padding text-textColor'>
      <h1 className='titles mb-2'>Recipes</h1>

      <section className='flex justify-center gap-5 mb-14 font-bold'>
        { 
          categories.map(category=>(
            <button key={category.title} onClick={()=>setCategory(category.title)} className={`${active===category.title?'bg-customRed text-white':'bg-customWhite'}
            rounded-full px-4 py-3 flex items-center justify-center gap-3 `} >
              <div>{category.img}</div>
              <div>{category.title}</div>
            </button>
          ))
        }
        
      </section>

      <div className='flex flex-wrap justify-between'>
           {
              filteredRecipes && filteredRecipes.map((recipe)=>(
              <Link to={`/recipe/${recipe.id}`}>
                <div className='mb-[5rem] group w-[20rem] rounded-3xl shadow-lg shadow-slate-400 grid justify-center p-5 hover:hover-cards'> 
                  <div className='w-[16rem] h-[16rem] bg-slate-400'></div>
                  <p className='mt-3 mb-3 font-bold text-xl '>{recipe.title} </p>
                  <p className='text-lightColor group-hover:text-white'>{recipe.category}</p>
                </div>
              </Link>
              ))
          }
      </div>
    </section>

    </div>
  )
}

export default Recipes