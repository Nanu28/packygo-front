import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../components/Products/Products.jsx';
import { DataProvider, DataContext } from '../components/Context/DataContext.jsx';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate(); //
  const location = useLocation();
  const { data, cart, setCart } = useContext(DataContext);

  const buyProduct = (product) => {
    setCart([...cart, product]);
  };


  // Verifica que location.state sea una cadena y conviértela a minúsculas
  const searchQuery = location.state ? location.state.toLowerCase() : '';

  // Filtra los productos según el criterio de búsqueda
  const filteredProduct = data.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className='h-full'>

      <div className='flex gap-1 text-base pl-6 py-2 items-center bg-sky-100'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
        </svg>
        <Link to="/">Home</Link>
        <Link to="/store">/Store</Link>
        <p className='font-semibold'>/Admin</p>
      </div>

      <p className='text-xl bg-sky-100 pl-4 text-center'>
        Se encontraron <span className='font-bold'>{filteredProduct.length}</span> resultados:
      </p>
      <div className='bg-sky-100 flex flex-wrap justify-center gap-4 lg:p-10'>
        {filteredProduct.map(product => (
          <div className="w-56 p-3 m-4 shadow-gray-950 shadow-md bg-sky-50 flex flex-col rounded-lg" key={product._id}>
            <img src={product.photo} className="rounded-lg bg-cover w-56 h-56" />
            <h3 className="text-center text-base font-semibold">{product.name}</h3>
            <h4 className='text-lg font-semibold m-1 text-center '>{product.price}$</h4>
            <div className="flex justify-center items-center font-semibold gap-2">
              <button onClick={() => buyProduct(product)} className="bg-sky-800 hover:bg-yellow-600 text-white font-bold w-16 h-8 rounded-2xl">Buy</button>
              <button onClick={() => navigate(`/details/${product._id}`)} className="bg-sky-800 hover:bg-yellow-600 text-white font-bold w-16 h-8 rounded-2xl">Details</button>
            </div>
          </div>

        ))}
      </div>


    </div>
  );
};

export default SearchPage;
