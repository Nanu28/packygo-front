
import React, { useState } from 'react';
import DrawerMenu from '../components/DrawerMenu.jsx';
import { Link } from 'react-router-dom';

function Nav() {
  let role = 1; // Define la variable role
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHamburgerButton, setIsHamburgerButton] = useState(true);

  // Función para alternar entre abrir/cerrar el drawer y cambiar el botón
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsHamburgerButton(!isHamburgerButton);
  };

  return (
    <>
      <div className='bg-navbar-bg bg-opacity-50 h-14 w-full flex items-center justify-between rounded-xl'>
        <div className='flex items-center'>
          {isHamburgerButton ? (
            <img onClick={toggleDrawer} className='h-10 cursor-pointer pl-4' src="../public/image/hamburgerMenu.png" alt="hamburger_menu" />
          ) : (
            <button onClick={toggleDrawer} className='h-10 cursor-pointer rounded-full p-1'>
              <img className='h-8 pl-3' src="../public/image/close.png" alt="close" />
            </button>
          )}
          <img className='h-10' src="../public/image/logoNav2.png" alt="logo_Pack&Go2" />
        </div>

        {role > 0 ? (
          <div className='flex p-3 justify-around'>
            <img className='h-12 ' src="../public/image/botonUsuario.png" alt="boton_usuario" />
            <Link to={'/cart'}><img className='h-12 ml-3' src="../public/image/cartNav.png" alt="carro" /></Link>
          </div>
        ) : (
          <p> Login</p>
        )}
      </div>

      <DrawerMenu isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}

export default Nav;

// import React, { useState } from 'react';
// import DrawerMenu from '../components/DrawerMenu.jsx';
// import { Link } from 'react-router-dom';

// function Nav() {
//   let role = 1; // Define la variable role
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [isHamburgerButton, setIsHamburgerButton] = useState(true);

//   // Función para alternar entre abrir/cerrar el drawer y cambiar el botón
//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//     setIsHamburgerButton(!isHamburgerButton);
//   };

//   return (
//     <>
//       <div className='bg-navbar-bg bg-opacity-50 h-16 w-full flex items-center justify-between rounded-xl'>
//         <div className='flex items-center'>
//           <img onClick={toggleDrawer} className='h-10 cursor-pointer m-3' src="../public/image/hamburgerMenu.png" alt="hamburger_menu" />
//           <img className='h-12' src="../public/image/logoNav2.png" alt="logo_Pack&Go2" />
//         </div>

//         {role > 0 ? (
//           <div className='flex p-3 justify-around'>
//             {isHamburgerButton ? (
//               <img className='h-12 ' src="../public/image/botonUsuario.png" alt="boton_usuario" />
//             ) : (
//               <button onClick={toggleDrawer} className='h-12 bg-white rounded-full p-1 ml-3'>
//                 <span className="text-black px-2 py-1 m-7">X</span>
//               </button>
//             )}
//             <Link to={'/cart'}><img className='h-12 ml-3' src="../public/image/cartNav.png" alt="carro" /></Link>
//           </div>
//         ) : (
//           <p> Login</p>
//         )}
//       </div>

//       <DrawerMenu isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
//     </>
//   );
// }

// export default Nav;



// // import React from 'react'
// // import  { useState } from 'react';
// // import DrawerMenu from '../components/DrawerMenu.jsx';
// // import { Link } from 'react-router-dom';


// // function Nav() {
// //   let role = 1
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <>
// //       <div className='bg-custom-yellow bg-opacity-50 h-16 w-full flex items-center justify-between rounded-xl'>
// //         <div className='flex items-center'>
// //           <img onClick={() => setOpen(!open)} className='h-10 cursor-pointer m-3' src="../public/image/hamburgerMenu.png" alt="hamburger_menu" />
// //           <img className='h-14' src="../public/image/logoNav.png" alt="logo_Pack&Go" />

// //         </div>

// //         {role > 0 ? <div className='flex p-3 justify-around'>
// //           <img className='h-12 ' src="../public/image/botonUsuario.png" alt="boton_usuario" />
// //           <Link to={'/cart'}><img className='h-12 ml-3' src="../public/image/cartNav.png" alt="carro" /></Link>
// //         </div> : <p> Login</p>}
// //       </div>

// //       <DrawerMenu isOpen={open} onClose={() => setOpen(false)} />
// //     </>
// //   )
// // }

// // export default Nav

// /* import React, { useState } from 'react';
// import menu from '../../public/image/MenuHamb.png';
// import DrawerMenu from '../components/DrawerMenu.jsx';

// function Nav() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <nav className='w-full h-24 flex justify-between p-5'>
//         <div className='flex w-full justify-between'>
//           <img onClick={() => setOpen(!open)} className='cursor-pointer' src={menu} alt="menu" />
//         </div>
//       </nav>

//       <DrawerMenu isOpen={open} onClose={() => setOpen(false)} />
//     </>
//   );
// }

// export default Nav;
//  */



// /* 
//       <div class="flex justify-center items-center h-screen bg-slate-100">
//         <div class="max-w-sm md:w-1/4 bg-slate-200 border border-gray-300 rounded-lg shadow ">
//           <img src={perfil} alt="logo" className="rounded-t-lg" />

//           <div class="p-5">
//             <p class="mb-2 text-xl font-bold tracking-wide text-gray-900 hover:underline hover:text-red-700">
//               Nombre del producto
//             </p>
//             <p class="mb-3 font-normal text-[18px] text-center text-gray-700">
//               Pequeña descripcion  expedita este. Enim atque fugiat earum nesciunt neque!
//             </p>
//             <p class="mb-2 text-xl font-bold tracking-wide text-gray-900 ">
//               $50 USD
//             </p>


//           </div>

//         </div>
//       </div>
// */