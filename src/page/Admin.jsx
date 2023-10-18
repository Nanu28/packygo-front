import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quanty, setQuanty] = useState(0);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [photo, setPhoto] = useState("");
  const [editingProductId, setEditingProductId] = useState(null);

  const getProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/products');
      setProducts(data.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/categories');
      setCategories(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCreate = async (event) => {
    event.preventDefault(); // Evitar la recarga de la página
  
    const productData = {
      category,
      name,
      description,
      quanty,
      price,
      stock,
      photo,
    };
  
    try {
      await axios.post('http://localhost:8000/products', productData);
      console.log('Producto creado exitosamente.');
  
      // Mostrar una alerta de éxito
      Swal.fire('Éxito', 'El producto se creó con éxito', 'success');
  
      // Limpia los campos del formulario o realiza alguna otra acción si es necesario
      setCategory("");
      setName("");
      setDescription("");
      setQuanty(0);
      setPrice(0);
      setStock(0);
      setPhoto("");
    } catch (error) {
      console.log('Error:', error);
  
      // Mostrar una alerta de error
      Swal.fire('Error', 'No se pudo crear el producto', 'error');
    }
  };
  

  const handleEdit = async (e) => {
    e.preventDefault();

    const productData = {
      category,
      name,
      description,
      quanty,
      price,
      stock,
      photo,
    };

    try {
      await axios.put(`http://localhost:8000/products/${editingProductId}`, productData);
      console.log('Producto actualizado exitosamente.');

      // Mostrar una alerta de éxito
      Swal.fire('Éxito', 'El producto se actualizó con éxito', 'success');

      // Limpia los campos del formulario o realiza alguna otra acción si es necesario
      setEditingProductId(null);
      setCategory("");
      setName("");
      setDescription("");
      setQuanty(0);
      setPrice(0);
      setStock(0);
      setPhoto("");
    } catch (error) {
      console.log('Error:', error);

      // Mostrar una alerta de error
      Swal.fire('Error', 'No se pudo actualizar el producto', 'error');
    }
  };

  const handleDelete = async (productId) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:8000/products/${productId}`);
          console.log('Producto eliminado exitosamente.');

          // Mostrar una alerta de éxito
          Swal.fire('Éxito', 'El producto se eliminó con éxito', 'success');

          getProducts();
        } catch (error) {
          console.log('Error:', error);

          // Mostrar una alerta de error
          Swal.fire('Error', 'No se pudo eliminar el producto', 'error');
        }
      }
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <div className='flex gap-1 text-base pl-6 py-2 items-center bg-sky-100'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
        </svg>
        <Link to="/">Home</Link>
        <Link className='font-semibold' to="#">/Admin</Link>
      </div>

      <div className="bg-sky-100 mx-auto py-4 px-6 flex flex-col items-center gap-4 md:py-5">
        {/*Formulario de Creación*/}
        <div className="shadow-gray-950 shadow-md bg-sky-50 rounded-sm flex flex-row items-center justify-center md:w-2/4">
          <form className="mt-4 px-2 md:px-4" onSubmit={handleCreate}>
            <p className="text-xl font-bold text-center pb-1">Add products</p>

            <div className="py-1">
              <label htmlFor="category" className="text-sm text-gray-600">
                Categories
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="py-1">
              <label htmlFor="name" className="text-sm text-gray-600">
                Product name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-1 border rounded-md"
              />
            </div>

            <div className="py-1">
              <label htmlFor="description" className="text-sm text-gray-600">
                Description
              </label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-1 border rounded-md"
              />
            </div>

            <div className="py-1">
              <label htmlFor="quanty" className="text-sm text-gray-600">
                Quanty
              </label>
              <input
                type="number"
                id="quanty"
                value={quanty}
                onChange={(e) => setQuanty(e.target.value)}
                className="w-full p-1 border rounded-md"
              />
            </div>

            <div className="py-1">
              <label htmlFor="price" className="text-sm text-gray-600">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-1 border rounded-md"
              />
            </div>

            <div className="py-1">
              <label htmlFor="stock" className="text-sm text-gray-600">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full p-1 border rounded-md"
              />
            </div>

            <div className="py-1">
              <label htmlFor="photo" className="text-sm text-gray-600">
                Photo
              </label>
              <input
                type="text"
                id="photo"
                onChange={handleImageUpload}
                className="w-full p-1 border rounded-md"
              />
            </div>

            {photo && (
              <img src={photo} alt="Preview" style={{ maxWidth: '100px' }} />
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-28 p-1 m-3 font-bold text-white ml-5 bg-sky-800 hover:bg-yellow-600 rounded-full md:p-3"
              >
                Create
              </button>
            </div>
          </form>
        </div>


        {/* Lista de Productos */}
        <div className="shadow-gray-950 shadow-md bg-sky-50 rounded-sm w-full py-4 md:py-10 md:w-2/3 md:px-5">
          <p className="text-xl font-bold text-center px-2 text-black pb-3">
            Panel Admin Productos y Stock
          </p>
          <table className="border border-collapse border-gray-700 w-full">
            <thead className="text-center text-xs md:text-base">
              <tr className="border">
                <th className="border p-1 md:p-2">Producto</th>
                <th className="border p-1 md:p-2">Categoría</th>
                <th className="border p-1 md:p-2">Stock</th>
                <th className="border p-1 md:p-2">Acción</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="border">
                  <td className="border text-xs md:pl-6 md:text-base">{product.name}</td>
                  <td className="border text-center text-xs md:text-base">{product.category.name}</td>
                  <td className="border text-center text-xs md:text-base">{product.stock}</td>
                  <td className="flex justify-around border text-xs md:text-base">
                    <button
                      className="bg-sky-800 hover:bg-yellow-600 text-white p-1 rounded-lg"
                      onClick={() => {
                        setEditingProductId(product._id);
                        setCategory(product.category._id);
                        setName(product.name);
                        setDescription(product.description);
                        setQuanty(product.quanty);
                        setPrice(product.price);
                        setStock(product.stock);
                        setPhoto(product.photo);
                      }}
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-400 hover:bg-red-500 rounded-lg p-1"
                      onClick={() => handleDelete(product._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        {/* Campos para editar*/}
        {editingProductId && ( 
          <div className=" shadow-gray-950 shadow-md bg-sky-50 rounded-sm w-full px-2 py-2 md:w-1/2">
            <form className="px-2 md:px-4">
              <div>
                <p className="text-xl text-center font-bold">Edit Product</p>

                <div className="py-1">
                  <label htmlFor="category" className="text-sm text-gray-600">
                    Categories
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select category</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="py-1">
                  <label htmlFor="name" className="text-sm text-gray-600">
                    Product name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div className="py-1">
                  <label htmlFor="description" className="text-sm text-gray-600">
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div className="py-1">
                  <label htmlFor="quanty" className="text-sm text-gray-600">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quanty"
                    value={quanty}
                    onChange={(e) => setQuanty(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div className="py-1">
                  <label htmlFor="price" className="text-sm text-gray-600">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div className="py-1">
                  <label htmlFor="stock" className="text-sm text-gray-600">
                    Stock
                  </label>
                  <input
                    type="number"
                    id="stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div className="py-1">
                  <label htmlFor="photo" className="text-sm text-gray-600">
                    Photo
                  </label>
                  <input
                    type="text"
                    onChange={handleImageUpload}
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                {photo && (
                  <img src={photo} alt="Preview" style={{ maxWidth: '100px' }} />
                )}

                <div className="flex justify-center">
                  <button
                    className="w-28 p-1 m-3 font-bold text-white ml-5 bg-sky-800 hover:bg-yellow-600 rounded-full md:p-3"
                    onClick={handleEdit}
                  >
                    Save
                  </button>
                  <button
                    className="w-28 p-1 m-3 font-bold text-white ml-5 bg-sky-800 hover:bg-yellow-600 rounded-full md:p-3"
                    onClick={() => setEditingProductId(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Admin;
