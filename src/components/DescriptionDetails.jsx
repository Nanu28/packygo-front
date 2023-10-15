import React from 'react';

export const DescriptionDetails = ({ showComments, toggleComments }) => {
  const scrollToComments = () => {
    const commentsSection = document.getElementById('commentsSection');
    if (commentsSection) {
      commentsSection.scrollIntoView({ behavior: 'smooth' });
      toggleComments(); // Agrega esta línea para mostrar los comentarios cuando se hace clic en "Calificar"
    }
  };

  return (
    <section className='py-2 px-10 md:w-2/4 md:px-4'>
      <span>ID</span>
      <p className='font-extrabold'>Yellow suitcase</p>
      <br />
      <p>Description:</p>
      <p className='italic'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nam ipsum ea, eligendi sint illo reprehenderit quia, unde inventore ab voluptatum praesentium doloribus ad? Magni sunt dicta deserunt recusandae pariatur.
      </p>

      <div className='flex flex-col gap-2 mt-5 justify-items-center'>
        <p className='flex items-center'>Califications
          <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
          <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
          <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
          <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
          <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
        </p>
        <p onClick={scrollToComments} className='text-xs cursor-pointer'>Add comments</p>
        <div className='flex justify-center md:justify-end md:pr-20'>
        <img className='w-1/3' src="../public/image/travel.png" alt="travel" />
        </div>
      </div>
    </section>
  );
};


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
