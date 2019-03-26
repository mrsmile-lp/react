import React from "react";
import ReactDOM from "react-dom";
import GeneralTitle from "./generalTitle";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <GeneralTitle/>
            </div>
        )
    }
}

export default Header;