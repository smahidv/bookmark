import React from 'react';
import { createRoot } from 'react-dom/client';
import {HashRouter as Router } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
