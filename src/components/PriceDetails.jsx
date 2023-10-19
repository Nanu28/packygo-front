import { DataContext } from "../components/Context/DataContext.jsx";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import React, { useContext } from "react";

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
    <div className='flex flex-col w-full pt-2 md:px-4'>
      <div className='flex flex-col justify-between items-center pb-2 md:flex-row'>
        <p className='font-black text-xl md:pl-4 md:text-4xl'>${product.price}</p>
        <p className='hidden md:block md:text-center md:font-bold md:text-yellow-600'> {product.stock} available</p>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <p className='md:hidden text-center text-sm font-bold text-yellow-600'> {product.stock} available</p>
        <button
          className="bg-sky-800 hover:bg-yellow-600 text-white text-base font-bold h-8 w-32 rounded-2xl mt-2 flex items-center justify-center"
          onClick={() => {
            buyProduct(product);
            // Puedes agregar alguna lógica adicional aquí si es necesario
          }}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}
export default PriceDetails
