import React, { useRef } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import dessert from '../assets/dessert.png';
import drink from '../assets/drink.png';
import local from '../assets/local.png';
import popular from '../assets/popularr.png'
import vergeterian from '../assets/vegeterian.png'
import western from '../assets/western.png'

const Category = () => {
    const categories = [
        {
          id: 1,
          title: "Popular Recipes",
          img: popular,
          info: "Tried and loved by many."
        },
        {
          id: 2,
          title: "Desserts",
          img: dessert,
          info: "Sweet treats for any occasion."
        },
        {
          id: 3,
          title: "Drinks",
          img: drink,
          info: "Refreshing beverages to enjoy."
        },
        {
          id: 4,
          title: "Western Dishes",
          img: western,
          info: "Famous dishes from the West."
        },
        {
          id: 5,
          title: "Local Favorites",
          img: local,
          info: "Traditional and regional delights."
        },
        {
          id: 6,
          title: "Vegetarian",
          img: vergeterian,
          info: "Wholesome plant-based meals."
        }
      ];

    const categorySlide = useRef(null);

    const Scroll=(direction)=>{
      const containerWidth = categorySlide.current.clientWidth;
      const cardWidth = containerWidth / 4; // Since 4 cards are shown, divide by 4
      if (direction === 'left') {
        categorySlide.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      } else {
        categorySlide.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
     
    }
      

  return (
    <div className='padding my-6 w-full relative'>
        <h1 className='titles'>Categories</h1>
        <section ref={categorySlide} className='flex overflow-x-scroll gap-5 px-3 py-3 hide-scrollbar'>
            {
                categories.map((category)=>(
                    <div className='category-cards group hover:hover-cards'>
                        <div className='w-[5rem] h-[5rem] bg-customRed group-hover:bg-white transition-all rounded-full p-3'><img src={category.img} alt="category"/></div>
                        <p className='font-bold text-xl'>{category.title}</p>
                        <p>{category.info}</p>
                        <div>
                            <button className='round-buttons group-hover:bg-white group-hover:text-textColor px-4 py-3 mr-1'>See more</button>
                            <button className='bg-customRed group-hover:bg-white group-hover:text-textColor rounded-full p-4 text-white'><MdArrowOutward /></button>
                        </div>
                    </div>
                ))
            }
            
        </section>
        <button onClick={()=>Scroll('left')} className='scroll-button left-[1rem]'><FaChevronLeft/></button>
        <button onClick={()=>Scroll('right')} className='scroll-button right-[0rem]'><FaChevronRight/></button>
    </div>
  )
}

export default Category