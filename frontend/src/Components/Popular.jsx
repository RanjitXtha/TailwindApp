import React from 'react';
import { recipes } from '../data';
import { Link } from 'react-router-dom';

const Popular = () => {
  const filteredRecipe = recipes.sort((a,b)=>b.count - a.count).slice(0,6);
  return (
    <div className='padding text-textColor'>
        <h1 className='titles'>Popular Recipes</h1>
        <section className='w-full flex flex-wrap justify-between gap-y-10 '>
            {
              filteredRecipe.map((element)=>(
                <Link to={`/recipe/${element.id}`}>
                <div className='group w-[20rem] rounded-3xl shadow-lg shadow-slate-400 grid justify-center p-5 hover:hover-cards'> 
                  <div className='w-[16rem] h-[16rem] bg-slate-400'></div>
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