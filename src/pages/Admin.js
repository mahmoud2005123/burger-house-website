import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Admin Panel </h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul className="list-group">
          {orders.map((order, index) => (
            <li key={index} className="list-group-item">
              <strong>{order.name}</strong> ordered <em>{order.item}</em> - {order.phone}<br />
              Notes: {order.notes}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Admin;