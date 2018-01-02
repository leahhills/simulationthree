import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import registerServiceWorker from './registerServiceWorker';
// import { unregister } from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    // <Provider store = { store }>
        <BrowserRouter> 
            <App/>
        </BrowserRouter>
    // </Provider>
    , document.getElementById('root'));

registerServiceWorker();
