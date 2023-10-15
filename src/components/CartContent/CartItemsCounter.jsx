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
    <>
    <p className='counter-button' onClick={decrese}>
      -
    </p>
    <p>{product.quanty}</p>
    <p className='counter-button' onClick={() => buyProduct(product)}>
      +
    </p>
  </>
  )
}

export default CartItemsCounter