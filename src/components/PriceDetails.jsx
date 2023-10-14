

import React from 'react'

export const PriceDetails = () => {
  return (
    <div className='flex flex-col px-4 pt-2'>
      <div className='flex justify-between items-center pb-2'>
        <p className='font-black text-4xl pl-4'>$49</p>
        <p className='text-center font-bold text-yellow-600'>Avalaible stock</p>
      </div>
      <button className="bg-slate-950 hover:bg-yellow-600 text-white text-lg font-semibold  w-full h-12 py-2 px-4 rounded-lg">Add to cart</button>
    </div>
  )
}
