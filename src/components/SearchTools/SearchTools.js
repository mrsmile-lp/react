import React from "react";
import PropTypes from "prop-types";
import styles from "./SearchTools.css";

class searchTools extends React.Component {
  state = {
    movies: [],
    query: "",
    filter: ""
  };

  async getMovies() {
    console.log(this);
    const { query } = this.state;
    const { searchBy } = this.state;
    const res = await fetch(
      `http://react-cdp-api.herokuapp.com/movies?search=${query}&searchBy=${searchBy}`
    );
    const resJson = await res.json();
    const moviesArray = resJson.data;
    this.setState({
      movies: moviesArray
    });
  }

  setQuery({ target: { value } }) {
    this.setState({
      query: value
    });
  }

  setFilter({ target: { value } }) {
    this.setState({
      filter: value
    });
  }

  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      <div className={styles.searchTools}>
        <input type="text" placeholder="search" onChange={this.setQuery} />
        <div>Search by</div>
        <label className="radio">
          <input
            type="radio"
            name="filter-type"
            value="title"
            onChange={this.setFilter}
          />
          <div>Title</div>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="filter-type"
            value="genres"
            onChange={this.setFilter}
          />
          <div>Genre</div>
        </label>
        <div className={styles.button} onClick={this.getMovies}>
          Search
        </div>
      </div>
    );
  }
}

export default searchTools;
