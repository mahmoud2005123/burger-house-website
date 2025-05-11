import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="text">
      <h2>✅ Order Successful!</h2>
      <p>Thanks for your order. We’re already grilling it 🔥</p>
      <Link className="btn " to="/">Return to Home</Link>
    </div>
  );
}

export default Success;
