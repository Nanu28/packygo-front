import { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";
import { useNavigate } from "react-router-dom"; 



const CartTotal = () => {
    const navigate = useNavigate(); 
    const { cart } = useContext(DataContext);

    const total = cart.reduce((acc, product) => acc + product.price, 0);

    return (
        <div className="w-full h-24 items-center text-2xl bg-amber-200">
            <h3>Total a pagar: $ {total}</h3>
            <button  onClick={() => navigate(`/pay/${total}`)}>PAGAR</button>
        </div>
    );
};

export default CartTotal;
