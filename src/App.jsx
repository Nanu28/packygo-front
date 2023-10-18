import './App.css'
import Layout from './layout/Layout'


export default function App() {
  return (
    <>
    {/* <body>
      <nav className='bg-yellow-700 h-14 py-2 px-3 flex justify-between'>
        <img className='h-8' src="../public/image/hamburgerMenu.png" alt="hamburger_menu" />
        <img className='h-8' src="../public/image/logoNav.png" alt="hamburger_menu" />
        <div className='flex gap-3'>
          <img className='h-10' src="../public/image/botonUsuario.png" alt="boton_usuario" />
          <img className='h-10' src="../public/image/maleta.png" alt="maleta" />
        </div>
      </nav>

      <main>
        <h2 className='text-xs cursor-pointer'>Categoría</h2>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="imagen1.jpg" className="d-block w-100" alt="Imagen 1" />
            </div>
            <div className="carousel-item">
              <img src="imagen2.jpg" className="d-block w-100" alt="Imagen 2" />
            </div>
            <div className="carousel-item">
              <img src="imagen3.jpg" className="d-block w-100" alt="Imagen 3" />
            </div> */}
            {/* Agrega más elementos del carrusel según tus necesidades */}
          {/* </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        <div>
          <span>ID</span>
          <p>Nombre producto</p>
          <p>Descripción texto: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae perspiciatis sint itaque eligendi id ratione nisi, deserunt distinctio nam assumenda sequi reiciendis explicabo porro voluptatem asperiores eaque dolorem. Minima, facere!</p>
          <p className='text-xs cursor-pointer'>Calificar</p>
          <span></span>
        </div>


        <div>
          <img src="" alt="" />
          <h2>Título artículo</h2>
          <p>descripción artículo Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quasi nam ipsum ea, eligendi sint illo reprehenderit quia,
            unde inventore ab voluptatum praesentium doloribus ad?
            Magni sunt dicta deserunt recusandae pariatur.
          </p>
          <span>nota</span>
          <span>numero comentarios</span>
          <span>Calificar</span>
          <span>$ Precio</span>
          <span>stock</span>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Agregar al carro</button>
        </div>


        <h2 className='pl-10'>Comentario</h2>
        <section className='pl-10 border-t border-gray-300 mb-4'>
          <p>Por Usuario 1</p>
          <div className='flex'>
            <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, cumque. Inventore consequuntur quaerat suscipit sint nobis. Molestias soluta quaerat, accusantium similique praesentium a architecto repellat inventore culpa debitis? Dolores, beatae!</p>
        </section>

        <section className='pl-10 border-t border-gray-300 mb-4'>
          <p>Por Usuario 2</p>
          <div className='flex'>
            <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, cumque. Inventore consequuntur quaerat suscipit sint nobis. Molestias soluta quaerat, accusantium similique praesentium a architecto repellat inventore culpa debitis? Dolores, beatae!</p>
        </section>

        <section className='pl-10 border-t border-gray-300 mb-4'>
          <p>Por Usuario 2</p>
          <div className='flex'>
            <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            <img className='w-8' src="../public/image/starGold.png" alt="star_gold" />
            <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
            <img className='w-8' src="../public/image/starGrey.png" alt="star_grey" />
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, cumque. Inventore consequuntur quaerat suscipit sint nobis. Molestias soluta quaerat, accusantium similique praesentium a architecto repellat inventore culpa debitis? Dolores, beatae!</p>
        </section>

      </main>

      <footer className='bg-pink-200 h-44 flex justify-between px-8 py-5'>
        <div className='flex flex-col justify-center'>
          <h3 className='font-bold'>INFORMACIÓN</h3>
          <p>Preguntas Frecuentes</p>
          <p>Recomendaciones</p>
          <p>Términos y condiciones</p>
          <p>Locales</p>
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className='font-bold'>CONTACTOS</h3>
          <p>Tel: +549-1165558 me-155</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Email:packygo@gmail.com</p>
        </div>
        <div className='flex flex-col justify-center'>
          <p className='font-bold'>Pack & Go</p>
          <img className='w-14' src="../public/image/qrPackygo.png" alt="qr_Packygo" />
          <p className='font-bold'>Pack & Go 2023-</p>
          <p>Todos los derechos reservados</p>
        </div>
      </footer>
    </body>


   <div className='bg-red-200'>
       <Layout/>
   </div> */}
   
   </>
  )
}


// import Nav from './layout/Nav'
// import Index from './page/Index'
// import Footer from './layout/Footer'
// import { DataProvider } from "./components/Context/DataContext.jsx"



// export default function App() {
//   return (
//     <>
//       <DataProvider>
//         <Nav />
//         <Index />
//         <Footer />
//       </DataProvider>
//     </>
//   )
// }