import React from 'react';

const DescriptionDetails = ({ showComments, toggleComments, product }) => {
  const scrollToComments = () => {
    const commentsSection = document.getElementById('commentsSection');
    if (commentsSection) {
      commentsSection.scrollIntoView({ behavior: 'smooth' });
      toggleComments(); // Agrega esta línea para mostrar los comentarios cuando se hace clic en "Calificar"
    }
  };
  if (!product) {
    // Si product es null, no renderiza nada
    return null;
  }

  return (
    <section className='w-1/2 px-4 pt-14'>
      <span>Product code: {product._id}</span>
      <p className='font-extrabold'>{product.name}</p>
      <br />
      <p>Description:</p>
      <p className='italic'>
         {product.description}    
        </p>

      <div className='flex flex-col gap-2 mt-5 justify-items-center'>
        <p className='flex items-center text-base font-semibold'>Customer reviews
          <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
          <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
          <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
          <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
          <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
        </p>
        <p onClick={scrollToComments} className='text-sm underline cursor-pointer'>Read reviews</p>
        <div className='flex justify-center md:justify-end md:pr-20'>
        <img className='w-1/3' src="../public/image/travel.png" alt="travel" />
        </div>
      </div>
    </section>
  );
};
export default DescriptionDetails;


// import React from 'react'

// const scrollToComments = () => {
//     const commentsSection = document.getElementById('commentsSection');
//     if (commentsSection) {
//       commentsSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

// export const DescriptionDetails = () => {
//   return (
//     <section className='w-1/2 px-4 pt-14'>
//             <span>ID</span>
//             <p className='font-extrabold'>Maleta amarilla</p>
//             <br />
//             <p>Descripción artículo:</p>
//             <p className='italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//               Quasi nam ipsum ea, eligendi sint illo reprehenderit quia,
//               unde inventore ab voluptatum praesentium doloribus ad?
//               Magni sunt dicta deserunt recusandae pariatur.
//             </p>

//             <div className='flex flex-col gap-2 mt-5 justify-items-center'>
//               <p className='flex'>Calificación
//                 <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                 <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                 <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                 <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                 <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//               </p>
//               <p>número comentarios</p>
//               <p onClick={scrollToComments} className='text-xs cursor-pointer'>Calificar</p>
//             </div>

//           </section>
//   )
// }
