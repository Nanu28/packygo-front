

import React, { useEffect, useState } from 'react';
import img from '../../public/image/maleta.png';
import maleta from '../../public/image/maleta1.png';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/ConfirmacionModal.jsx';
import axios from 'axios';



function ProductCards(props) {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [card, setCard] = useState([]);
  //console.log(card)
  const [selectedCardId, setSelectedCardId] = useState(null);
  //console.log(props.searchText)

  const navigateToDetails = (cardId) => {
    navigate(`/details/${cardId}`);
    navigate(`/details`);
  };

  const handleAddClick = (cardId) => {
    setSelectedCardId(cardId);
    setShowConfirmation(true);
  };

  const handleContinueShopping = () => {
    setShowConfirmation(false);
    navigate('/store');
  };

  const handleGoToCart = () => {
    setShowConfirmation(false);
    // Coloca aquí la lógica para ir al carrito
    navigate('/cart');
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const getCard = async () => {
    try {
      // Agregar el valor de búsqueda a la URL de la solicitud GET
      const { data } = await axios.get(`http://localhost:8000/products?name=${props.searchText}`);
      //console.log(data);
      setCard(data.products);
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    // Filtrar las tarjetas según el texto de búsqueda
    const filteredCards = card.filter((card) =>
      card.name.toLowerCase().includes(props.searchText.toLowerCase())
    );

    getCard()
    setCard(filteredCards);

  }, [props.searchText]);


  return (
    <section className="flex flex-wrap justify-center gap-4 lg:p-10">
      {/* Card 1 */}

      {card.map((card, _id) => (

        <div key={_id} className="w-72 h-fit items-center py-2 shadow-gray-950 shadow-md bg-sky-50 flex flex-col rounded-lg">
          <div>
            <img className='rounded-lg w-40 h-56 bg-cover' src={card.photo} alt="" />
          </div>
          <div className="h-10 rounded-lg">
            <h2 className="text-center text-base font-semibold">{card.name}</h2>
            <p>{card.category.name}</p>
          </div>
          <div className="flex justify-around items-center font-semibold gap-2">
            <button
              className="bg-navbar-bg hover:bg-sky-900 text-white font-bold h-8 w-20 rounded-2xl mt-2"
              //onClick={() => handleAddClick(1)} // Pasa el ID de la tarjeta
              onClick={() => handleAddClick()}
            >
              Add
            </button>
            <button
              className="bg-navbar-bg hover:bg-sky-900 text-white font-bold h-8 w-20 rounded-2xl mt-2"
              onClick={() => navigate(`/details`)}
            >
              Details
            </button>
          </div>
          <div className='flex items-center text-lg font-semibold'>
            <p className="m-2"> $ {card.price}</p>
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
