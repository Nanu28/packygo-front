import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";

const Products = () => {
  const { data, cart, setCart } = useContext(DataContext);

  const buyProduct = (product) => {
    setCart([...cart, product]);
};

 
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No hay datos disponibles.</div>;
  }

  return (
    <div className="product-list">
      {data.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.img} alt="img-product-card" />
          <h3>{product.name}</h3>
          <h4>{product.price}$</h4>
          <button onClick={() => buyProduct(product)} className="bg-blue-400 w-16 h-8 rounded-lg">Buy</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
