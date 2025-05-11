import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Success from './pages/Success';
import Reservation from './pages/Reservation';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ContactUs from './pages/ContactUs';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('token'); 
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router basename="/burger-house-website">  {/* تحديد الـ basename هنا */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <div className="container mt-5 pt-5">
                  <Home />
                </div>
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <div className="container mt-5 pt-5">
                  <Menu />
                </div>
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <div className="container mt-5 pt-5">
                  <About />
                </div>
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <div className="container mt-5 pt-5">
                  <Success />
                </div>
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/reservation"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <div className="container mt-5 pt-5">
                  <Reservation />
                </div>
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/feedback"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <div className="container mt-5 pt-5">
                  <Feedback />
                </div>
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <div className="container mt-5 pt-5">
                  <ContactUs />
                </div>
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
