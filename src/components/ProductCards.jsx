// import React, { useEffect, useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import ConfirmationModal from '../components/ConfirmacionModal.jsx';
// import axios from 'axios';
// import { DataContext } from "../Context/DataContext.jsx";

// function ProductCards(props) {
//   const navigate = useNavigate();
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [card, setCard] = useState([]);
//   const [selectedCardId, setSelectedCardId] = useState(null);
//   const [pageNumber, setPageNumber] = useState(0);

//   const { data, cart, setCart } = useContext(DataContext);
//         setCard(data.products);

//         const buyProduct = (product) => {
//           setCart([...cart, product]);
//         };
      
//         if (!Array.isArray(data) || data.length === 0) {
//           return <div>No hay datos disponibles.</div>;
//         }

//   const navigateToDetails = (cardId) => {
//     navigate(`/details/${cardId}`);
//   };

//   const handleAddClick = (cardId) => {
//     setSelectedCardId(cardId);
//     setShowConfirmation(true);
//   };

//   const handleContinueShopping = () => {
//     setShowConfirmation(false);
//     navigate('/store');
//   };

//   const handleGoToCart = () => {
//     setShowConfirmation(false);
//     // Agrega la lógica para ir al carrito aquí
//     navigate('/cart');
//   };

//   const handleCancel = () => {
//     setShowConfirmation(false);
//   };

// /*   const getCard = async () => {
//     try {
//       const { data } = await axios.get(`http://localhost:8000/products?name=${props.searchText}`);

//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     getCard();
//   }, [props.searchText]);
//  */
//   const productsPerPage = 9;
//   const pagesVisited = pageNumber * productsPerPage;
//   const displayedProducts = card.slice(pagesVisited, pagesVisited + productsPerPage);
//   const pageCount = Math.ceil(card.length / productsPerPage);

//   const changePage = (newPage) => {
//     setPageNumber(newPage);
//   };

//   // Genera los enlaces de paginación
//   const pageLinks = [];
//   for (let i = 0; i < pageCount; i++) {
//     pageLinks.push(
//       <button
//         key={i}
//         onClick={() => changePage(i)}
//         disabled={pageNumber === i}
//         className="page-link"
//       >
//         {i + 1}
//       </button>
//     );
//   }

//   return (
//     <>
//       <section className="flex flex-wrap justify-center gap-4 lg:p-10">
//         {displayedProducts.map((card, _id) => (
//           <div key={_id} className="w-72 h-fit items-center py-2 shadow-gray-950 shadow-md bg-sky-50 flex flex-col rounded-lg">
//             <div>
//               <img className='rounded-lg w-40 h-56 bg-cover' src={card.photo} alt="" />
//             </div>
//             <div className="h-10 rounded-lg">
//               <h2 className="text-center text-base font-semibold">{card.name}</h2>
//               <p>{card.category.name}</p>
//             </div>
//             <div className="flex justify-center items-center font-semibold gap-2">
//               <button
//                 className="bg-sky-800 hover:bg-yellow-600 text-white font-bold h-8 w-20 rounded-2xl mt-2 flex items-center justify-center" // Añadida clase "flex" y "justify-center"
//                 onClick={() => buyProduct(product)}
//               >
//                 Buy
//               </button>
//               <Link
//                 to={`/details/${card.id}`}
//                 className="bg-sky-800 hover:bg-yellow-600 text-white font-bold h-8 w-20 rounded-2xl mt-2 flex items-center justify-center" // Añadida clase "flex" y "justify-center"
//               >
//                 Details
//               </Link>
//             </div>


//             <div className='flex items-center text-lg font-semibold'>
//               <p className="m-2"> $ {card.price}</p>
//             </div>

//           </div>
//         ))}

//         <ConfirmationModal
//           isOpen={showConfirmation}
//           onClose={handleCancel}
//           onContinueShopping={handleContinueShopping}
//           onGoToCart={handleGoToCart}
//         />


//       </section>

//       <div className="pagination flex justify-center pb-4">
//         <button
//           onClick={() => changePage(pageNumber - 1)}
//           disabled={pageNumber === 0}
//           className="page-link w-24 rounded-l-lg"
//         >
//           Previous
//         </button>
//         {pageLinks}
//         <button
//           onClick={() => changePage(pageNumber + 1)}
//           disabled={pageNumber === pageCount - 1}
//           className="page-link w-24 rounded-r-lg"
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// }

// export default ProductCards;
