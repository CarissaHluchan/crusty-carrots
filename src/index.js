import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename="/">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);

reportWebVitals()