
//import ProductCards from '../components/ProductCards.jsx'
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductContext } from '../components/Context/ProductContext.jsx';
import ListProduct from '../components/ListProduct.jsx'
import Filter from './../components/Filter.jsx';
import SearchPage from '../components/ListProduct.jsx'
import Products from '../components/Products/Products.jsx';



function Store() {
  const [category, setCategory] = useState([]);
  const [text, setText] = useState('');
  const [check, setCheck] = useState([]);
  const { active, setActive } = useContext(ProductContext);
  //const [active, setActive] = useState(true);

  //console.log(text)
  //console.log(check)



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

     const checkeados = (id,e) => {
      e.preventDefault(); // Evitar la recarga de la página
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
      <section className=' lg:block w-full h-42 mb-12 mt-12 bg-slate-300 text-xl p-3'>
        {/*         <form action="">
          {category.map((category) => (
           <button
           onClick={(e) => checkeados(category._id, e)}
           key={category._id}
           className='rounded w-32 p-3 m-1 mb-2 bg-yellow-500 transition-opacity hover:opacity-70 focus:outline-none active:bg-opacity-70'
         >
           {category.name}
         </button>
         
          ))}
        </form> */}          

           
            <Filter />

        

      </section>   

      
      
      


      <section className='bg-red-300 w-full h-200 flex flex-col items-center'>
        <h1 className='text-4xl p-4'>Products </h1>
        {/*   <input
          onInput={(e) => setFilters('text', e.target.value)}
          className='rounded p-4 w-42 h-12 md:w-3/4 mt-24'
          type="text"
          placeholder='🔍 Search products'
        /> */}
    
      </section>


{/*         <div className='bg-amber-400 w-3/4 overflow-x-hidden'>
        <ProductCards 
        searchText={text.toString()} 
        searchCheck={check.toString()} />
      </div> 
 */}
{/*       <div className='bg-green-300 flex flex-wrap w-full'>
        <ListProduct />
      </div> */}
      
      <section className='bg-pink-500 w-full flex flex-wrap '>
        <Products 
          searchText={text.toString()} 
          searchCheck={check.toString()}/>

      </section>





    </div>
  );
}

export default Store;
