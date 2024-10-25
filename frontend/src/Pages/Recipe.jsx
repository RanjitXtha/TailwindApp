import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../data';
import Header from '../Components/Header'
import { FaHeart } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { GiCookingPot } from "react-icons/gi";

const Recipe = () => {
    const [currentRecipe , setRecipe] = useState(null)
    const {id} = useParams();
    const recipeId = Number(id)

    useEffect(()=>{
        const result = recipes.find(recipe => recipe.id===recipeId)
        setRecipe(result);
    },[])
    
  return (
    <div>
        <Header />

        { currentRecipe &&

        <div>
        <section className='padding grid grid-cols-[1fr_1.3fr] gap-8 text-textColor max-container'>
        
        <div className='w-full'>
            <h1 className='recipe-smalltitle'>{currentRecipe.category}</h1>
            <h1 className='font-bold text-7xl mb-6'>{currentRecipe.title}</h1>
            
            <div className='recipe-icons flex gap-3 text-lg mb-6'>
                <span><FaHeart className='text-customRed' /><p>{currentRecipe.count}</p></span>
                <span><FcClock /><p>{currentRecipe.prepTime}</p></span>
                <span><GiCookingPot /><p>{currentRecipe.cookTime}</p></span>
            </div>
            <h1 className='recipe-smalltitle' >Description:</h1>
            <p>
                {currentRecipe.description}
            </p>

            

        </div>

        <div className='w-full h-[32.8rem] bg-slate-600'>

        </div>

        </section>
        <section className='flex gap-10 mt-5 padding text-textColor'>
              
                <div className='bg-customRed px-7 py-6 shadow-md shadow-slate-400 rounded-3xl min-w-[17rem]'>
                <h1 className='titles text-white'>Ingredients</h1>

                  {currentRecipe.ingredients.map((ingredient)=>(
                    <div className='bg-white text-textColor rounded-2xl py-2 px-5 mb-3 font-bold '>
                    {ingredient}
                  </div>
                    ))}
                  
                </div>
  
                <div className='bg-customRed w-full px-7 py-6 shadow-md shadow-slate-400 rounded-3xl font-bold'>
                  <h1 className='titles text-white'>Instruction</h1>
                        {currentRecipe.instructions.map((instruction)=>(
                        <div className='bg-white rounded-xl text-textColor py-2 px-5 mb-3'>
                        {instruction}
                        </div>
                        ))}
                </div>
            </section>  
        </div>

        }
              
    </div>
  )
}

export default Recipe