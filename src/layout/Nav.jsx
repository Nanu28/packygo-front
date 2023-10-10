import React from 'react'
import  { useState } from 'react';
import menu from '../../public/image/MenuHamb.png'
import perfil from '../../public/image/perfilFem.png'
import carro from '../../public/image/carritomaleta.png'
import Logo from '../../public/image/Logotipo_files/20.png'
import DrawerMenu from '../components/DrawerMenu.jsx';
import { Link } from 'react-router-dom';


function Nav() {
  let role = 1
  const [open, setOpen] = useState(false);


  

  return (
    <>
      <div className='navColor h-28 w-full flex items-center justify-between'>
        <div className='flex bg-red-200'>
          <img onClick={() => setOpen(!open)} className='h-10 cursor-pointer m-3' src={menu} alt="menu" />
        </div>

        <div className='flex bg-red-400 '>
          <img className='h-28 hidden md:block' src={Logo} alt="Logo" />
        </div>
        

        {role > 0 ? <div className='flex p-3 justify-around bg-lime-300'>
          <img className='h-10 ' src={perfil} alt="" />
          <Link to={'/store'}><img className='h-10 ml-3' src={carro} alt="" />  </Link>
        </div> : <p> Login</p>}
      </div>
      <DrawerMenu isOpen={open} onClose={() => setOpen(false)} />

    </>
  )
}

export default Nav

/* import React, { useState } from 'react';
import menu from '../../public/image/MenuHamb.png';
import DrawerMenu from '../components/DrawerMenu.jsx';

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='w-full h-24 flex justify-between p-5'>
        <div className='flex w-full justify-between'>
          <img onClick={() => setOpen(!open)} className='cursor-pointer' src={menu} alt="menu" />
        </div>
      </nav>

      <DrawerMenu isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default Nav;
 */



/* 
      <div class="flex justify-center items-center h-screen bg-slate-100">
        <div class="max-w-sm md:w-1/4 bg-slate-200 border border-gray-300 rounded-lg shadow ">
          <img src={perfil} alt="logo" className="rounded-t-lg" />

          <div class="p-5">
            <p class="mb-2 text-xl font-bold tracking-wide text-gray-900 hover:underline hover:text-red-700">
              Nombre del producto
            </p>
            <p class="mb-3 font-normal text-[18px] text-center text-gray-700">
              Pequeña descripcion  expedita este. Enim atque fugiat earum nesciunt neque!
            </p>
            <p class="mb-2 text-xl font-bold tracking-wide text-gray-900 ">
              $50 USD
            </p>


          </div>

        </div>
      </div>
*/