import React from "react";
import SearchTitle from "./searchTitle";
import SearchBar from "./searchBar";
import SearchTools from "./searchTools";

class SearchPanel extends React.Component {
    render() {
        return(
            <div className="search-panel">
                <SearchTitle/>
                <SearchBar/>
                <SearchTools/>
            </div>
        )
    }
}

export default SearchPanel;