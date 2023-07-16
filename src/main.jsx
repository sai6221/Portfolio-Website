import React from 'react';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
