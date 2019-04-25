import React from "react";
import {connect} from 'react-redux';
import {makeSearch} from './actions/makeSearch';


class SearchTools extends React.Component {
    state = {
        query: '',
        filter: 'title',
        endPoint: 'https://reactjs-cdp.herokuapp.com/movies',
        searchUrl: 'https://reactjs-cdp.herokuapp.com/movies',
        content: []
    };    

    updateQuery = ({target: {value}}) => {
        this.setState({
            query: value
        })
    }

    queryFilter = ({target : {value}}) => {
        this.setState({
            filter: value
        })
    }

    makeSearchQuery = () => {
        const {content} = this.state;
        const {makeSearch} = this.props;
        const searchUrl = this.state.endPoint + '?search=' + this.state.query + '&searchBy=' + this.state.filter + '&limit=50';
        makeSearch(content);
        this.setState({
            query: '',
            searchUrl: searchUrl
        })
    }

    async getMovies(endpoint) {
        const movies = await fetch(endpoint);
        const jsonMovies = await movies.json();
        await this.setState({
            content: jsonMovies.data
        });
    }

    async componentDidMount() {
        await this.getMovies(this.state.searchUrl);
    }

    async shouldComponentUpdate() {
        await this.getMovies(this.state.searchUrl);
        return false;
    }

    render() {
        const {query} = this.state;
        return(
            <div className="search-tools">
                <input type="text" placeholder="search" onChange={this.updateQuery} value={query}></input>
                <div className="search-by-label">Search by</div>
                <label>
                    <input type="radio" className="search-by-button" name="filter-type" value="title" onChange={this.queryFilter}></input>
                    Title
                </label>
                <label>
                    <input type="radio" className="search-by-button" name="filter-type" value="genre" onChange={this.queryFilter}></input>
                    Genre
                </label>                
                <button className="search-button" onClick={this.makeSearchQuery}>Search</button>
            </div>
        );
    }
}

export default connect(state => ({
    content: state.content
}), {makeSearch}) (SearchTools);