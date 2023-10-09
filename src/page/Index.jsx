import React from 'react'
import Carousel from '../components/Carrousel.jsx'
import Valoraciones from '../components/Valoraciones.jsx'
import baner1 from '../../public/image/baner1.png'
import baner2 from '../../public/image/baner2.png'
import baner3 from '../../public/image/baner3.png'
import baner4 from '../../public/image/baner4.png'
import img1 from '../../public/image/1.png'
import img3 from '../../public/image/3.png'
import img5 from '../../public/image/5.png'
import prueba1 from '../../public/image/prueba1.png'
import prueba2 from '../../public/image/prueba2.png'

function Index() {
  return (
    <>
      <div className="hidden md:block mb-5">
        <Carousel autoSlide={true} autoSlideInterval={5000}>
          {/* Aquí colocas las diapositivas que deseas mostrar */}
          <img src={baner1} alt="" />
          <img src={baner2} alt="" />
          <img src={baner3} alt="" />
          <img src={baner4} alt="" />
        </Carousel>
      </div>
      <div className="w-full h-full relative  bg-gradient-to-b from-cyan-100 to-cyan-300 ">
        {/* Mostrar el carrusel solo en versiones de escritorio */}

        <div className="w-full flex-col flex md:flex-row justify-around items-center bg-tramsparent">
          <div className="md:w-1/2 m-5 bg-tramsparent rounded-lg shadow">
            <div className="p-5">
              <div className="min-h-full flex flex-col items-center bg-gradient-to-b from-cyan-100 to-cyan-300 ">
                <p className="mb-2 text-xl font-bold tracking-wide text-gray-900">
                  Sobre nosotros
                </p>
                <p className="mb-3 font-normal text-[18px] text-center text-gray-700">
                  Pequeña descripcion expedita este. Enim atque fugiat earum nesciunt neque!
                </p>
              </div>
              <Valoraciones
                title="MISION"
                description="Pequeña descripción expedita este. Enim atque fugiat earum nesciunt neque!"
                imageSrc={prueba1}
              />

              <Valoraciones
                title="VISION"
                description="Pequeña descripción expedita este. Enim atque fugiat earum nesciunt neque!"
                imageSrc={prueba2}
              />

            </div>
          </div>

          <div className="md:w-1/2 m-5  bg-tramsparent rounded-lg shadow">
            <div className="p-5">
              <div className="min-h-full flex flex-col items-center bg-gradient-to-b from-cyan-100 to-cyan-300 ">
                <p className="mb-2 text-xl font-bold tracking-wide text-gray-900 ">
                  Calificaciones de clientes
                </p>
                <p className="mb-3 font-normal text-[18px] text-center text-gray-700">
                  Pequeña descripcion expedita este. Enim atque fugiat earum nesciunt neque!
                </p>
              </div>
              <Valoraciones
                title="Valoraciones Pepa"
                description="Pequeña descripción expedita este. Enim atque fugiat earum nesciunt neque!"
                imageSrc={img1}
              />

              <Valoraciones
                title="Valoraciones Fulanito"
                description="Pequeña descripción expedita este. Enim atque fugiat earum nesciunt neque!"
                imageSrc={img3}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index

/*   style={{
    backgroundImage: `url('../../public/image/fondooo.png')`, // Reemplaza con la ruta correcta de tu imagen
    backgroundSize: 'cover', // Ajusta el tamaño de la imagen
    backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
    backgroundPosition: 'center', // Centra la imagen
    
  }} */