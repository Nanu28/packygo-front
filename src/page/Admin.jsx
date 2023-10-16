import { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [Categories, setCategories] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/products`);
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getCategories = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/categories`);
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getProducts()
    getCategories()
  }, []);

  return (
    <>
      <div className="relative w-full h-36 bg-cover bg-center md:h-48"
        style={{ backgroundImage: `url('../../public/image/admin_banner.png')` }}>
        <div class="flex flex-col w-full items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 md:p-8">
          <p class="text-xl text-slate-800 md:text-3xl">We give you what you need to</p>
          <p class="text-xl text-slate-800 md:text-3xl">make</p>
          <p className="text-base text-yellow-500 font-bold md:text-lg"> the right decision</p>
          <img className='w-6 mt-3 md:w-10' src="../../public/image/arrow_banner.png" alt="arrow_banner" />
        </div>
      </div>

      <div className="flex flex-row bg-sky-100 mx-auto px-7">
        <div className='bg-sky-100 w-fit my-4' >
          <p className="text-center text-2xl font-bold text-sky-800 ">
            Panel Admin Products and Stock
          </p>
          <table className="w-full text-justify border-collapse border border-gray-300">
            <thead className='text-center'>
              <tr>
                <th className="border border-black p-2">Product</th>
                <th className="border border-black p-2">Category</th>
                <th className="border border-black p-2">Stock</th>
                <th className="border border-black p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, _id) => (
                <tr className='border border-black p-2' key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.category.name}</td>
                  <td>{product.stock}</td>
                  <td className='flex justify-around'>
                    <button className='bg-green-300 p-1 rounded-lg'>Edit</button>
                    <button className='bg-red-500 rounded-lg p-1'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='bg-sky-50 m-1 shadow-gray-950 shadow-md rounded-lg '>
            <form className="mt-8"/*  onSubmit={handleRegisterSubmit} */>
              <div className="max-w-lg">

                <p className="text-xl font-bold text-center" >Add a new product</p>
                <div className="py-1">
                  <span className="px-1 text-sm text-gray-600">Categories</span>
                  <select
                    //onChange={handleTitle}
                    //ref={chapterTitle}
                    //value={selectedProduc}
                    className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  >
                    {Categories &&
                      Categories.map((category) => {
                        return (
                          <option key={category.name} value={category.name}>
                            {category.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="py-1">

                  <span className="px-1 text-sm text-gray-600">Product</span>
                  <input

                    type="text"
                    className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />

                </div>
                <div className="py-1">
                  <span className="px-1 text-sm text-gray-600">Description</span>
                  <input

                    type="text"
                    className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>
                <div className="py-1">
                  <span className="px-1 text-sm text-gray-600">Photo </span>
                  <input

                    type="text"
                    className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>

                <div className='flex justify-center '>
                  <button
                    className='p-3 m-3 font-bold text-black ml-5 w-28 bg-yellow-400 rounded-full'
                    type="submit" onClick={() => { /* navigate('/') */ }} >go
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;