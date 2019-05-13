import React from "react";
import SearchTitle from "./searchTitle";
import SearchTools from "./searchTools";

class SearchPanel extends React.Component {
    render() {
        return(
            <div className="search-panel">
                <SearchTitle/>
                <SearchTools/>
            </div>
        )
    }
}

export default SearchPanel;