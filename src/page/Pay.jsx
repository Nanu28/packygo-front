import React from 'react'
import { useParams } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2';


const Pay = () => {
    const { total} = useParams();

    const paypalOptions = {
      clientId: 'ARg6xp3qWZd3iZm3562vjDU6TVavQw_1xbLwvVT3E169PvdG9U8yL0NRHc9ahMj_UjocCubpXCzAWQDv',
    };

    const onSuccess = (details, data) => {
      // Lógica para manejar el pago exitoso
      console.log('Pago exitoso:', details);
      // Puedes redirigir al usuario a una página de confirmación aquí
    };
  
  return (
    <div>
      <div>{total}</div>
    
      <PayPalButton
        amount={total} // Utiliza la variable total para definir el monto a pagar
        options={paypalOptions}
        onSuccess={onSuccess}
      />
    </div>
    
    
  )
}

export default Pay