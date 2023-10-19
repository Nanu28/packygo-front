import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Products from '../components/Products/Products.jsx';
import { DataProvider, DataContext } from '../components/Context/DataContext.jsx';
import { useNavigate } from "react-router-dom";
import Filter from './../components/Filter.jsx';
import carro from '../../public/image/maletas.png';

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, cart, setCart } = useContext(DataContext);

  const buyProduct = (product) => {
    setCart([...cart, product]);
  };

  // Estado inicial con una categoría ficticia que no existe
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? 'all' : category);
  };

  // Verifica que location.state sea una cadena y conviértela a minúsculas
  const searchQuery = location.state ? location.state.toLowerCase() : '';

  // Filtra los productos según la categoría seleccionada y el criterio de búsqueda
  const filteredProducts = data.filter((product) => {
    return (
      (selectedCategory === 'all' || product.category.name === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <div className='h-full'>

      <div className='flex gap-1 text-base pl-6 py-2 items-center bg-sky-100'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
        </svg>
        <Link to="/">Home</Link>
        <Link className='font-semibold' to="/store">/Store</Link>
      </div>

      <div className={`flex-grow bg-gray-200 text-gray-500 my-2 py-2`}>
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          {['all', ...data.reduce((categories, product) => {
            if (!categories.includes(product.category.name)) {
              categories.push(product.category.name);
            }
            return categories;
          }, [])].map((category) => (
            <button
              key={category}
              className={`bg-sky-800 hover:bg-yellow-600 text-white text-base font-bold h-8 w-24 rounded-2xl mt-2 p-4 flex items-center justify-center  ${selectedCategory === category
                ? 'bg-sky-800 text-white'
                : 'bg-gray-300 text-gray-600'
                } rounded-full`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}

          <Link to="/cart" className="p-1 w-14 md:w-20">
            <img src={carro} alt="" />
          </Link>
        </div>
      </div>

      <p className="text-xl bg-sky-100 pl-4">
      results <span className="font-bold">{filteredProducts.length}</span> were found:
      </p>
      <div className="bg-sky-100 flex flex-wrap justify-center gap-4 lg:p-10">
        {filteredProducts.map((product) => (
          <div key={product._id} className="w-72 h-fit items-center py-2 shadow-gray-950 shadow-md bg-sky-50 flex flex-col rounded-lg">
            <div>
              <img className="rounded-lg w-40 h-56 bg-cover" src={product.photo} alt={product.name} />
            </div>
            <div className="h-10 rounded-lg">
              <h2 className="text-center text-sm font-semibold">{product.name}</h2>
              <p className="text-sm italic capitalize">{product.category.name}</p>
            </div>
            <div className="flex justify-center items-center font-semibold gap-2">
              <button
                className="bg-sky-800 hover:bg-yellow-600 text-white text-base font-bold h-8 w-20 rounded-2xl mt-2 flex items-center justify-center"
                onClick={() => buyProduct(card)}
              >
                Add
              </button>

              <Link
                to={`/details/${product._id}`}
                className="bg-sky-800 hover:bg-yellow-600 text-white text-base font-bold h-8 w-20 rounded-2xl mt-2 flex items-center justify-center"
              >
                Details
              </Link>
            </div>
            <div className="flex items-center text-lg font-semibold">
              <p className="mt-1">$ {product.price}</p>
            </div>
          </div>
        ))}
      </div>







    </div>
  );
};

export default SearchPage;
