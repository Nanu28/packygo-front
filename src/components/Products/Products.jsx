import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConfirmationModal from '../ConfirmacionModal.jsx';
import axios from "axios";
import { DataContext } from "../Context/DataContext.jsx";

const Products = () => {
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
  const displayedCards = data.slice(pagesVisited, pagesVisited + productsPerPage);
  const pageCount = Math.ceil(data.length / productsPerPage);

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

  return (
    <>
      <section className="flex flex-wrap justify-center gap-4 lg:p-10">
      <section className="flex flex-col lg:flex-row gap-4 lg:p-10">
            <div className="h-[290px] w-[290px] bg-slate-300 flex flex-col">
                <div className="flex h-full flex-col items-center">
                    <div className="h-[60%] w-[90%] bg-black">asd</div>
                    <div className="gap-5 flex flex-col w-full">
                        <h2 className="text-center">Title</h2>
                        <div className="flex justify-around">
                            <span>Price: $4.99</span>
                            <button className="bg-blue-400 w-16 h-8 rounded-lg">Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        {displayedCards.map((card, _id) => (
          <div key={_id} className="w-72 h-fit items-center py-2 shadow-gray-950 shadow-md bg-sky-50 flex flex-col rounded-lg">
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
                  Buy
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
        <ConfirmationModal
          isOpen={showConfirmation}
          onClose={handleCancel}
          onContinueShopping={handleContinueShopping}
          onGoToCart={handleGoToCart}
        />
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
