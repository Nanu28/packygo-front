const PriceDetails = ({ product }) => {
  if (!product) {
    // Si product es null, no renderiza nada
    return null;
  }

  return (
    <div className='flex flex-col px-4 pt-2 gap-1'>
      <p className='font-black text-4xl pl-4'>{product.price}</p>
      <p className='pl-4'>{product.stock}</p>
      <button className="bg-slate-950 hover:bg-yellow-600 text-white text-lg font-semibold w-full h-12 py-2 px-4 rounded-lg">
        Add to cart
      </button>
    </div>
  );
};

export default PriceDetails;
