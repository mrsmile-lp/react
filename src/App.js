import React from "react";
import {hot} from 'react-hot-loader/root';
import Header from "./components/header";
import Footer from "./components/footer";

const App = ({children}) => (
    <div className="App">
        <Header/>
        {children}
        <Footer/>
    </div>
);

export default hot(App);