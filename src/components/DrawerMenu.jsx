import React, { useRef, useEffect } from 'react';
import Display from '../components/Display.jsx';

const DrawerMenu = ({ isOpen, onClose }) => {
  // Ref para el DrawerMenu
  const drawerRef = useRef(null);
  
  // Función para cerrar el DrawerMenu si se hace clic fuera de él
  const closeMenuOnClickOutside = (event) => {
    if (isOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
      onClose(); // Llama a la función onClose para cerrar el DrawerMenu
    }
  };

  // Agregar un efecto para el evento "mousedown" al montar el componente
  useEffect(() => {
    document.addEventListener('mousedown', closeMenuOnClickOutside);

    return () => {
      // Eliminar el event listener cuando el componente se desmonte
      document.removeEventListener('mousedown', closeMenuOnClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`bg-slate-200 rounded-r-full bg-opacity-70 w-full h-full md:w-72 absolute top-18 left-0 z-40 ${isOpen ? 'block' : 'hidden'}`}>
      <div className='flex flex-col items-start'>
        <div className='flex flex-col w-full justify-center items-center'>
          <Display />
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;
