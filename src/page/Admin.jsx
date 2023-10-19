import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { ref } from 'firebase/storage';
import { storage } from '../../firebase/firebase.js';
import { uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [photo, setPhoto] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;
  const displayedProducts = products.slice(pagesVisited, pagesVisited + productsPerPage);
  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = (newPage) => {
    setPageNumber(newPage);
  };

  const pageLinks = [];
  for (let i = 0; i < pageCount; i++) {
    pageLinks.push(
      <button
        key={i}
        onClick={() => changePage(i)}
        disabled={pageNumber === i}
        className="page-link w-24 p-2 bg-amber-300 font-semibold text-base"
      >
        {i + 1}
      </button>
    );
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
  
      const storageRef = ref(storage, `images/${file.name}`);
      try {
        const metadata = {
          contentType: 'image/jpeg',
        };
        
        await uploadBytesResumable(storageRef, file, metadata);
        const downloadURL = await getDownloadURL(storageRef);
  
        setPhoto(downloadURL);
        console.log('URL de descarga de la imagen:', downloadURL);
      } catch (error) {
        console.error('Error al cargar la imagen en Firebase Storage:', error);
      }
    }
  };

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
    event.preventDefault();

    const productData = {
      category,
      name,
      description,
      price: parseFloat(price), // Convertir a número
      stock: parseInt(stock),    // Convertir a número
      photo,
    };
    
    try {
      await axios.post('http://localhost:8000/products', productData);
      console.log('Successfully created product.');
      getProducts();
      Swal.fire('Success', 'The product was created successfully', 'success');
      setCategory('');
      setName('');
      setDescription('');
      setPrice(0);
      setStock(0);
      setPhoto('');
    } catch (error) {
      console.log('Error:', error);
      Swal.fire('Error', 'Product could not be created', 'error');
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    const productData = {
      category,
      name,
      description,
      price,
      stock,
      photo,
    };

    try {
      await axios.put(`http://localhost:8000/products/${editingProductId}`, productData);
      console.log('Product updated successfully.');
      getProducts();
      Swal.fire('Success', 'The product was successfully updated', 'success');
      setEditingProductId(null);
      setCategory('');
      setName('');
      setDescription('');
      setPrice(0);
      setStock(0);
      setPhoto('');
    } catch (error) {
      console.log('Error:', error);
      Swal.fire('Error', 'Product could not be updated', 'error');
    }
  };

  const handleDelete = async (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:8000/products/${productId}`);
          console.log('Product successfully removed');
          Swal.fire('Success', 'The product was successfully removed', 'success');
          getProducts();
        } catch (error) {
          console.log('Error:', error);
          Swal.fire('Error', 'Could not delete product', 'error');
        }
      }
    });
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };


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
                <label htmlFor="image" className="text-sm text-gray-600">
                Photo
                  <input
                    type="file"
                    id="photo"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
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

        {/* SEARCH */}
        <div className="flex w-full h-10 justify-center items-center">
          <input
            className='px-6 p-1 rounded-l-lg border-2'
            type="search"
            name="valueSearch"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
          />
          <button className=" btn-search px-3 bg-amber-300 hover.bg-yellow-600 rounded-r-lg text-sky-800  text-base font-semibold p-1">Search</button>
        </div>


        {/*TABLA*/}
        <div className="shadow-gray-950 shadow-md bg-sky-50 rounded-sm w-full py-4 md:py-10 md:w-2/3 md:px-5">
          <p className="text-xl font-bold text-center px-2 text-black pb-3">Admin Panel Products and Stock</p>
          <table className="border border-collapse border-gray-700 w-full">
            <thead className="text-center text-xs md:text-base">
              <tr className="border">
                <th className="border p-1 md:p-2">Product</th>
                <th className="border p-1 md:p-2">Category</th>
                <th className="border p-1 md:p-2">Stock</th>
                <th className="border p-1 md:p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedProducts
                .filter((product) =>
                  searchTerm === "" || product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((product) => (
                  <tr key={product._id} className="border">
                    <td className="border text-xs md:pl-6 md:text-base">{product.name}</td>
                    <td className="border text-center text-xs md:text-base">{product.category.name}</td>
                    <td className="border text-center text-xs md:text-base">{product.stock}</td>
                    <td className="flex justify-around border text-xs md:text-base">
                      <button
                        className="bg-sky-800 hover.bg-yellow-600 text-white p-1 rounded-lg"
                        onClick={() => {
                          setEditingProductId(product._id);
                          setCategory(product.category._id);
                          setName(product.name);
                          setDescription(product.description);
                          setPrice(product.price);
                          setStock(product.stock);
                          setPhoto(product.photo);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-400 hover.bg-red-500 rounded-lg p-1"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

        </div>

        <div className='flex w-3/5 p-3 justify-center items-center'>
          <button
            onClick={() => changePage(pageNumber - 1)}
            disabled={pageNumber === 0}
            className={`page-link rounded-tl-lg rounded-bl-lg w-24 p-2 bg-amber-300 font-semibold text-base my-button`}
          >
            Previous
          </button>
          {pageLinks}
          <button
            onClick={() => changePage(pageNumber + 1)}
            disabled={pageNumber === pageCount - 1}
            className={`page-link w-24 rounded-tr-lg rounded-br-lg p-2 bg-amber-300 font-semibold text-base my-button`}
          >
            Next
          </button>


        </div>



        {editingProductId && (
          <div className='w-full flex justify-center items-center' >
       
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
                          type="file"
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
        )}
      </div>
    </>
  );
};

export default Admin;
