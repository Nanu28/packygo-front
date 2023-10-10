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

        {role > 0 ? <div className='flex p-3 justify-around'>
          <img className='h-12 ' src={perfil} alt="" />
          <Link to={'/cart'}><img className='h-12 ml-3' src={carro} alt="" /></Link>
         
        <div className='flex bg-red-400 '>
          <img className='h-28 hidden md:block' src={Logo} alt="Logo" />
        </div>
        
        </div> : <p> Login</p>}
      </div>
      <DrawerMenu isOpen={open} onClose={() => setOpen(false)} />

    </>
  )
}

export default Nav
