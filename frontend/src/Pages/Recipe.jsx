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
    console.log(recipeId)

    useEffect(()=>{
        const result = recipes.find(recipe => recipe.id===recipeId)
        setRecipe(result);
    },[])
    
  return (
    <div>
        <Header />

        { currentRecipe &&

        <section className='padding grid grid-cols-[1fr_1.3fr] gap-8 text-textColor'>
        <div className='w-full h-[32.8rem] bg-slate-600'>

        </div>
        <div className='w-full'>
            <h1 className='font-bold text-4xl'>{currentRecipe.title}</h1>
            <h1 className='recipe-smalltitle'>{currentRecipe.category}</h1>
            <div className='recipe-icons flex gap-3 text-lg'>
                <span><FaHeart className='text-customRed' /><p>{currentRecipe.count}</p></span>
                <span><FcClock /><p>{currentRecipe.prepTime}</p></span>
                <span><GiCookingPot /><p>{currentRecipe.cookTime}</p></span>
            </div>
            <h1 className='recipe-smalltitle' >Description:</h1>
            <p>
                {currentRecipe.description}
            </p>

            <section className='flex flex-col justify-between gap-10 mt-5 '>
                <div className='px-4 pb-3 shadow-md shadow-slate-400 rounded-3xl'>
                  <h1 className='recipe-smalltitle'>Ingredients</h1>

                  {currentRecipe.ingredients.map((ingredient)=>(
                    <div className='bg-customRed rounded-2xl py-2 px-3 mb-3 text-white inline-block mr-3'>
                    {ingredient}
                  </div>
                    ))}
                  
                </div>
  
                <div className='w-full px-4 pb-3 shadow-md shadow-slate-400 rounded-3xl'>
                  <h1 className='recipe-smalltitle'>Instruction</h1>
                        {currentRecipe.instructions.map((instruction)=>(
                        <div className='bg-customRed rounded-xl text-white py-1 px-3 mb-3'>
                        {instruction}
                        </div>
                        ))}
                </div>
            </section>

        </div>

        </section>  

        }
              
    </div>
  )
}

export default Recipe