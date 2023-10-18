import React, { useState } from 'react';

const CommentsDetail = ({ showComments }, {product}) => {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);

  const toggleComments = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  return (
    <div className="accordion accordion-flush">
      <div className="accordion-item" id="commentsSection">
        <button
          className={`hover:bg-yellow-400 font-bold text-xl pl-6 accordion-button ${isCommentsVisible ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleComments}
        >
          Reviews
        </button>
        <div className={`accordion-collapse ${isCommentsVisible ? 'show' : 'collapse'}`} id="flush-collapseOne">
          <div className="accordion-body pl-10 border-t border-gray-300 mb-4">
          <p className='mt-3 font-bold'>
              By Erkan</p>
            <div className='flex'>
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            </div>
            <p className='pr-8'>
            A perfect shopping experience! From the moment I logged on to the website 
            until I received my product, everything was flawless. The product description
             completely matched what I received, and navigating the site was intuitive 
             and seamless. In addition, the delivery time was even faster than expected. 
             I would definitely recommend this online store for the purchase of travel products.
              5 stars without a doubt!
            </p>
          </div>

          <div className='pl-10 border-t border-gray-300 mb-4'>
            <p className='mt-3 font-bold'>
              By Erkan</p>
            <div className='flex'>
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
            </div>
            <p className='pr-8'>
              My shopping experience at this online store was mostly positive. 
              The product description was accurate, and delivery arrived 
              in a reasonable amount of time. However, I did encounter some minor
               issues when navigating the site, such as occasional slowness and 
               some difficulties with the checkout process. While these problems were not serious, 
               they could be improved to provide a smoother experience.</p>
          </div>

          <div className='pl-10 border-t border-gray-300 mb-4'>
          <p className='mt-3 font-bold'>
              By Muriel</p>
            <div className='flex'>
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
              <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
              <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
            </div>
            <p className='pr-8'>
              when I received the product, I noticed some malfunctions that required 
              me to request an exchange. The return and replacement process was 
              relatively straightforward, but it was frustrating to have to go through
               this in the first place. Overall, the quality of the product itself
                was decent once I got one in good condition, but the overall experience
                 could have been much better.</p>
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