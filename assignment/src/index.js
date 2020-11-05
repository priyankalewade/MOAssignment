import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculator from './Calculator/Calculator.js';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer.js';

// create store object 
const store = createStore(reducer);
ReactDOM.render( <Provider store={store}> <Calculator /> </Provider>,  document.getElementById('root'));


reportWebVitals();
