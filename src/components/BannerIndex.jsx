import React from 'react'
import { Link } from 'react-router-dom'

const BannerIndex = () => {
  return (
    <section className="flex flex-col bg-[url('../public/image/backgroundLetsGo.png')] bg-cover bg-center md:flex-row">
      <div className='w-48 flex self-center md:w-1/3'>
        <img className='pt-4' src="../public/image/girlTravel.png" alt="image_girlTravel" />
      </div>
      <div className='w-full flex flex-col justify-center md:w-1/2 md:py-4'>
        <p className='text-4xl pl-10'>Let's Go</p>
        <p className='text-yellow-500 text-6xl font-bold pl-10 '>Travel</p>
        <p className='px-10'>At <strong>Pack&Go</strong>, we know that every trip is a new adventure. We invite you to discover a world of possibilities in our virtual corner designed especially for travel and adventure lovers. <strong>Your next destination starts here!</strong></p>
        <div className='flex justify-center'>
          <Link to="/store">
            <button className='bg-sky-800 hover:bg-yellow-600 text-white font-bold h-10 w-48 rounded-2xl my-4 md:ml-20'>
              Shop now
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default BannerIndex