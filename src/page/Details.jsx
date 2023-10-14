
import React, { useState } from 'react';
import CarrouselDetails from '../components/CarrouselDetails';
import { PriceDetails } from '../components/PriceDetails'
import { DescriptionDetails } from '../components/DescriptionDetails';
import CommentsDetail from '../components/CommentsDetail';
import { Link } from 'react-router-dom';
import BannerIndex from '../components/BannerIndex';

const Details = () => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>

      <div class="relative w-full h-48 bg-cover bg-center"
        style={{ backgroundImage: `url('../../public/image/details_banner.png')` }}>
        <div class="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 text-white z-10">
          <p class="text-3xl text-slate-800">We give you what you need to</p>
          <p class="text-3xl text-slate-800">make</p>
          <p className="text-lg text-yellow-500 font-bold"> the right decision</p>
          <img className='w-10 mt-3' src="../../public/image/arrow_banner.png" alt="arrow_banner" />
        </div>
      </div>

      <div className='flex gap-1 text-base pl-6 py-2 items-center bg-sky-100'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
        </svg>
        <Link to="/">Home</Link>
        <Link to="/store">/Store</Link>
        <Link to="#">/Details</Link>
        <span className='font-semibold'>/Yellow suitcase</span>
      </div>

      <div className='flex flex-col md:flex-row bg-sky-100'>
        <section className='w-1/3 ml-24 mr-10'>
          <CarrouselDetails />
          <PriceDetails />
        </section>

        <DescriptionDetails showComments={showComments} toggleComments={toggleComments} />
      </div>

      <CommentsDetail showComments={showComments} />
    </>
  );
};

export default Details;

