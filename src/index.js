
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';


const root = document.getElementById('root');

if (root) {
  const rootContainer = ReactDOM.createRoot(root);
  rootContainer.render(<App />);
}
