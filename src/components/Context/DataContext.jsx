// DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)

    const buyProduct = (product) => {
        // Agregar el producto al carrito
        setCart((prevCart) => [...prevCart, product]);
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
        <DataContext.Provider value={{ data, cart, setCart, buyProduct }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
