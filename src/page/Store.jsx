import ProductCards from '../components/ProductCards.jsx'
import { Link } from 'react-router-dom';
import Products from '../components/Products/Products.jsx';
import axios from 'axios';

function Store() {
  return (
    <>
    <div className='flex gap-1 text-base pt-4 pl-6 pb-2 items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
    </svg>
    <Link to="/">Home</Link>
    <Link className='font-semibold' to="/#">/Store</Link>
  </div>

    <div className='flex'>
    <section className='hidden w-[30%] h-screen mb-12 mt-12 lg:block bg-slate-300 '>
      <h1>Cotegorias</h1>
      <p>categoria</p>
      <p>categoria</p>
    </section>
    <section className='h-screen w-full flex flex-col items-center'>
      <section className='h-[90vh] w-full flex flex-col items-center'>
        <h1 className='text-4xl'>Producs</h1>

        <input className='h-30 w-[80%] border-cyan-300 rounded-lg border' type="text" placeholder=' find your product' />

        <ProductCards />
      </section>
    </section>
  </div>
  </>
  )
}

export default Store
