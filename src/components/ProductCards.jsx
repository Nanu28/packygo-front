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
    <section className="flex flex-wrap gap-4 lg:p-10">
      {/* Card 1 */}
    
      {card.map((card, _id) => (
        
        <div key={_id}  className="w-[290px] items-center bg-slate-300 flex flex-col rounded-lg">
          <div>
            <img className='rounded-lg h-72' src={card.photo} alt="" />
          </div>
          <div className="h-1/2  m-3 bg-red-200 rounded-lg">
            <h2 className="text-center text-lg font-medium">{card.name}</h2>
            <p>{card.category.name}</p>
          </div>
          <div className="flex justify-around items-center m-3">
            <p className="text-xl bg-yellow-800 font-medium m-2">{card.price}</p>
            <button
              className="bg-blue-400 w-20 h-10 text-xl font-normal p-2 rounded-lg"
              //onClick={() => handleAddClick(1)} // Pasa el ID de la tarjeta
              onClick={() => handleAddClick()}
            >
              Add
            </button>
            <button
              className="bg-blue-400 w-20 h-10 text-xl font-normal p-2 ml-1 rounded-lg"
              onClick={() => navigate(`/details`)}
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
