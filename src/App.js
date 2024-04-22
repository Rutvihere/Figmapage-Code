import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
