// DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [productQuantities, setProductQuantities] = useState({});
    console.log(cart)


  const buyProduct = (product) => {
    const productrepeat = cart.find((item) => item._id === product._id);

    if (productrepeat) {
      setCart(cart.map((item) => (item._id === product._id ? { ...product, quanty: productrepeat.quanty + 1 } : item)));
    } else {
      setCart([...cart, product]);
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
        <DataContext.Provider value={{ data, cart, setCart, buyProduct/*,  addProduct, removeProduct, productQuantities */ }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
