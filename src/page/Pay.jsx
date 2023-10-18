import { DataContext } from "../components/Context/DataContext.jsx";
import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
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
  
    // Título del PDF
    doc.setFontSize(16);
    doc.text('Comprobante de Compra', 10, 10);
  
    // Detalles del producto
    doc.setFontSize(12);
    let yPosition = 30; // Posición vertical inicial para los detalles del producto
  
    cart.forEach((product, index) => {
      doc.text(`Producto ${index + 1}: ${product.name}`, 10, yPosition);
      yPosition += 10;
      // Agrega otros detalles del producto según tus necesidades
    });
  
    // Total a pagar
    doc.setFontSize(14);
    doc.text(`Total a pagar: $${total}`, 10, yPosition + 10);
  
    // Dirección u otros detalles
    // Puedes agregar más detalles según sea necesario
  
    // Guarda el PDF con un nombre
    doc.save('comprobante_de_compra.pdf');
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

      <div className='flex gap-1 text-base pl-6 py-2 items-center bg-sky-100'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
        </svg>
        <Link to="/">Home</Link>
        <Link to="/store">/Store</Link>
        <Link to="/cart">/Cart</Link>
        <p className='font-semibold'>/Payment</p>
      </div>

      <div className="mx-auto p-4 bg-sky-100">
        <div className="bg-sky-100 p-4 rounded-lg w-full flex items-center justify-center ">
          <div>
            <p className="text-lg font-semibold">Product details:</p>
            <div className="mx-auto bg-sky-100 w-full flex flex-wrap">
              {cart.map((product, index) => (
                <div key={index} className='flex flex-col justify-around items-center flex-wrap m-8 w-72 bg-white rounded-3xl shadow-gray-950 shadow-md gap-2 py-4 md:flex-row' >
                  <img src={product.photo} alt={`product-image-${index}`} className="h-32 w-32 object-contain" />
                  <div className="flex flex-col gap-3">
                    <h3 className='name font-semibold text-center'>{product.name}</h3>
                    {/* Agrega otros detalles del producto aquí, si es necesario */}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xl text-center lg:text-2xl">Total: ${total}</p>
          </div>
        </div>

        <div className="bg-sky-100 w-full lg:px-60">
          <PayPalButton
            amount={total}
            options={paypalOptions}
            onSuccess={onSuccess}
          />
        </div>




        {successMessageVisible && (
          <div className="mt-4 bg-green-200 p-4 rounded-lg shadow-md">
            <p className="text-green-600 text-lg">The purchase has been successfully completed!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pay;
