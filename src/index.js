import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Main App component
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

// Wrap the App component with BrowserRouter to provide routing context
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  {/* Only wrap here in index.js */}
    <App />
  </BrowserRouter>
);
