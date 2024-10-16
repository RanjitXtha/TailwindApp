import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../data';
import Header from '../Components/Header'

const Recipe = () => {
    const [currentRecipe , setRecipe] = useState(null)
    const {id} = useParams();
    const recipeId = Number(id)
    console.log(recipeId)

    useEffect(()=>{
        const result = recipes.find(recipe => recipe.id===recipeId)
        setRecipe(result);
        console.log(currentRecipe)
    },[])
    
  return (
    <div>
        <Header />

        { currentRecipe &&

<section className='padding flex gap-8 text-textColor'>
<div className='w-[30rem] h-[30rem] bg-slate-600'>

</div>
<div>
    <h1 className='font-bold text-4xl pb-3'>{currentRecipe.title}</h1>
    <p>{currentRecipe.category}</p>
    <div>
        <span>Likes {currentRecipe.count} </span>
        <span>{currentRecipe.prepTime}</span>
        <span>{currentRecipe.cookTime}</span>
        <p>
            {currentRecipe.description}
        </p>

      
    </div>
</div>

</section>  

        }
              
    </div>
  )
}

export default Recipe