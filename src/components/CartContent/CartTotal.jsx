import { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";
import { useNavigate } from "react-router-dom"; 



const CartTotal = () => {
    const navigate = useNavigate(); 
    const { cart } = useContext(DataContext);

    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

    return (
        <div className="w-full h-32 flex flex-col justify-center text-2xl bg-lime-50">
            <h3 className="text-right font-bold pr-10">Total a pagar: $ {total}</h3>
            <button className="bg-sky-900 hover:bg-yellow-600 text-white rounded-md font-bold h-12 mt-3 mx-4" onClick={() => navigate(`/pay/${total}`)}>PAY</button>
        </div>
    );
};

export default CartTotal;
