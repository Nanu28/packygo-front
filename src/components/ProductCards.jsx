import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/ConfirmacionModal.jsx';
import axios from 'axios';

function ProductCards(props) {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const navigateToDetails = (productId) => {
    navigate(`/details/${productId}`);
  };

  const handleAddClick = (productId) => {
    setSelectedProductId(productId);
    setShowConfirmation(true);
  };

  const handleContinueShopping = () => {
    setShowConfirmation(false);
    navigate('/store');
  };

  const handleGoToCart = () => {
    setShowConfirmation(false);
    // Agrega aquí la lógica para ir al carrito
    navigate('/cart');
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };
  let array = [... props.searchCheck]
  const getProducts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/products?name=${props.searchText}&category=${array}`);
      setProducts(data.products);
      console.log(data.products)
    } catch (error) {
      if (error.response) {
        console.log("Error de respuesta del servidor:", error.response.data);
      } else if (error.request) {
        console.log("Error de red o falta de respuesta del servidor:", error.request);
      } else {
        console.log("Error en la configuración de la solicitud:", error.message);
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, [props.searchText, props.searchCheck]);

  return (
    <section className="flex flex-wrap gap-4 lg:p-10">
      {products.map((product) => (
        <div key={product._id} className="w-[290px] items-center bg-slate-300 flex flex-col rounded-lg">
          <div>
            <img className="rounded-lg h-72" src={product.photo} alt={product.name} />
          </div>
          <div className="h-1/2 m-3 bg-red-200 rounded-lg">
            <h2 className="text-center text-lg font-medium">{product.name}</h2>
            <p>{product.category.name}</p>
          </div>
          <div className="flex justify-around items-center m-3">
            <p className="text-xl bg-yellow-800 font-medium m-2">${product.price}</p>
            <button
              className="bg-blue-400 w-20 h-10 text-xl font-normal p-2 rounded-lg"
              onClick={() => handleAddClick(product._id)}
            >
              Add
            </button>
            <button
              className="bg-blue-400 w-20 h-10 text-xl font-normal p-2 rounded-lg"
              onClick={() => navigateToDetails(product._id)}
            >
              Details
            </button>
          </div>
        </div>
      ))}
      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={handleCancel}
        onContinueShopping={handleContinueShopping}
        onGoToCart={handleGoToCart}
      />
    </section>
  );
}

export default ProductCards;
