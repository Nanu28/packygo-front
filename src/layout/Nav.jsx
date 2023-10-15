import React, { useEffect, useRef, useState } from 'react';
import DrawerMenu from '../components/DrawerMenu.jsx';
import Display from '../components/Display.jsx';
import { Link } from 'react-router-dom';

function Nav() {
  let role = 1; // Define la variable role
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHamburgerButton, setIsHamburgerButton] = useState(true);

  // Ref para el botón "Close" del menú de navegación
  const closeNavButtonRef = useRef(null);

  // Ref para el DrawerMenu
  const drawerRef = useRef(null);

  // Función para alternar entre abrir/cerrar el DrawerMenu y cambiar el botón
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsHamburgerButton(!isHamburgerButton);
  };

  // Función para cerrar el DrawerMenu y cambiar el botón si se presiona "Esc"
  const closeMenuOnEscape = (event) => {
    if (event.key === 'Escape') {
      setIsDrawerOpen(false);
      setIsHamburgerButton(true);
    }
  };

  // Función para cerrar el DrawerMenu y cambiar el botón si se hace clic fuera del DrawerMenu
  const closeMenuOnClickOutside = (event) => {
    if (isDrawerOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsDrawerOpen(false);
      setIsHamburgerButton(true);
    }
  };

  useEffect(() => {
    // Agregar los event listeners para "Esc" y clics fuera del DrawerMenu
    document.addEventListener('keydown', closeMenuOnEscape);
    document.addEventListener('mousedown', closeMenuOnClickOutside);

    return () => {
      // Eliminar los event listeners cuando el componente se desmonte
      document.removeEventListener('keydown', closeMenuOnEscape);
      document.removeEventListener('mousedown', closeMenuOnClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <div className='bg-yellow-600 bg-opacity-50 h-14 w-full flex items-center justify-between rounded-xl'>
        <div className='flex items-center'>
          {isHamburgerButton ? (
            <img onClick={toggleDrawer} className='h-10 cursor-pointer pl-4' src="../public/image/hamburgerMenu.png" alt="hamburger_menu" />
          ) : (
            <button ref={closeNavButtonRef} onClick={toggleDrawer} className='h-10 cursor-pointer rounded-full p-1'>
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

      <DrawerMenu isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} ref={drawerRef} />
    </>
  );
}

export default Nav;



// import React, { useEffect, useRef, useState } from 'react';
// import DrawerMenu from '../components/DrawerMenu.jsx';
// import Display from '../components/Display.jsx';
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

//     // Función para cerrar el menú y cambiar el botón si se presiona "Esc"
//     const closeMenuOnEscape = (event) => {
//       if (event.key === 'Escape') {
//         setIsDrawerOpen(false);
//         setIsHamburgerButton(true);
//       }
//     };
  
//     // Función para cerrar el menú y cambiar el botón si se hace clic fuera del menú
//     const closeMenuOnClickOutside = (event) => {
//       if (isDrawerOpen && !closeNavButtonRef.current.contains(event.target)) {
//         setIsDrawerOpen(false);
//         setIsHamburgerButton(true);
//       }
//     };

//     useEffect(() => {
//       // Agregar los event listeners para "Esc" y clics fuera del menú
//       document.addEventListener('keydown', closeMenuOnEscape);
//       document.addEventListener('mousedown', closeMenuOnClickOutside);
  
//       return () => {
//         // Eliminar los event listeners cuando el componente se desmonte
//         document.removeEventListener('keydown', closeMenuOnEscape);
//         document.removeEventListener('mousedown', closeMenuOnClickOutside);
//       };
//     }, [isDrawerOpen]);

//   return (
//     <>
//       <div className='bg-yellow-600 bg-opacity-50 h-14 w-full flex items-center justify-between rounded-xl'>
//         <div className='flex items-center'>
//           {isHamburgerButton ? (
//             <img onClick={toggleDrawer} className='h-10 cursor-pointer pl-4' src="../public/image/hamburgerMenu.png" alt="hamburger_menu" />
//           ) : (
//             <button onClick={toggleDrawer} className='h-10 cursor-pointer rounded-full p-1'>
//               <img className='h-8 pl-3' src="../public/image/close.png" alt="close" />
//             </button>
//           )}
//           <img className='h-10' src="../public/image/logoNav2.png" alt="logo_Pack&Go2" />
//         </div>

//         {role > 0 ? (
//           <div className='flex p-3 justify-around'>
//             <img className='h-12 ' src="../public/image/botonUsuario.png" alt="boton_usuario" />
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