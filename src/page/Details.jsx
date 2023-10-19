import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import PriceDetails from '../components/PriceDetails.jsx';
import DescriptionDetails from '../components/DescriptionDetails.jsx';
import CommentsDetail from '../components/CommentsDetail.jsx';
// import Loader from '../components/Loader.jsx';
import CarrouselDetails from '../components/CarrouselDetails';
import BannerIndex from '../components/BannerIndex';


const Details = () => {
  const { _id } = useParams();
  const [showComments, setShowComments] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    // Realiza una solicitud al servidor para obtener los detalles del producto por su ID
    axios.get(`http://localhost:8000/products/${_id}`)
      .then((response) => {
        console.log(response); // Verifica los datos del producto
        setProduct(response.data.product); // Actualiza el estado con los detalles del producto
        setLoading(false); // Cambia el estado de "loading" a false una vez que se carguen los detalles
      })
      .catch((error) => {
        // Maneja cualquier error de la solicitud
        console.error('Error al obtener los detalles del producto', error);
        setLoading(false); // Asegúrate de cambiar el estado de "loading" a false en caso de error también
      });
  }, [_id]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>

      <div class="relative w-full h-36 bg-cover bg-center md:h-48"
        style={{ backgroundImage: `url('../../public/image/details_banner.png')` }}>
        <div class="flex flex-col w-full items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 md:p-8">
          <p class="text-xl text-slate-800 md:text-3xl">We give you what you need to</p>
          <p class="text-xl text-slate-800 md:text-3xl">make</p>
          <p className="text-base text-yellow-500 font-bold md:text-lg"> the right decision</p>
          <img className='w-6 mt-3 md:w-10' src="../../public/image/arrow_banner.png" alt="arrow_banner" />
        </div>
      </div>

      <div className='flex gap-1 text-base pl-6 py-2 items-center bg-sky-100'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
        </svg>
        <Link to="/">Home</Link>
        <Link to="/store">/Store</Link>
        <p>/Details</p>
        <p className='font-semibold'>/Yellow suitcase</p>
      </div>

      <div className='flex flex-col md:flex-row md:items-center bg-sky-100'>
        <section className='px-6 py-2 md:w-1/4 md:ml-24 md:mr-10'>
          <CarrouselDetails product={product} />
          <PriceDetails product={product} />
        </section>

        <DescriptionDetails product={product} showComments={showComments} toggleComments={toggleComments} />
      </div>

      <CommentsDetail showComments={showComments} />
    </>
  );
};

export default Details;


/* 

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { ProductContext } from '../context/ProductContext';

 const Details = () => {
  const { getProductByID } = useContext(ProductContext);

  const [loading, setLoading] = useState(true);
  const [Product, setProduct] = useState({});

  const { _id } = useParams();

  const fetchProduct = async id => {
    const data = await getProductByID(_id);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);

  return (
    <main className='container main-Product'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='header-main-Product'>
            <span className='number-Product'>#{Product.id}</span>
            <div className='container-img-Product'>
              <img
                src={Product.}
                alt={`Product ${Product?.name}`}
              />
            </div>

            <div className='container-info-Product'>

              <div className='info-Product'>
                <div className='group-info'>
                  <p>Altura</p>
                  <span>{Product.description}</span>
                </div>

              </div>
            </div>
          </div>

          <div className='container-stats'>
            <h1>Estadísticas</h1>
          </div>

          </div>
        </>
      )}
    </main>
  );
};
export default Details;*/