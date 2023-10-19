import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";


const CartItemsCounter = ({product}) => {

  const { cart, setCart, buyProduct } = useContext(DataContext);

  const decrese = () => {
    const productrepeat = cart.find((item) => item._id === product._id);

    productrepeat.quanty !== 1 &&
      setCart(cart.map((item) => (item._id === product._id ? { ...product, quanty: productrepeat.quanty - 1 } : item)));
  };

  return (
    <div className="flex justify-center items-center gap-5">
    <p className='cursor-pointer counter-button bg-sky-900 rounded-full w-8 h-8 text-white text-center text-xl font-bold' onClick={decrese}>
      -
    </p>
    <p>{product.quanty}</p>
    <p className='counter-button cursor-pointer  bg-sky-900 rounded-full w-8 h-8 text-white text-center text-xl font-bold' onClick={() => buyProduct(product)}>
      +
    </p>
  </div>
  )
}

export default CartItemsCounter