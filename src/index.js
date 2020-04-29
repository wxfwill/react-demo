import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
// import App from './App';
// import Admin from './admin'
import * as serviceWorker from './serviceWorker';
import Router from './router'
import configureStore from './redux/store/configureStore';

const store = configureStore();


ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
        <Router />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
