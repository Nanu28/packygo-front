import React from 'react'
import { useParams } from 'react-router-dom'


const Pay = () => {

  
    const { total} = useParams();
  return (
    <>
                <div class="relative w-full h-36 bg-cover bg-center md:h-48"
                style={{ backgroundImage: `url('../../public/image/register_banner.png')` }}>
                 <div class="flex flex-col w-full items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 md:p-8">
                    <p class="text-xl text-slate-800 md:text-3xl">Your best travel itinerary</p>
                    <p class="text-base text-yellow-500 font-bold md:text-lg">begins here</p>
                    <img className='w-6 mt-3 md:w-10' src="../../public/image/arrow_banner.png" alt="arrow_banner" />
                </div>
            </div>

            <div className='w-full h-96 bg-orange-500'>
              <p className='bg-red-500 h-12 items-center justify-center flex'> {total} </p>
            </div>


    </>
  )
}

export default Pay