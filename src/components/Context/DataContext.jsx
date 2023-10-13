// DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [productQuantities, setProductQuantities] = useState({});

    const buyProduct = (product) => {
        // Agregar el producto al carrito
        setCart((prevCart) => [...prevCart, product]);

        // Incrementar la cantidad del producto en el objeto de cantidades
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [product._id]: (prevQuantities[product._id] || 0) + 1,
        }));
    };

    const addProduct = (product) => {
        // Incrementar la cantidad del producto en el objeto de cantidades
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [product._id]: (prevQuantities[product._id] || 0) + 1,
        }));
    };

    const removeProduct = (product) => {
        const productId = product._id;
        const updatedQuantities = { ...productQuantities };
        
        if (updatedQuantities[productId] > 0) {
            updatedQuantities[productId]--;
            
            if (updatedQuantities[productId] === 0) {
                // Si la cantidad llega a cero, elimina el producto del carrito
                const updatedCart = cart.filter((item) => item._id !== productId);
                setCart(updatedCart);
            }
    
            setProductQuantities(updatedQuantities);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then((res) => {
                setData(res.data.products);
                console.log("Datos cargados exitosamente:", res.data.products);
            })
            .catch((error) => {
                console.error("Error al cargar datos:", error);
            });
    }, []);

    return (
        <DataContext.Provider value={{ data, cart, setCart, buyProduct, addProduct, removeProduct, productQuantities }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
