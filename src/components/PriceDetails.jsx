import React, { useContext } from "react";
import { DataContext } from "../components/Context/DataContext.jsx";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const PriceDetails = ({ product }) => {
  const navigate = useNavigate();

  if (!product) {
    // Si product es null, no renderiza nada
    return null;
  }

  const { cart, setCart } = useContext(DataContext);

  const user = localStorage.getItem("user");
  const userObject = JSON.parse(user);
  const role = userObject ? userObject.role : null;

  const buyProduct = (product) => {
    if (role === null) {
      // El usuario no ha iniciado sesión, muestra el SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'No tiene permiso para comprar',
        text: '¿Desea iniciar sesión?',
        showCancelButton: true,
        confirmButtonText: 'Sí, iniciar sesión',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {

          navigate(`/login`)
        }
      });
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div className='flex flex-col px-4 pt-2 gap-1'>
      <p className='font-black text-4xl pl-4'>{product.price}</p>
      <p className='pl-4'>{product.stock}</p>
      <button onClick={() => buyProduct(product)} className="bg-slate-950 hover:bg-yellow-600 text-white text-lg font-semibold w-full h-12 py-2 px-4 rounded-lg">
        Add to cart
      </button>
    </div>
  );
};

export default PriceDetails;
