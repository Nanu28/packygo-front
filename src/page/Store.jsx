import ProductCards from '../components/ProductCards.jsx'



function Store() {
  return (
    <div className='flex'>
    <section className='hidden w-[30%] h-screen mb-12 mt-12 lg:block bg-slate-300 '>
      <h1>Cotegorias</h1>
      <p>categoria</p>
      <p>categoria</p>
    </section>
    <section className='h-screen w-full flex flex-col items-center'>
      <section className='h-[90vh] w-full flex flex-col items-center'>
        <h1 className='text-4xl'>producs</h1>

        <input className='h-30 w-[80%] border-cyan-300 rounded-lg border' type="text" placeholder='flind your product' />

        <ProductCards />
      </section>
    </section>
  </div>
  )
}

export default Store