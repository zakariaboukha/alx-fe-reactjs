// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // Import the App component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Render App component */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
