import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss'
import App from './Components/App'
import Shop from './Components/Shop'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Shop />
  </React.StrictMode>,
  document.getElementById('root')
);
