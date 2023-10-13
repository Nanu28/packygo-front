import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";

const CartElements = () => {
    const { cart, addProduct, removeProduct, productQuantities } = useContext(DataContext);

    return (
        <div className="bg-slate-100 p-3">
            <ul>
                {cart.map((product) => (
                    <li key={product._id}>
                        {product.name}, ${product.price}, Quantity: {productQuantities[product._id] || 0}
                        <button
                            onClick={() => addProduct(product)}
                            className="bg-blue-400 w-16 h-8 rounded-lg"
                        >
                            Add
                        </button>
                        <button
                            onClick={() => removeProduct(product)}
                            className="bg-blue-400 w-16 h-8 rounded-lg"
                        >
                            Subtract
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartElements;
