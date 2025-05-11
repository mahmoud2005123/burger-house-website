import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const email = decoded.email;

        // Send logout request to backend
        await axios.post('http://localhost:5000/auth/logout', { email });
      } catch (err) {
        console.warn('Logout request failed:', err.message);
      }
    }

    // Clear session and redirect
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  // Decode JWT token to get email
  const token = sessionStorage.getItem('token');
  let userEmail = '';
  if (token) {
    try {
      const decoded = jwtDecode(token);
      userEmail = decoded.email;
    } catch (err) {
      console.error('Invalid token:', err);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand fs-3" to="/">
          <span className="text-warning">Burger</span> House
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/reservation">Reservation</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/feedback">Feedback</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            {userEmail && (
              <li className="nav-item mx-2">
                <span className="nav-link text-warning">{userEmail}</span>
              </li>
            )}
            <li className="nav-item mx-2">
              <button 
                className="nav-link btn btn-link" 
                onClick={handleLogout}
                style={{ color: '#ffc107' }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;