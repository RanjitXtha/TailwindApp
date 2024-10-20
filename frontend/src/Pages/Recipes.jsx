import React from 'react';
import { recipes } from '../data';
import Header from '../Components/Header';

const Recipes = () => {
  return (
    <div>
      <Header />
    <section className='padding'>
      <h1 className='titles'>Recipes</h1>
      <div className='flex flex-wrap justify-between'>
           {
              recipes.map((recipe)=>(
                <div className='mb-[5rem] group w-[20rem] rounded-3xl shadow-lg shadow-slate-400 grid justify-center p-5 hover:hover-cards'> 
                  <div className='w-[16rem] h-[16rem] bg-slate-400'></div>
                  <p className='mt-3 mb-3 font-bold text-xl '>{recipe.title} </p>
                  <p className='text-lightColor group-hover:text-white'>{recipe.category}</p>
                </div>
              ))
          }
      </div>
    </section>

    </div>
  )
}

export default Recipes