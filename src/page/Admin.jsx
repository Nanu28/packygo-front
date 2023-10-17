import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  const handleSubmit = async (e) => {
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
      await axios.post('http://localhost:8000/products', productData);
      console.log('Producto creado exitosamente.');
    } catch (error) {
      console.log('Error:', error);
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
      setEditingProductId(null);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      console.log('Producto eliminado exitosamente.');
      getProducts(); // Recargar la lista de productos después de eliminar
    } catch (error) {
      console.log('Error:', error);
    }
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
    <div className="container max-w-full mx-auto md:py-24 px-6 flex flex-col">
      {/* Formulario de Creación */}
      <div className="bg-blue-200 w-full">
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="mx-auto max-w-lg">
            <p className="text-xl font-bold">Añadir un producto</p>
            <div className="py-1">
              <span className="px-1 text-sm text-gray-600">Categorías</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="py-1">
              <span className="px-1 text-sm text-gray-600">Nombre del Producto</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="py-1">
              <span className="px-1 text-sm text-gray-600">Descripción</span>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="py-1">
              <span className="px-1 text-sm text-gray-600">Cantidad</span>
              <input
                type="number"
                value={quanty}
                onChange={(e) => setQuanty(e.target.value)}
              />
            </div>
            <div className="py-1">
              <span className="px-1 text-sm text-gray-600">Precio</span>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="py-1">
              <span className="px-1 text-sm text-gray-600">Stock</span>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div className="py-1">
              <span className="px-1 text-sm text-gray-600">Foto</span>
              <input
                type="file"
                onChange={handleImageUpload}
              />
            </div>
            {photo && (
              <img src={photo} alt="Preview" style={{ maxWidth: '100px' }} />
            )}
            <div className='flex justify-center'>
              <button
                className='p-3 m-3 font-bold text-black ml-5 w-28 bg-yellow-400 rounded-full'
                type="submit"
              >
                Crear
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Lista de Productos */}
      <div className='bg-red-200 w-full'>
        <p className="text-center text-2xl font-bold text-black">
          Panel Admin Productos y Stock
        </p>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-black p-2">Producto</th>
              <th className="border border-black p-2">Categoría</th>
              <th className="border border-black p-2">Stock</th>
              <th className="border border-black p-2">Acción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.category.name}</td>
                <td>{product.stock}</td>
                <td className='flex justify-around'>
                  <button
                    className='bg-emerald-400 p-1 rounded-lg'
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
                    className='bg-red-400 rounded-lg p-1'
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

      {/* Campos para editar */}
      {editingProductId && (
        <div className="bg-green-200 w-full">
          <form className="mt-8">
            <div className="mx-auto max-w-lg">
              <p className="text-xl font-bold">Editar Producto</p>
              <div className="py-1">
                <span className="px-1 text-sm text-gray-600">Categorías</span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Selecciona una categoría</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="py-1">
                <span className="px-1 text-sm text-gray-600">Nombre del Producto</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="py-1">
                <span className="px-1 text-sm text-gray-600">Descripción</span>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="py-1">
                <span className="px-1 text-sm text-gray-600">Cantidad</span>
                <input
                  type="number"
                  value={quanty}
                  onChange={(e) => setQuanty(e.target.value)}
                />
              </div>
              <div className="py-1">
                <span className="px-1 text-sm text-gray-600">Precio</span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="py-1">
                <span className="px-1 text-sm text-gray-600">Stock</span>
                <input
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
              <div className="py-1">
                <span className="px-1 text-sm text-gray-600">Foto</span>
                <input
                  type="file"
                  onChange={handleImageUpload}
                />
              </div>
              {photo && (
                <img src={photo} alt="Preview" style={{ maxWidth: '100px' }} />
              )}
              <div className="flex justify-center">
                <button
                  className="p-3 m-3 font-bold text-black ml-5 w-28 bg-green-400 rounded-full"
                  onClick={handleEdit}
                >
                  Guardar
                </button>
                <button
                  className="p-3 m-3 font-bold text-black ml-5 w-28 bg-red-400 rounded-full"
                  onClick={() => setEditingProductId(null)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admin;
