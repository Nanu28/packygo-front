import { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";

const CartElements = () => {
    const { cart, buyProduct } = useContext(DataContext);

    return cart.map((product) => {
        return (
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="product-card" />
                <h3 className="name">{product.name}</h3>
                <h4 className="price">{product.price}$</h4>
                <button onClick={() => buyProduct(product)} className="bg-blue-400 w-16 h-8 rounded-lg">
                    Buy
                </button>
            </div>
        );
    });
};

export default CartElements;
