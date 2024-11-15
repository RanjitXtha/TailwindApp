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
        <section className='padding flex flex-col lg:grid grid-cols-[1fr_1.3fr] gap-8 text-textColor max-container'>
        
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

        <div className='w-full h-auto lg:h-[32.8rem]'>
            <img src={currentRecipe.image} alt={currentRecipe.title} />
        </div>

        </section>
        <section className='gap-10 mt-5 padding text-textColor'>
              
                <div className='px-7 py-6 shadow-md shadow-slate-400 rounded-3xl'>
                <h1 className='titles'>Ingredients</h1>
              <div className='flex gap-5 flex-wrap'>
                  {currentRecipe.ingredients.map((ingredient)=>(
                    <div className='bg-customRed text-white rounded-2xl py-2 px-5 font-bold '>
                    {ingredient}
                  </div>
                    ))}
                </div>
                  
                </div>
  
                <div className='w-full my-[3rem] px-7 py-6 shadow-md shadow-slate-400 rounded-3xl font-bold'>
                  <h1 className='titles '>Instruction</h1>
                        {currentRecipe.instructions.map((instruction)=>(
                        <div className='rounded-xl text-textColor py-2 px-5 mb-3'>
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