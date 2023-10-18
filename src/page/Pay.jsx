import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import jsPDF from 'jspdf';

const Pay = () => {
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
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <div>
            <p className="text-lg font-semibold">Detalles del producto:</p>
            <p className="text-xl mt-2">Total: ${total}</p>
          </div>
        </div>

        <PayPalButton
          amount={total}
          options={paypalOptions}
          onSuccess={onSuccess}
        />

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
