import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DataProvider, DataContext } from '../components/Context/DataContext.jsx';
import Products from '../components/Products/Products.jsx';
import carro from '../../public/image/maletas.png';

function Store() {
  const [category, setCategory] = useState([]);
  const [text, setText] = useState('');
  const [check, setCheck] = useState([]);

  const { data, cart, setCart } = useContext(DataContext);

    // Estado inicial con una categoría ficticia que no existe
  const [selectedCategory, setSelectedCategory] = useState('all');
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? 'all' : category);
  };


  const getCategory = async () => {
    try {
      const response = await axios.get('http://localhost:8000/categories');
      console.log(response);
      if (Array.isArray(response.data)) {
        setCategory(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const checkeados = (id, e) => {
    e.preventDefault(); // Evitar la recarga de la página
    if (!check.includes(id)) {
      setCheck([...check, id]);
    } else {
      setCheck(check.filter((category_id) => category_id !== id));
    }
  }

  useEffect(() => {
    getCategory();
  }, []);

  const setFilters = (filterName, filterValue) => {
    if (filterName === 'text') {
      setText(filterValue);
    } else if (filterName === 'check') {
      if (!check.includes(filterValue)) {
        setCheck([...check, filterValue]);
      } else {
        setCheck(check.filter((category) => category !== filterValue));
      }
    }
  }

  useEffect(() => {
    getCategory();
  }, [text, check]);

  return (
    <>
      <div className="relative w-full h-40 bg-cover bg-center md:h-48" style={{ backgroundImage: `url('../../public/image/store_banner.png')` }}>
        <div className="flex flex-col w-full pt-8 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 md:p-8">
          <p className="text-lg text-slate-800 md:text-3xl">Welcome to the paradise</p>
          <p className="text-lg text-slate-800 md:text-3xl">of travelers</p>
          <p className="text-base text-yellow-500 font-bold md:text-lg">All you need is here</p>
          <img className="w-6 md:mt-3 md:w-10" src="../../public/image/arrow_banner.png" alt="arrow_banner" />
        </div>
      </div>    
   

       <div className='flex gap-1 text-base pl-6 py-2 items-center bg-sky-100'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
          </svg>
          <Link to="/">Home</Link>
          <p className='font-semibold'>/Store</p>
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
      <div className='flex w-full min-h-screen bg-green-700 flex-wrap '>
        <div className='flex-1 bg-sky-100 overflow-x-hidden'>
        <Products selectedCategory={selectedCategory} />

        </div>


      </div>
    </>
  );
}

export default Store;
