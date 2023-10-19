import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesIndex = () => {
  const cardStyle = {
    width: '350px', // Ajusta el ancho según tus necesidades
    height: '350px', // Ajusta la altura según tus necesidades
    position: 'relative',
    perspective: '1000px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  const textContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)', // Fondo semi-transparente
    transform: 'scaleY(0)', // Escala vertical inicialmente oculta
    transformOrigin: 'center', // Cambiar el origen de la transformación
    transition: 'transform 0.3s, opacity 0.3s', // Agregar transición a la escala y la opacidad
    opacity: 0, // Inicialmente oculto
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('.text-container').style.transform = 'scaleY(1)';
    e.currentTarget.querySelector('.text-container').style.opacity = 1;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('.text-container').style.transform = 'scaleY(0)';
    e.currentTarget.querySelector('.text-container').style.opacity = 0;
  };

  return (
    <section className="bg-sky-50 w-full p-4 gap-4 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:gird-cols-3 gap-4">
        <div className="relative inline-block md:mr-10" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/store">
            <img className="opacity-80" src="../public/image/pet's_accesories.png" alt="pet's_accesories_category" style={imageStyle} />
            <div className="text-container" style={textContainerStyle}>
              <button className="bg-gradient-to-r from-amber-500 via-amber-400 to-orange-200 p-2 rounded-2xl text-sky-800 text-xl text-center font-bold md:text-4xl">Pet's Accesories</button>
            </div>
          </Link>
        </div>
        <div className="relative inline-block md:ml-10" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/store">
            <img className="opacity-80" src="../public/image/suitcases.png" alt="suitcases_category" style={imageStyle} />
            <div className="text-container" style={textContainerStyle}>
              <button className="bg-gradient-to-r from-amber-500 via-amber-400 to-orange-200 p-2 rounded-2xl text-sky-800 text-xl text-center font-bold md:text-4xl">Suitcases</button>
            </div>
          </Link>
        </div>
        <div className="relative inline-block md:mr-10" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/store">
            <img className="opacity-80" src="../public/image/backpacks.png" alt="backpacks_category" style={imageStyle} />
            <div className="text-container" style={textContainerStyle}>
              <button className="bg-gradient-to-r from-amber-500 via-amber-400 to-orange-200 p-2 rounded-2xl text-sky-800 text-xl text-center font-bold md:text-4xl">Backpacks</button>
            </div>
          </Link>
        </div>
        <div className="relative inline-block md:ml-10" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/store">
            <img className="opacity-80" src="../public/image/travel_accesories.png" alt="travel_accesories_category" style={imageStyle} />
            <div className="text-container" style={textContainerStyle}>
              <button className="bg-gradient-to-r from-amber-500 via-amber-400 to-orange-200 p-2 rounded-2xl text-sky-800 text-xl text-center font-bold md:text-4xl">Travel Accesories</button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesIndex;
