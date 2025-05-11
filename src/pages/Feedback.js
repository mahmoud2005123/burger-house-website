import React, { useState } from 'react';
import axios from 'axios';
import './Feedback.css';

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5 // Optional default rating
  });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/feedback/new', formData);
      setResponse('Thank you for your feedback!');
      setFormData({ name: '', email: '', message: '', rating: 5 });
    } catch (err) {
      setResponse('Failed to send feedback. Please try again.');
    }
  };

  return (
    <section className="section__container feedback__container" id="feedback">
      <h3>YOUR OPINION MATTERS</h3>
      <h2 className="section__header">SEND US FEEDBACK</h2>
      <form id="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <select name="rating" value={formData.rating} onChange={handleChange}>
          {[5, 4, 3, 2, 1].map((n) => (
            <option key={n} value={n}>{n} Star{n > 1 ? 's' : ''}</option>
          ))}
        </select>
        <button type="submit">SEND FEEDBACK</button>
        {response && <p style={{ marginTop: '10px' }}>{response}</p>}
      </form>
    </section>
  );
}

export default Feedback;
