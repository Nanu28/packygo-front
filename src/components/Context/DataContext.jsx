import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get(data.json)
            .then((res) => {
                setData(res.data);
                console.log("Datos cargados exitosamente:", res.data);
            })
            .catch((error) => {
                console.error("Error al cargar datos:", error);
            });
    }, []);

    return (
        <DataContext.Provider value={{ data, cart, setCart }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
