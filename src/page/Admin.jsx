import React from 'react';

const Admin = () => {
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
                          <td>Peppa</td>
                          <td>Pig</td>
                          <td>200</td>
                          <td>Borrar/Editar</td>






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
                  <option> Categoria 1 </option>
                  <option> Categoria 2 </option>
                  <option> Categoria 3 </option>
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
