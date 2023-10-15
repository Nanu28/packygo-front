import React from 'react'

const VisionMision = () => {
  return (
    <section className='bg-sky-100 flex flex-col py-5 px-5 gap-5 w-full md:flex-row'>
<div className='flex flex-col items-center md:w-1/2'>
  <h2 className='text-center py-2 text-xl font-bold bg-yellow-600 text-white w-28 rounded-t-lg items-center'>Mision</h2>
  <p className='p-4 bg-white rounded-xl shadow-2xl italic lg:h-36'>"Provide a safe and inspiring space for our participants to express themselves through pottery, while offering professional instruction and guidance from our experienced instructors".</p>
</div>

<div className='flex flex-col items-center md:w-1/2 md:h-1/2'>
<h2 className='text-center py-2 text-xl font-bold bg-yellow-600 text-white  w-28 rounded-t-lg items-center'>Vision</h2>
<p className='p-4 bg-white rounded-xl shadow-2xl italic lg:h-36'>"Create a vibrant and inclusive pottery community where everyone, regardless of experience or background, can explore their creativity and connect with others".</p></div>
      </section>
  )
}

export default VisionMision