import { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";
import { Link } from "react-router-dom";
import CartElements from "../CartContent/CartElements.jsx";
import CartTotal from "../CartContent/CartTotal.jsx";

const CartContent = () => {
  const { cart } = useContext(DataContext);

  return (
    <>
      <div className='flex gap-1 text-base pt-4 pl-6 pb-2 items-center bg-sky-100'> 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
        </svg>
        <Link to="/">Home</Link>
        <Link to="/store">/Store</Link>
        <Link className='font-semibold' to="#">/Cart</Link>
      </div>

      {cart.length === 0 ? (
        <div className="w-full bg-red-200 h-full text-center justify-center align-center">
          <h2 className="text-2xl font-medium p-3">Your cart is empty</h2>
        </div>
      ) : (
        <div className="w-full bg-red-200 h-full text-center justify-center align-center">
          <CartElements />
          <CartTotal />
        </div>
      )}
    </>
  );
};

export default CartContent;