
import ProductCards from '../components/ProductCards.jsx'
import { Link } from 'react-router-dom';
import Products from '../components/Products/Products.jsx';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Store() {
  const [category, setCategory] = useState([]);
  const [text, setText] = useState('');
  const [check, setCheck] = useState([]);
  console.log(text)
  console.log(check)

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
  };
  const checkeados = (id) => {
    if (!check.includes(id)) {
      setCheck([...check, id]);
    } else {
      setCheck(check.filter((category_id) => category_id !== id));
    }
  };
  
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
  };
  
  useEffect(() => {
    getCategory();
  }, [text, check]);

  return (

    <div className='flex w-full min-h-screen bg-green-700 flex-wrap '>
      <section className='bg-red-300 w-full h-200 flex flex-col items-center'>
        <h1 className='text-4xl p-4'>Products</h1>
        <input
          onInput={(e) => setFilters('text', e.target.value)}
          className='rounded p-4 w-42 h-12 md:w-3/4 mt-24'
          type="text"
          placeholder='🔍 Search products'
        />
      </section>

      <section className=' lg:block w-72 h-30 mb-12 mt-12 bg-slate-300 text-xl p-3'>
        <form action="">
          {category.map((category) => (
            <label htmlFor={category.name} className='mb-4' key={category._id}>
              <input
                onClick={() => setFilters('check', category._id)}
                className='checked:bg-yellow-500'
                type="checkbox"
                name={category.name}
                id={category.name}
              />
              {category.name}
            </label>
          ))}
        </form>
      </section>

      <div className='bg-amber-400 w-3/4 overflow-x-hidden'>
        <ProductCards 
        searchText={text.toString()} 
        searchCheck={check.toString()} />
      </div>
    </div>
  );
}

export default Store;
