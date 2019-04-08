import React from "react";
import ReactDOM from "react-dom";
import '@babel/polyfill';
import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);