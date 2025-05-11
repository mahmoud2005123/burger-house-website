import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import burger1 from '../assets/order-1.png';
import burger2 from '../assets/order-2.png';
import burger3 from '../assets/order-3.png';
import './Menu.css';

function Menu() {
  const [orderItems, setOrderItems] = useState([]);
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleOrder = (item, price) => {
    const existingItem = orderItems.find(order => order.item === item);

    if (existingItem) {
      setOrderItems(orderItems.map(order =>
        order.item === item ? { ...order, quantity: order.quantity + 1 } : order
      ));
    } else {
      setOrderItems([...orderItems, { item, price, quantity: 1 }]);
    }
  };

  const removeItem = (itemToRemove) => {
    setOrderItems(orderItems.filter(order => order.item !== itemToRemove));
  };

  const totalPrice = orderItems.reduce((total, order) => total + (order.price * order.quantity), 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (orderItems.length === 0) {
      alert('Please add at least one item to your order');
      return;
    }

    const token = sessionStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to place an order.');
      return;
    }

    const items = orderItems.map(order => ({
      name: order.item,
      quantity: order.quantity,
      price: order.price
    }));

    try {
      await axios.post(
        'http://localhost:5000/order/new',
        { items, total: totalPrice, notes },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert('Order placed successfully!');
      setOrderItems([]);
      setNotes('');
      navigate('/success');
    } catch (err) {
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="menu-page">
      <h2 className="text-center mb-4">Our Menu</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={burger1} className="card-img-top" alt="Burger 1" />
            <div className="card-body">
              <h5 className="card-title">Classic Burger</h5>
              <p className="card-text">A juicy beef patty with lettuce, tomato, and cheese.</p>
              <p className="card-text"><strong>$8.99</strong></p>
              <button onClick={() => handleOrder('Classic Burger', 8.99)} className="btn btn-primary">
                Add to Order
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={burger2} className="card-img-top" alt="Burger 2" />
            <div className="card-body">
              <h5 className="card-title">Spicy Burger</h5>
              <p className="card-text">A spicy twist with jalapeños and hot sauce vegetables and hummus.</p>
              <p className="card-text"><strong>$9.99</strong></p>
              <button onClick={() => handleOrder('Spicy Burger', 9.99)} className="btn btn-primary">
                Add to Order
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={burger3} className="card-img-top" alt="Burger 3" />
            <div className="card-body">
              <h5 className="card-title">Veggie Burger</h5>
              <p className="card-text">A healthy choice with grilled vegetables and hummus.</p>
              <p className="card-text"><strong>$7.99</strong></p>
              <button onClick={() => handleOrder('Veggie Burger', 7.99)} className="btn btn-primary">
                Add to Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="order-summary mt-5">
        {orderItems.length > 0 ? (
          <>
            <h3>Your Order:</h3>
            <ul className="list-group">
              {orderItems.map((order, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {order.item} - Quantity: {order.quantity} - ${order.price * order.quantity}
                  <button onClick={() => removeItem(order.item)} className="btn btn-danger btn-sm">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="mt-3">Total Price: ${totalPrice.toFixed(2)}</h4>

            <div className="form-group mt-3">
              <label htmlFor="notes" className="text-warning">Special Notes:</label>
              <textarea
                id="notes"
                className="form-control"
                rows="4"
                placeholder="Any special instructions..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            <button onClick={handleSubmit} className="btn btn-success mt-3">
              Proceed to Checkout
            </button>
          </>
        ) : (
          <p>Please add items to your order</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
