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
            <div className="">
                <div className='flex flex-col justify-around items-center flex-wrap m-8 bg-white rounded-b-3xl shadow-gray-950 shadow-md gap-2 py-4 md:flex-row' key={product._id}>
                    <img src={product.photo} alt='product-card' className="h-32 w-32" />
                    <div className="flex flex-col gap-3">
                        <h3 className='name font-semibold'>{product.name}</h3>
                        <CartItemsCounter product={product} />
                    </div>
                    <div className="flex gap-6">
                    <h4 className='price text-lg'>Subtotal</h4>
                    <h4 className='price font-bold text-lg'>{product.price * product.quanty}$</h4>
                    </div>
                    
                    <h3 class='cursor-pointer  cart-delete-button' onClick={() => deleteProduct(product._id)}>
                        ❌
                    </h3>
                </div>
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