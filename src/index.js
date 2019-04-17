import React from "react";
import ReactDOM from "react-dom";
import '@babel/polyfill';
import App from "./App";
import "./styles.css";
import { Provider } from 'react-redux';
import store from './reducers/store';

const rootElement = document.getElementById("root");
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>) ,rootElement);