import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './App.css';

const App = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the Sign Up or Sign In page
  };

  return (
    <div className="app">
      <Routes>
        {/* Root route will show Welcome Page */}
        <Route path="/" element={<Welcome handleNavigation={handleNavigation} />} />
        
        {/* Other routes for Sign Up and Sign In */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

// Welcome page is only shown when on the '/' route
const Welcome = ({ handleNavigation }) => {
  return (
    <div className="welcome-container">
      <h1>Welcome to SmartNutrition</h1>
      <div className="buttons-container">
        <button onClick={() => handleNavigation('/signup')}>Sign Up</button>
        <button onClick={() => handleNavigation('/signin')}>Sign In</button>
      </div>
    </div>
  );
};

export default App;
