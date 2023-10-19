import React from 'react'


import Carousel from '../components/Carrousel.jsx'
import Valoraciones from '../components/Valoraciones.jsx'
import baner1 from '../../image/baner1.png'
import baner2 from '../../image/baner2.png'
import baner3 from '../../image/baner3.png'
import baner4 from '../../image/baner4.png'
import img1 from '../../image/1.png'
import img3 from '../../image/3.png'
import img5 from '../../image/5.png'
import prueba1 from '../../image/prueba1.png'
import prueba2 from '../../image/prueba2.png'
import BannerIndex from '../components/BannerIndex.jsx'
import CategoriesIndex from '../components/CategoriesIndex.jsx'
import VisionMision from '../components/VisionMision.jsx'


function Index() {
  return (
    <>
      <BannerIndex />

      <div className="hidden md:block">
        <Carousel autoSlide={true} autoSlideInterval={5000}>
          <img className='w-full' src="../image/carouselHome1.png" alt="carousel_banner1" />
          <img className='w-full' src="../image/carouselHome2.png" alt="carousel_banner2" />
          <img className='w-full' src="../image/carouselHome3.png" alt="carousel_banner3" />
        </Carousel>
      </div>

      <CategoriesIndex />

      <VisionMision />


    </>
  )
}

export default Index

