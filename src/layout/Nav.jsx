/* import React from 'react'
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
	<nav>
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

	<nav/>
  )
}

export default Nav

 */

import { useContext, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ProductContext } from '../components/Context/ProductContext.jsx';
import logo from '../../public/image/Logotipo_files/20.png'
import menu from '../../public/image/MenuHamb.png'
import perfil from '../../public/image/perfilFem.png'
import carro from '../../public/image/carritomaleta.png'
import DrawerMenu from '../components/DrawerMenu.jsx';

const Nav = () => {
	const { onInputChange, valueSearch, onResetForm } =
		useContext(ProductContext);

	const navigate = useNavigate();

	let role = 1
	const [open, setOpen] = useState(false);

	const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};

	return (
		<>

			<nav>
				<div className='navColor h-28 w-full flex items-center justify-between'>
					<div className='flex bg-red-200'>
						<img onClick={() => setOpen(!open)} className='h-10 cursor-pointer m-3' src={menu} alt="menu" />
					</div>

					{role > 0 ? <div className='flex p-3 justify-around'>
						<img className='h-12 ' src={perfil} alt="" />
						<Link to={'/cart'}><img className='h-12 ml-3' src={carro} alt="" /></Link>

						<div className='flex bg-red-400 '>
							<img className='h-28 hidden md:block' src={logo} alt="Logo" />
						</div>

					</div> : <p> Login</p>}
				</div>
				<DrawerMenu isOpen={open} onClose={() => setOpen(false)} />
			</nav>
			<header className='bg-red-600 h-18 flex justify-center items-center'>

				<form onSubmit={onSearchSubmit}>
					<div className='flex w-full h-10 bg-red-300 '>						
					<input
							type='search'
							name='valueSearch'
							id=''
							value={valueSearch}
							onChange={onInputChange}
							placeholder='Buscar un producto'
						/>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='icon-search w-5'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
						<button className='btn-search'>Buscar</button>

					</div>

					
				</form>
			</header>

		</>
	);
};
export default Nav