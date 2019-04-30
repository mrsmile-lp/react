import React from "react";
import ReactDOM from "react-dom";
import '@babel/polyfill';
import App from "./App";
import "./styles.css";
import { Provider } from 'react-redux';
import store from './reducers/store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Content from "./components/content";
import Movie from "./components/movie";

const rootElement = document.getElementById("root");
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' component={Content}/>
                    <Route path='/film/:id' component={Movie}/>
                </Switch>
            </App>
        </BrowserRouter>        
    </Provider>) ,rootElement);