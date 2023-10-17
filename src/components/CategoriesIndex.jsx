import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesIndex = () => {
  return (
    <section className='bg-sky-100 flex flex-col h-auto w-full justify-center p-4 gap-4'>
      <div className='flex h-auto w-full justify-center space-x-4 md:space-x-28'>
        <div className="relative inline-block">
          <Link to="/store">
            <img className='opacity-80' src="../public/image/pet's_accesories.png" alt="pet's_accesories_category" />
            <button className="absolute inset-0 flex items-center justify-center text-white text-lg text-center font-bold md:text-2xl">Pet's Accesories</button>
          </Link>
        </div>
        <div className="relative inline-block">
          <Link to="/store">
            <img className='opacity-80' src="../public/image/suitcases.png" alt="suitcases_category" />
            <button className="absolute inset-0 flex items-center justify-center text-white text-lg text-center font-bold md:text-2xl">Suitcases</button>
          </Link>
        </div>
      </div>

      <div className='flex h-auto w-full justify-center space-x-4 md:space-x-28'>
        <div className="relative inline-block">
        <Link to="/store">
          <img className='opacity-80' src="../public/image/backpacks.png" alt="backpacks_category" />
          <button className="absolute inset-0 flex items-center justify-center text-white text-lg text-center font-bold md:text-2xl">Backpacks</button>
          </Link>
        </div>
        <div className="relative inline-block">
        <Link to="/store">
          <img className='opacity-80' src="../public/image/travel_accesories.png" alt="travel_accesories_category" />
          <button className="absolute inset-0 flex items-center justify-center text-white text-lg text-center font-bold md:text-2xl">Travel Accesories</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CategoriesIndex