import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const PayPalSuccess = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center text-white mt-5'>
      <h1>Pago Exitoso</h1>
      <p>¡Gracias por realizar tu pago!</p>
      <NavLink to='/paypal'>
        <Button variant="primary">Go to paypal</Button>
      </NavLink>
    </div>
  );
};

export default PayPalSuccess;
