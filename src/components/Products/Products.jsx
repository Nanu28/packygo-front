import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConfirmationModal from '../ConfirmacionModal.jsx';
import axios from "axios";
import { DataContext } from "../Context/DataContext.jsx";


const Products = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const { data, cart, setCart } = useContext(DataContext);

  const buyProduct = (product) => {
    setCart([...cart, product]);
  };

  const navigateToDetails = (cardId) => {
    navigate(`/details/${cardId}`);
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
    navigate('/cart');
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const isUserLoggedIn = () => {
    // Verifica si hay un token en el localStorage
    const token = localStorage.getItem('token');
    return !!token;
  };

  const productsPerPage = 9;
  const pagesVisited = pageNumber * productsPerPage;
  const filteredData = selectedCategory === 'all' 
    ? data
    : data.filter((product) => product.category.name === selectedCategory);
  const displayedCards = filteredData.slice(pagesVisited, pagesVisited + productsPerPage);
  const pageCount = Math.ceil(filteredData.length / productsPerPage);

  const changePage = (newPage) => {
    setPageNumber(newPage);
  };

  // Genera los enlaces de paginación
  const pageLinks = [];
  for (let i = 0; i < pageCount; i++) {
    pageLinks.push(
      <button
        key={i}
        onClick={() => changePage(i)}
        disabled={pageNumber === i}
        className="page-link"
      >
        {i + 1}
      </button>
    );
  }
  function rotateText(button) {
    button.classList.add("rotated");
  }
  
  function unrotateText(button) {
    button.classList.remove("rotated");
  }
  

  return (
    <>
      <section className="flex flex-wrap justify-center gap-4 lg:p-10">
        {displayedCards.map((card, _id) => (
          <div key={_id} className="w-72 h-fit items-center py-2 shadow-gray-950 shadow-md bg-white flex flex-col rounded-lg">
            <div>
              <img className='rounded-lg w-40 h-56 bg-cover' src={card.photo} alt="" />
            </div>
            <div className="h-10 rounded-lg">
              <h2 className="text-center text-sm font-semibold">{card.name}</h2>
              <p className='text-sm italic capitalize'>{card.category.name}</p>
            </div>
            <div className="flex justify-center items-center font-semibold gap-2">
              {isUserLoggedIn() ? (
                <button
                  className="bg-sky-800 hover:bg-yellow-600 text-white text-base font-bold h-8 w-20 rounded-2xl mt-2 flex items-center justify-center"
                  onClick={() => buyProduct(card)}
                >
                  Add
                </button>
              ) : null}
              <Link
                to={`/details/${card._id}`}
                className="bg-sky-800 hover:bg-yellow-600 text-white font-bold h-8 w-20 rounded-2xl mt-2 flex items-center justify-center"
              >
                Details
              </Link>
            </div>
            <div className='flex items-center text-lg font-semibold'>
              <p className="mt-1"> $ {card.price}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="pagination flex justify-center py-4 px-2 md:pb-4">
        <button
          onClick={() => changePage(pageNumber - 1)}
          disabled={pageNumber === 0}
          className="page-link w-24 rounded-l-lg"
        >
          Previous
        </button>
        {pageLinks}
        <button
          onClick={() => changePage(pageNumber + 1)}
          disabled={pageNumber === pageCount - 1}
          className="page-link w-24 rounded-r-lg"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Products;
