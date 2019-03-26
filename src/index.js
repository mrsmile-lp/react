import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Header from "./components/header";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);