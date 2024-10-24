import React, { useRef } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { categories } from '../data';

const Category = () => { 
    const navigate = useNavigate();
    
    const categorySlide = useRef(null);

    const handleCategory = (category)=>{
      navigate(`/recipes?category=${category}`)
    }

    const Scroll=(direction)=>{
      const containerWidth = categorySlide.current.clientWidth;
      let cardsPerRow;

      if (window.innerWidth >= 1536) { 
        cardsPerRow = 5;
      } else if (window.innerWidth >= 1100) { 
        cardsPerRow = 4;
      } else if (window.innerWidth >= 768) {
        cardsPerRow = 3;
      } else if (window.innerWidth >= 640) { 
        cardsPerRow = 2;
      }else { 
        cardsPerRow = 1;
      }
      const cardWidth = containerWidth / cardsPerRow; 
      if (direction === 'left') {
        categorySlide.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      } else {
        categorySlide.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
     
    }
      

  return (
    <div className='padding mb-14 w-full relative'>
        <h1 className='titles'>Our Categories</h1>
        <section ref={categorySlide} className='flex overflow-x-scroll gap-5 px-3 py-3 hide-scrollbar'>
            {
                categories.map((category)=>(
                    <div onClick={()=>handleCategory(category.title)} className='category-cards group hover:hover-cards'>      
                        <div className='w-[5rem] h-[5rem] bg-customYellow group-hover:bg-white transition-all rounded-full p-3'>
                          <img src={category.img} alt="category"/>
                        </div>
                        <p className='font-bold text-xl'>{category.title}</p>
                        <p className='truncate w-full '>{category.info}</p>
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