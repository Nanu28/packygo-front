// DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  const [use, setUse] = useState();
  console.log(use);

  // Verificar si el usuario está presente en localStorage
  const userFromLocalStorage = localStorage.getItem("user");
  if (userFromLocalStorage) {
    const user = JSON.parse(userFromLocalStorage);
    const userId = user.id; // Obtener el id del usuario
    console.log(userId);
  } else {
    console.log("El usuario no está presente en localStorage.");
  }

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

    // Aquí puedes agregar una condición para cargar datos de usuario solo si existe en el localStorage
    if (userFromLocalStorage) {
      const user = JSON.parse(userFromLocalStorage);
      const userId = user.id;
      axios.get(`http://localhost:8000/users/${userId}`)
        .then((res) => {
          setUse(res.data.user);
          console.log("Datos cargados exitosamente:", res.data);
        })
        .catch((error) => {
          console.error("Error al cargar datos:", error);
        });
    }
  }, []);

  return (
    <DataContext.Provider value={{ data, cart, setCart, buyProduct, use }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };

/* 1 Main St, San Jose, CA 95131 */