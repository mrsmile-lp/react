import React from "react";

class SearchTools extends React.Component {
    state = {
        query: '',
        filter: ''
    };    

    updateQuery({target: {value}}) {
        console.log(this.state);
        this.setState({
            query: value,
            filter: ''
        })
    }
    render() {
        const {query, filter} = this.state;
        return(
            <div className="search-tools">
                <input type="text" placeholder="search" onChange={this.updateQuery} value={query}></input>
                <div className="search-by-label">Search by</div>
                <label>
                    <input type="radio" className="search-by-button" name="filter-type"></input>
                    Title
                </label>
                <label>
                    <input type="radio" className="search-by-button" name="filter-type"></input>
                    Genre
                </label>                
                <button className="search-button" onClick={this.makeSearchRequest}>Search</button>
            </div>
        );
    }
}

export default SearchTools;