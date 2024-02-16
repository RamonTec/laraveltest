import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const PayPalCancel = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center text-white mt-5'>
      <h1>Pago cancelado</h1>
      <NavLink to='/paypal'>
        <Button variant="primary">Go to paypal</Button>
      </NavLink>
    </div>
  );
};

export default PayPalCancel;
