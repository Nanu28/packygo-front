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
      <div className="container max-w-full mx-auto md:py-24 px-6 flex flex-col">
        <div className='bg-red-200 w-full' >
          <p className="text-center text-2xl font-bold text-black">
            Panel Admin Productos y Stock
          </p>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-black p-2">Poducto </th>
                <th className="border border-black p-2">Categoria</th>
                <th className="border border-black p-2">Stock</th>
                <th className="border border-black p-2">Accion</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, _id) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.category.name}</td>
                  <td>{product.stock}</td>
                  <td className='flex justify-around'>
                    <button className='bg-emerald-400 p-1 rounded-lg'>Edit</button>
                    <button className='bg-red-400 rounded-lg p-1'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='bg-blue-200 w-full'>
          <form className="mt-8"/*  onSubmit={handleRegisterSubmit} */>
            <div className="mx-auto max-w-lg">

              <p className="text-xl font-bold" >Añadir un producto</p>
              <div className="py-1">
                <span className="px-1 text-sm text-gray-600">Categorias</span>
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

                <span className="px-1 text-sm text-gray-600">Porducto</span>
                <input

                  type="text"
                  className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                />

              </div>
              <div className="py-1">
                <span className="px-1 text-sm text-gray-600">Descropcion</span>
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
                  className='p-3 m-3 font-bold text-black ml-5  w-28 bg-yellow-400 rounded-full'
                  type="submit" onClick={() => { /* navigate('/') */ }} >go
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Admin;