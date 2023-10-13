import { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";

const CartElements = () => {
    const { cart, buyProduct } = useContext(DataContext);

    return cart.map((product) => {
        return (
            <div className="w-56 bg-slate-200 p-3 m-4 " key={product._id}>
          <img src={product.photo} className="w-56 h-56" />
          <h3>{product.name}</h3>
          <h4>${product.price}</h4>
         
        </div>
        );
    });
};

export default CartElements;
