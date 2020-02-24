import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App />  
    </Provider>
   ,
    document.getElementById('root')
);