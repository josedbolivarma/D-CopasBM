import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from  './redux/store/store';

ReactDOM.render(
    <Provider store={store}>
    <AppRoutes />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
