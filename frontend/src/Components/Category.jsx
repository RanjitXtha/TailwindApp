import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Category = () => {
    const categories = [
        {
          id: 1,
          title: "Popular Recipes",
          img: "https://via.placeholder.com/150?text=Popular+Recipes",
          info: "Tried and loved by many."
        },
        {
          id: 2,
          title: "Desserts",
          img: "https://via.placeholder.com/150?text=Desserts",
          info: "Sweet treats for any occasion."
        },
        {
          id: 3,
          title: "Drinks",
          img: "https://via.placeholder.com/150?text=Drinks",
          info: "Refreshing beverages to enjoy."
        },
        {
          id: 4,
          title: "Western Dishes",
          img: "https://via.placeholder.com/150?text=Western+Dishes",
          info: "Famous dishes from the West."
        },
        {
          id: 5,
          title: "Local Favorites",
          img: "https://via.placeholder.com/150?text=Local+Favorites",
          info: "Traditional and regional delights."
        },
        {
          id: 6,
          title: "Vegetarian",
          img: "https://via.placeholder.com/150?text=Vegetarian",
          info: "Wholesome plant-based meals."
        }
      ];
      

  return (
    <div className='padding my-6 w-full'>
        <h1 className='titles'>Categories</h1>
        <section className='flex overflow-x-scroll gap-5'>
            {
                categories.map((category)=>(
                    <div className='w-[calc((100vw-10rem-5rem)/4)] h-[19rem] bg-cyan-400 rounded-3xl flex flex-col items-center justify-evenly flex-shrink-0'>
                        <div className='w-[6rem] h-[6rem] bg-gray-600 rounded-full'></div>
                        <p className='font-bold text-xl'>{category.title}</p>
                        <p>{category.info}</p>
                        <div>
                            <button className='round-buttons px-4 py-3 mr-3'>See more</button>
                            <button className='bg-red-600 rounded-full p-4'><MdArrowOutward /></button>
                        </div>
                    </div>
                ))
            }
        </section>
    </div>
  )
}

export default Category