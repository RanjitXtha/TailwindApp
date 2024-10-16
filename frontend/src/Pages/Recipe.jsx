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

        <section className='padding flex gap-8 text-textColor'>
        <div className='w-[30rem] h-[30rem] bg-slate-600'>

        </div>
        <div>
            <h1 className='font-bold text-4xl pb-2'>{currentRecipe.title}</h1>
            <h1 className='recipe-smalltitle'>{currentRecipe.category}</h1>
            <div className='recipe-icons flex gap-5 text-lg'>
                <span><FaHeart className='text-customRed' /><p>{currentRecipe.count}</p></span>
                <span><FcClock /><p>{currentRecipe.prepTime}</p></span>
                <span><GiCookingPot /><p>{currentRecipe.cookTime}</p></span>
               

            
            </div>
            <h1 className='recipe-smalltitle' >Description:</h1>
            <p>
                    {currentRecipe.description}
             </p>
        </div>

        </section>  

        }
              
    </div>
  )
}

export default Recipe