import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../components/Context/ProductContext.jsx';
import { DataContext } from '../components/Context/DataContext.jsx';
import DrawerMenu from '../components/DrawerMenu.jsx';
import TotalItems from "../components/CartContent/TotalItems.jsx";
import hamburguesa from '../../public/image/hamburgerMenu.png'
import logo from '../../public/image/logoNav2.png'

const Nav = () => {
  const user = localStorage.getItem("user");
  //console.log(user)
  const userObject = JSON.parse(user);
  const role = userObject ? userObject.role : null;
  const photoObject = JSON.parse(user);
  const profile = photoObject ? photoObject.photo : null;

  const { onInputChange, valueSearch, onResetForm } = useContext(ProductContext);
  const { cart } = useContext(DataContext);
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHamburgerButton, setIsHamburgerButton] = useState(true);

  // Ref para el botón "Close" del menú de navegación
  const closeNavButtonRef = useRef(null);

  // Función para alternar entre abrir/cerrar el DrawerMenu y cambiar el botón
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsHamburgerButton(!isHamburgerButton);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/search', {
      state: valueSearch,
    });
    onResetForm();
  };

  return (
    <>

      <div className='bg-yellow-600 bg-opacity-50 h-14 w-full flex items-center justify-between'>

        <div className='flex items-center'>
          {isHamburgerButton ? (
            <img onClick={toggleDrawer} className='h-10 cursor-pointer pl-4' src={hamburguesa} alt="hamburger_menu" />
          ) : (
            <button ref={closeNavButtonRef} onClick={toggleDrawer} className='h-10 cursor-pointer rounded-full p-1'>
              <img className='h-8 pl-3' src="../public/image/close.png" alt="close" />
            </button>
          )}
          <Link to='/'>
            <img className='h-10' src={logo} alt="logo_Pack&Go2" />
          </Link>
        </div>
      
              <form onSubmit={onSearchSubmit}>
          <div className="flex w-full h-10">
            <input
              className='px-3 rounded-l-lg border-3 border-sky-900 '
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Search here"
            />
            <button className="btn-search px-3 bg-sky-800 hover.bg-yellow-600 rounded-r-lg text-white text-base font-semibold">Search</button>
          </div>
        </form>

        {role !== null ? (
          <div className='flex p-3 justify-around'>
            <Link to="/profile" className="flex items-center">
              <img className='h-12 w-12 rounded-xl' src={profile || "../public/image/botonUsuario.png"} alt="boton_usuario" />
            </Link>
            <Link to={'/cart'} className='flex items-center flex-col-reverse px-2 pb-2 '>
              <img className='h-12 -m-4 md:ml-3' src="../public/image/cartNav.png" alt="carro" />
              <div className="relative">
                <TotalItems />
              </div>
            </Link>
          </div>
        ) : (
          <Link to="/login" className="seeCarrito">
            <p className="text-md font-medium p-2 mr-4 text-white bg-sky-800 hover.bg-yellow-600 rounded-full">LOGIN</p>
          </Link>
        )}
      </div>

      <DrawerMenu isOpen={isDrawerOpen} />

    </>
  );
};

export default Nav;



// import React, { useContext, useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ProductContext } from '../components/Context/ProductContext.jsx';
// import { DataContext } from '../components/Context/DataContext.jsx';
// import DrawerMenu from '../components/DrawerMenu.jsx';
// import TotalItems from "../components/CartContent/TotalItems.jsx";
// import hamburguesa from '../../public/image/hamburgerMenu.png'
// import logo from '../../public/image/logoNav2.png'

// const Nav = () => {
//   const user = localStorage.getItem("user");
//   //console.log(user)
//   const userObject = JSON.parse(user);
//   const role = userObject ? userObject.role : null;
//   const photoObject = JSON.parse(user);
//   const profile = photoObject ? photoObject.photo : null;

//   const { onInputChange, valueSearch, onResetForm } = useContext(ProductContext);
//   const { cart } = useContext(DataContext);
//   const navigate = useNavigate();

//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const [isHamburgerButton, setIsHamburgerButton] = useState(true);

//   // Ref para el botón "Close" del menú de navegación
//   const closeNavButtonRef = useRef(null);

//   // Ref para el DrawerMenu
//   const drawerRef = useRef(null);

//   // Función para alternar entre abrir/cerrar el DrawerMenu y cambiar el botón
//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//     setIsHamburgerButton(!isHamburgerButton);
//   };

//   const closeMenuOnEscape = (event) => {
//     if (event.key === 'Escape') {
//       setIsDrawerOpen(false);
//     }
//   };

//   const closeMenuOnClickOutside = (event) => {
//     if (isDrawerOpen && closeNavButtonRef.current && !closeNavButtonRef.current.contains(event.target)) {
//       setIsDrawerOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('keydown', closeMenuOnEscape);
//     document.addEventListener('mousedown', closeMenuOnClickOutside);

//     return () => {
//       document.removeEventListener('keydown', closeMenuOnEscape);
//       document.removeEventListener('mousedown', closeMenuOnClickOutside);
//     };
//   }, [isDrawerOpen]);

//   const onSearchSubmit = (e) => {
//     e.preventDefault();
//     navigate('/search', {
//       state: valueSearch,
//     });
//     onResetForm();
//   };

//   return (
//     <>
//       <div className='bg-yellow-600 bg-opacity-50 h-14 w-full flex items-center justify-between rounded-xl'>
//         <div className='flex items-center'>
//           {isHamburgerButton ? (
//             <img onClick={toggleDrawer} className='h-10 cursor-pointer pl-4' src={hamburguesa} alt="hamburger_menu" />
//           ) : (
//             <button ref={closeNavButtonRef} onClick={toggleDrawer} className='h-10 cursor-pointer rounded-full p-1'>
//               <img className='h-8 pl-3' src="../public/image/close.png" alt="close" />
//             </button>
//           )}
//           <Link to='/'>
//             <img className='h-10' src={logo} alt="logo_Pack&Go2" />
//           </Link>
//         </div>

//         {role !== null ? (
//           <div className='flex p-3 justify-around'>
//             <Link to="/profile" className="flex items-center">
//               <img className='h-12 w-12 rounded-xl' src={profile || "../public/image/botonUsuario.png"} alt="boton_usuario" />
//             </Link>
//             <Link to={'/cart'} className='flex items-center'>
//               <img className='h-12 md:ml-3' src="../public/image/cartNav.png" alt="carro" />
//               <div className="relative">
//                 <TotalItems />
//               </div>
//             </Link>
//           </div>
//         ) : (
//           <Link to="/login" className="seeCarrito">
//             <p className="text-md font-medium p-2 mr-4 text-white bg-sky-800 hover:bg-yellow-600 rounded-full">LOGIN</p>
//           </Link>
//         )}
//       </div>

//       <DrawerMenu isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

//       <header className="bg-sky-100 h-18 flex items-center justify-center">
//         <form onSubmit={onSearchSubmit}>
//           <div className="flex w-full h-10">
//             <input
//               className='px-3 rounded-l-lg border-3 border-sky-900'
//               type="search"
//               name="valueSearch"
//               id=""
//               value={valueSearch}
//               onChange={onInputChange}
//               placeholder="Search here"
//             />
//             {/* <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="icon-search w-5 rounded-l-md bg-sky-800"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//               />
//             </svg> */}
//             <button className="btn-search px-3 bg-sky-800 hover:bg-yellow-600 rounded-r-lg text-white text-base font-semibold">Search</button>
//           </div>
//         </form>
//       </header>
//     </>
//   );
// };

// export default Nav;
