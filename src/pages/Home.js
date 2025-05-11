import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="home-page"> 
      <div className="header">
        <div className="header-content">
          <h1>Welcome to Our Burger House!</h1>
          <p>Delicious burgers made with the finest ingredients.</p>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Order Now!</h2>
        <Link to="/menu" className="btn btn-primary">
          Browse Menu
        </Link>
      </div>

      <div className="info-section">
        <h2>About Us</h2>
        <p>
          We offer a variety of mouth-watering burgers made with fresh ingredients.
          Whether you're craving a classic burger or something more exotic, we have something for everyone.
        </p>
      </div>

      <div className="footer">
        <p>© 2024 Our Burger Place. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;