import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";
import CartItemsCounter from "../CartContent/CartItemsCounter.jsx";

const CartElements = () => {
    const { cart, setCart } = useContext(DataContext);

    const deleteProduct = (_id) => {
        const foundId = cart.find((element) => element._id === _id);

        const newCart = cart.filter((element) => {
            return element !== foundId;
        });

        setCart(newCart);
    };

    return cart.map((product) => {
        return (
            <div className='flex justify-around items-center flex-wrap m-8 bg-red-500' key={product._id}>
                <img src={product.photo} alt='product-card' className="h-32 w-32" />
                <h3 className='name'>{product.name}</h3>
                <CartItemsCounter product={product} />
                <h4 className='price'>{product.price * product.quanty}$</h4>
                <h3 class='cart-delete-button' onClick={() => deleteProduct(product._id)}>
                    ❌
                </h3>
            </div>
        );
    });
};

export default CartElements;


/* 
    return (

        <div className="bg-green-100 p-3 items-center justify-center flex flex-wrap">

            <ul>
                {cart.map((product) => (
                    <li key={product._id}>
                        <div className="flex justify-around items-center flex-wrap m-8 bg-red-500" key={product._id}>
                            <img src={product.photo} className="h-32 w-32" />
                            <h3>{product.name}</h3>
                            <CartItemsCounter quanty={product.quanty} />
                            <h4>{product.price}$</h4>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartElements;
 */