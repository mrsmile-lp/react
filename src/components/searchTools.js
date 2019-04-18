import React from "react";
import {connect} from 'react-redux';
import {makeSearch} from './actions/makeSearch';


class SearchTools extends React.Component {
    state = {
        query: '',
        filter: 'title',
        endPoint: 'https://reactjs-cdp.herokuapp.com/movies',
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
        const {query, filter, endPoint, content} = this.state;
        const {makeSearch} = this.props;
        makeSearch(query, filter, endPoint, content);
        this.setState({
            query: ''
        })
    }

    async getMovies(endpoint) {
        const movies = await fetch(endpoint);
        const jsonMovies = await movies.json();
        await this.setState({
            content: jsonMovies.data
        });
    }

    componentDidMount() {
        this.getMovies(this.state.endPoint);
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
    filter: state.filter,
    query: state.query,
    content: state.content,
    endPoint: state.endPoint
}), {makeSearch}) (SearchTools);