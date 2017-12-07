import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './ducks/reducer';
import { createStore } from 'redux';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<BrowserRouter> 
    <Provider store = {store}> 
        <App/>
    </Provider> 
</BrowserRouter>

, document.getElementById('root'));
unregister();
