import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <div class="relative w-full h-36 bg-cover bg-center md:h-48"
        style={{ backgroundImage: `url('../../public/image/admin_banner.png')` }}>
        <div class="flex flex-col w-full items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 md:p-8">
          <p class="text-xl text-slate-800 md:text-3xl">Nice to see you again</p>
          <p class="text-xl text-slate-800 md:text-3xl">enjoy your</p>
          <p class="text-base text-yellow-500 font-bold md:text-lg">pack&Go trip</p>
          <img className='w-6 mt-3 md:w-10' src="../../public/image/arrow_banner.png" alt="arrow_banner" />
        </div>
      </div>

      <div className='flex gap-1 text-base pl-6 py-2 items-center bg-sky-100'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
        </svg>
        <Link to="/">Home</Link>
        <Link className='font-semibold' to="#">/Admin</Link>
      </div>

      <div className="container max-w-full mx-auto md:py-24 px-6 flex flex-col bg-sky-100">
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
              <td>Peppa</td>
              <td>Pig</td>
              <td>200</td>
              <td>Borrar/Editar</td>






            </tbody>
          </table>
        </div>

        <div className='bg-sky-100 w-full'>
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
                  <option> Categoria 1 </option>
                  <option> Categoria 2 </option>
                  <option> Categoria 3 </option>
                </select>
              </div>
              <div className="py-1">

                <span className="px-1 text-sm text-gray-600">Producto</span>
                <input

                  type="text"
                  className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                />

              </div>
              <div className="py-1">
                <span className="px-1 text-sm text-gray-600">Descripcion</span>
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
                  className='p-3 m-3 font-bold text-white ml-5 w-28 bg-sky-800 hover:bg-yellow-600 rounded-full'
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
