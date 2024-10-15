import React from 'react'

const Popular = () => {
  return (
    <div className='padding'>
        <h1 className='titles'>Popular Recipes</h1>
        <section>
            <div className='w-[20rem] rounded-3xl shadow-lg shadow-slate-500 grid justify-center p-3'> 
                <div className='w-[16rem] h-[16rem] bg-slate-400'></div>
                <p className='mt-3 mb-3'>Title </p>
                <p>Genre</p>
            </div>
        </section>
    </div>
  )
}

export default Popular