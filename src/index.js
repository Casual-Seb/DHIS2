import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configure-store';

/**
 * Create our store
 */
const store = configureStore();

let baseURL;

if (process.env.NODE_ENV === 'development') {
    baseURL = '/';
}
else {
    baseURL = process.env.REACT_APP_BASEURL;
}
ReactDOM.render(
    <Provider store={store}>
        <App baseURL={baseURL}/>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
