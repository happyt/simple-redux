import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom';
// import sampleData from './initialState'

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// const initialState = (localStorage["redux-store"]) ?
//     JSON.parse(localStorage["redux-store"]) :
//     sampleData

// const saveState = () =>
//     localStorage["redux-store"] = JSON.stringify(store.getState())

// const store = storeFactory(initialState)
// store.subscribe(saveState)

const store = configureStore(); // You can also pass in an initialState here


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
