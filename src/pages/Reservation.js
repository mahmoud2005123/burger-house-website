import React, { useState } from 'react';
import axios from 'axios';
import './Reservation.css';

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/reservation/new', {
        ...formData,
        phone: 'N/A' // optional if you're not collecting it
      });
      setMessage('Your table is reserved! Thank you.');
      setFormData({ name: '', email: '', date: '', time: '', guests: '' }); // reset form
    } catch (err) {
      setMessage('Reservation failed. Please try again.');
    }
  };

  return (
    <section className="reservation" id="reserve">
      <div className="section__container reservation__container">
        <h3>RESERVATION</h3>
        <h2 className="section__header">BOOK YOUR TABLE</h2>
        <form id="reservation-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
          <button type="submit">FIND TABLE</button>
          {message && <p style={{ marginTop: '10px', color: 'white' }}>{message}</p>}
        </form>
      </div>
      <img src="/assets/reservation-bg-1.png" alt="reservation" className="reservation__bg-1" />
      <img src="/assets/reservation-bg-2.png" alt="reservation" className="reservation__bg-2" />
    </section>
  );
}

export default Reservation;
