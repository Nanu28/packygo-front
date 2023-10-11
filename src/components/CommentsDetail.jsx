import React, { useState } from 'react';

const CommentsDetail = ({ showComments }, {product}) => {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);

  const toggleComments = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  return (
    <div className="accordion accordion-flush mt-5">
      <div className="accordion-item" id="commentsSection">
        <button
          className={`hover:bg-yellow-400 font-bold text-2xl pl-6 accordion-button ${isCommentsVisible ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleComments}
        >
          Comments
        </button>
        <div className={`accordion-collapse ${isCommentsVisible ? 'show' : 'collapse'}`} id="flush-collapseOne">
          <div className="accordion-body pl-10 border-t border-gray-300 mb-4">
            <p>
By user 1</p>
            <div className='flex'>
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, cumque. Inventore consequuntur quaerat suscipit sint nobis. Molestias soluta quaerat, accusantium similique praesentium a architecto repellat inventore culpa debitis? Dolores, beatae!
            </p>
          </div>

          <div className='pl-10 border-t border-gray-300 mb-4'>
            <p className='mt-3'>
By user 2</p>
            <div className='flex'>
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, cumque. Inventore consequuntur quaerat suscipit sint nobis. Molestias soluta quaerat, accusantium similique praesentium a architecto repellat inventore culpa debitis? Dolores, beatae!</p>
          </div>

          <div className='pl-10 border-t border-gray-300 mb-4'>
            <p className='mt-3'>
By user 3</p>
            <div className='flex'>
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
              <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, cumque. Inventore consequuntur quaerat suscipit sint nobis. Molestias soluta quaerat, accusantium similique praesentium a architecto repellat inventore culpa debitis? Dolores, beatae!</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CommentsDetail;



// import React from 'react';

// const CommentsDetail = ({ showComments }) => {
//   const toggleComments = () => {
//   };

//   return (
//     <div className="accordion accordion-flush mt-5">
//       <div className="accordion-item" id="commentsSection">
//         <button
//           className={`hover:bg-orange-300 accordion-button ${showComments ? '' : 'collapsed'}`}
//           type="button"
//           onClick={toggleComments}
//         >
//           Comentarios
//               </button>
//             <div className={`accordion-collapse ${showComments ? 'show' : 'collapse'}`} id="flush-collapseOne">
//               <div className="accordion-body pl-10 border-t border-gray-300 mb-4">
//                 <p>Por Usuario 1</p>
//                 <div className='flex'>
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                 </div>
//                 <p>
//                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, cumque. Inventore consequuntur quaerat suscipit sint nobis. Molestias soluta quaerat, accusantium similique praesentium a architecto repellat inventore culpa debitis? Dolores, beatae!
//                 </p>
//               </div>

//               <div className='pl-10 border-t border-gray-300 mb-4'>
//                 <p>Por Usuario 2</p>
//                 <div className='flex'>
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
//                 </div>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, cumque. Inventore consequuntur quaerat suscipit sint nobis. Molestias soluta quaerat, accusantium similique praesentium a architecto repellat inventore culpa debitis? Dolores, beatae!</p>
//               </div>

//               <div className='pl-10 border-t border-gray-300 mb-4'>
//                 <p>Por Usuario 3</p>
//                 <div className='flex'>
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
//                   <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
//                 </div>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, cumque. Inventore consequuntur quaerat suscipit sint nobis. Molestias soluta quaerat, accusantium similique praesentium a architecto repellat inventore culpa debitis? Dolores, beatae!</p>
//               </div>

//             </div>
//           </div>
//         </div>
//   )
// }

// export default CommentsDetail



// import React from 'react'

// const CommentsDetail = () => {
//     const toggleComments = () => {
//         setShowComments(!showComments);
//       };

//   return (
//     <div className="accordion accordion-flush mt-5">
//           <div className="accordion-item" id="commentsSection">
//               <button className= {` hover:bg-orange-300 accordion-button ${showComments ? '' : 'collapsed'}`} type="button" onClick={toggleComments}>
//                 Comentarios
//               </button>
//             <div className={`accordion-collapse ${showComments ? 'show' : 'collapse'}`} id="flush-collapseOne">
//               <div className="accordion-body pl-10 border-t border-gray-300 mb-4">
//                 <p>Por Usuario 1</p>
//                 <div className='flex'>
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                 </div>
//                 <p>
//                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, cumque. Inventore consequuntur quaerat suscipit sint nobis. Molestias soluta quaerat, accusantium similique praesentium a architecto repellat inventore culpa debitis? Dolores, beatae!
//                 </p>
//               </div>

//               <div className='pl-10 border-t border-gray-300 mb-4'>
//                 <p>Por Usuario 2</p>
//                 <div className='flex'>
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
//                 </div>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, cumque. Inventore consequuntur quaerat suscipit sint nobis. Molestias soluta quaerat, accusantium similique praesentium a architecto repellat inventore culpa debitis? Dolores, beatae!</p>
//               </div>

//               <div className='pl-10 border-t border-gray-300 mb-4'>
//                 <p>Por Usuario 3</p>
//                 <div className='flex'>
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
//                   <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
//                   <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
//                 </div>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, cumque. Inventore consequuntur quaerat suscipit sint nobis. Molestias soluta quaerat, accusantium similique praesentium a architecto repellat inventore culpa debitis? Dolores, beatae!</p>
//               </div>

//             </div>
//           </div>
//         </div>
//   )
// }

// export default CommentsDetail