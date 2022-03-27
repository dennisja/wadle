import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ROOT_ELEMENT } from './utils/constants';
import { initSentry } from './utils/sentry';

initSentry();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  ROOT_ELEMENT
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
