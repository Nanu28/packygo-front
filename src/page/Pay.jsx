import { DataContext } from "../components/Context/DataContext.jsx";
import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import jsPDF from 'jspdf';

const Pay = () => {
  const { cart } = useContext(DataContext);
  //console.log(cart);

  const { total } = useParams(); // Obtén el total de la URL

  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const paypalOptions = {
    clientId: 'ARg6xp3qWZd3iZm3562vjDU6TVavQw_1xbLwvVT3E169PvdG9U8yL0NRHc9ahMj_UjocCubpXCzAWQDv',
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Orden de Compra', 10, 10);
    doc.text('Detalles del producto:', 10, 20);
    // Puedes agregar más detalles al PDF según tus necesidades

    doc.save('orden_de_compra.pdf');
  };

  const onSuccess = (details, data) => {
    // Lógica para manejar el pago exitoso
    console.log('Pago exitoso:', details);

    if (details.status === 'COMPLETED') {
      // La transacción se completó con éxito
      console.log('Transacción completada con éxito');
      setSuccessMessageVisible(true);
      generatePDF(); // Llama a la función para generar el PDF
    } else {
      // La transacción no se completó con éxito
      console.log('La transacción no se completó con éxito');
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md bg-red-300 w-full ">
          <div>
            <p className="text-lg font-semibold">Detalles del producto:</p>
            <div className="container mx-auto p-4 bg-amber-600 w-full flex flex-wrap">
              {cart.map((product, index) => (
                <div key={index} className='flex flex-col justify-around items-center flex-wrap m-8 w-72 bg-white rounded-3xl shadow-gray-950 shadow-md gap-2 py-4 md:flex-row' >
                  <img src={product.photo} alt={`product-image-${index}`} className="h-32 w-32 object-contain" />
                  <div className="flex flex-col gap-3">
                    <h3 className='name font-semibold'>{product.name}</h3>
                    {/* Agrega otros detalles del producto aquí, si es necesario */}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xl mt-2">Total: ${total}</p>
          </div>
        </div>

        <div className="bg-green-200 w-full  justify-center items-center ">

          <PayPalButton
            amount={total}
            options={paypalOptions}
            onSuccess={onSuccess}
          />
        </div>


        {successMessageVisible && (
          <div className="mt-4 bg-green-200 p-4 rounded-lg shadow-md">
            <p className="text-green-600 text-lg">¡La compra ha sido realizada con éxito!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pay;
