import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext.jsx";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const { data, cart, setCart } = useContext(DataContext);

  const buyProduct = (product) => {
    setCart([...cart, product]);
  };

  const user = localStorage.getItem("user");
  const userObject = user ? JSON.parse(user) : null;
  const role = userObject ? userObject.role : null;

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No hay datos disponibles.</div>;
  }

  return (
    <>
      {data.map((product) => (
        <div className="w-56 bg-slate-200 p-3 m-4" key={product._id}>
          <img src={product.photo} className="w-56 h-56" alt={product.name} />
          <h3>{product.name}</h3>
          <h4>{product.price}$</h4>
          {role === null ? (
            <button
              onClick={() => navigate(`/details/${product._id}`)}
              className="bg-blue-400 w-16 h-8 rounded-lg"
            >
              Details
            </button>
          ) : (
            <>
              <button
                onClick={() => buyProduct(product)}
                className="bg-blue-400 w-16 h-8 rounded-lg"
              >
                Buy
              </button>
              <button
                onClick={() => navigate(`/details/${product._id}`)}
                className="bg-blue-400 w-16 h-8 rounded-lg"
              >
                Details
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Products;
