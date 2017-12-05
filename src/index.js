import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
//
import { Provider } from 'react-redux';



import reduxstore from './reduxstore';

ReactDOM.render(
<BrowserRouter> 
    <Provider store = { reduxstore }> 
        <App/>
    </Provider> 
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
