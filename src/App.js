import React from "react";
import {hot} from 'react-hot-loader/babel';
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer"


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;