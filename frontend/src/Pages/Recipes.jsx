import React, { useEffect, useState } from 'react';
import { recipes } from '../data';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

const Recipes = () => {

  const [filteredRecipes , setfilteredRecipes]= useState(recipes);


  
  const setCategory=(category)=>{
    if(category==='All'){
      setfilteredRecipes(recipes);
    }else if(category === 'Popular'){
      const filterData = recipes.sort((a,b)=>b.count - a.count);
      setfilteredRecipes(filterData);
    }
    else{
      const filterData = recipes.filter(recipe=> recipe.category === category);
      console.log(filterData);
      setfilteredRecipes(filterData);
    }
  
    
  }
  return (
    <div>
      <Header />

     
    <section className='padding'>
      <h1 className='titles'>Recipes</h1>

      <section className='flex justify-center'>
        <button onClick={()=>setCategory('All')}>All</button>
        <button onClick={()=>setCategory('Dessert')}>Dessert</button>
        <button onClick={()=>setCategory('Drinks')}>Drinks</button>
        <button onClick={()=>setCategory('Western')}>Western Dishes</button>
        <button onClick={()=>setCategory('Local')}>Local Favourites</button>
        <button onClick={()=>setCategory('Vegetarian')}>Vegetarian</button>
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