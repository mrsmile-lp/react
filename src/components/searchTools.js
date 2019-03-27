import React from "react";

class SearchTools extends React.Component {
    render() {
        return(
            <div className="search-tools">
                <div className="search-by-label">Search by</div>
                <button className="search-by-button">Title</button>
                <button className="search-by-button">Genre</button>
                <button className="search-button">Search</button>
            </div>
        );
    }
}

export default SearchTools;