import { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";

const CartTotal = () => {
    const { cart } = useContext(DataContext);

    const total = cart.reduce((acc, product) => acc + product.price, 0);

    return (
        <div className="cartTotal">
            <h3>Total a pagar: {total} $</h3>
        </div>
    );
};

export default CartTotal;
