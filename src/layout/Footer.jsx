import React from 'react'
import { Link } from 'react-router-dom'
import tel from '../../public/image/tel.png'
import insta from '../../public/image/insta.png'
import face from '../../public/image/face.png'
import correo from '../../public/image/correo.png'


function Footer() {
  return (

    <div className='footerColor bg-opacity-30 min-w-1/3 w-full flex flex-col md:flex-row justify-around '>
      <div className='flex flex-col w-1/3 h-auto justify-around ml-4 mb-2 pt-1 font-semibold text-xl'>
      <p className=' font-bold text-xl w-3/4'> INFORMATION:</p>
        <Link className='flex items-center font-semibold text-lg pt-2'>FAQ's</Link>
        <Link className='flex items-center font-semibold text-lg'>Recommendations</Link>
        <Link className='flex items-center font-semibold text-lg'>Terms and Conditions</Link>
        <Link className='flex items-center font-semibold text-lg'>Stores</Link>
      </div>

      <div className=' flex flex-col w-3/4 md:w-1/4 h-auto justify-around ml-4'>
        <p className=' font-bold text-xl w-3/4'> CONCTACT:</p>
        <Link className='flex items-center font-medium text-lg w-1/4'><img className='w-8 me-1' src={insta} alt="" />Instagram</Link>
        <Link className='flex items-center font-medium text-lg w-1/4'><img className='w-8 me-1' src={face} alt="" />Facebook</Link>
        <Link className='flex items-center font-medium text-lg w-1/4'><img className='w-8 me-1' src={correo} alt="" /> packygo@gmail.com</Link>
      </div>

      <div className='flex items-center'>
        <div className=' flex flex-col w-3/4 md:min-w-1/3 h-auto justify-around  m-4'>
          <p className=' font-medium text-xl'>Pack & Go 2023 </p>
          <p className=' font-medium text-lg'> All rights reserved </p>
        </div>
        <div>
          <img className='w-48 h-36' src="../public/image/logoNav.png" alt="logo_Pack&Go" />
        </div>
      </div>

    </div>
  )
}

export default Footer