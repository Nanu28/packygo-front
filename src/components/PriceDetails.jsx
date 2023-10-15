

import React from 'react'

export const PriceDetails = () => {
  return (
    <div className='flex flex-col w-full pt-2 md:px-4'>
      <div className='flex flex-col justify-between items-center pb-2 md:flex-row'>
        <p className='font-black text-xl md:pl-4 md:text-4xl'>$49</p>
        <p className='hidden md:block md:text-center md:font-bold md:text-yellow-600'>Avalaible stock</p>
      </div>
      <div className='flex items-center justify-center gap-4'>
      <p className='md:hidden text-center text-sm font-bold text-yellow-600'>Avalaible stock</p>
      <button className="bg-sky-800 hover:bg-yellow-600 text-white text-base font-semibold w-32 h-8 py-2 rounded-lg flex items-center justify-center md:px-4 md:text-lg md:w-full md:h-12">Add to cart</button>
      </div>
    </div>
  )
}
