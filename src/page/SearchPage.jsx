import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../components/Products/Products.jsx';
import { DataProvider, DataContext } from '../components/Context/DataContext.jsx';
import { useNavigate } from "react-router-dom";

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
    <div className='bg-green-200 h-full'>
      <p className='text-2xl'>
        Se encontraron <span>{filteredProduct.length}</span> resultados:
      </p>
      <div className='bg-red-400 flex flex-wrap '>
        {filteredProduct.map(product => (
                  <div className="w-56 bg-slate-200 p-3 m-4 " key={product._id}>
                  <img src={product.photo} className="w-56 h-56" />
                  <h3>{product.name}</h3>
                  <h4>{product.price}$</h4>
                  <button onClick={() => buyProduct(product)} className="bg-blue-400 w-16 h-8 rounded-lg">Buy</button>
                  <button onClick={() => navigate(`/details/${product._id}`)} className="bg-blue-400 w-16 h-8 rounded-lg">Details</button>
                </div>
          
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
