import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../public/image/data.png'
import tel from '../../public/image/tel.png'
import insta from '../../public/image/insta.png'
import face from '../../public/image/face.png'
import correo from '../../public/image/correo.png'


function Footer() {
  return (

    <div className='footerColor min-h-1/4 w-full flex flex-col md:flex-row justify-around '>
      <div className=' flex flex-col w-1/3 h-auto justify-around m-4 font-semibold text-xl'>
        INFORMACION:
        <Link className='flex items-center font-semibold text-lg'>Preguntas Frecuentes</Link>
        <Link className='flex items-center font-semibold text-lg'>Recomendaciones</Link>
        <Link className='flex items-center font-semibold text-lg'>Terminos y condiciones</Link>
        <Link className='flex items-center font-semibold text-lg'>Locales</Link>
      </div>
      <div className=' flex flex-col w-3/4 md:min-w-1/4 h-auto justify-around ml-4'>
        <p className=' font-semibold text-xl  w-3/4'> CONCTACTOS:</p>
        <Link className='flex items-center font-medium text-lg w-3/4'><img className='w-8 me-1' src={tel} alt="" /> +549-1165558</Link>
        <Link className='flex items-center font-medium text-lg w-3/4'><img className='w-8 me-1' src={insta} alt="" />Instagram</Link>
        <Link className='flex items-center font-medium text-lg w-3/4'><img className='w-8 me-1' src={face} alt="" />Faceboock</Link>
        <Link className='flex items-center font-medium text-lg w-3/4'><img className='w-8 me-1' src={correo} alt="" /> packygo@gmail.com</Link>

      </div>
      <div className=' flex flex-col w-3/4 md:min-w-1/3 h-auto justify-around  m-4'>
       <p className=' font-semibold text-lg'>Pack & Go</p>
       <img className='w-24' src={data} alt="" />
       <p className=' font-medium text-xl'>Pack & Go 2023 –</p>
       <p className=' font-medium text-lg'> Todos los derechos reservados</p>
      </div>

    </div>
  )
}

export default Footer