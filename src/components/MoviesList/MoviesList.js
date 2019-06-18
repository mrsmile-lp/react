import React from "react";
import styles from "./MoviesList.css";
import { Link } from "react-router-dom";

class MoviesList extends React.Component {
  state = {
    movies: []
  };

  async getMovies() {
    const resp = await fetch("http://react-cdp-api.herokuapp.com/movies");
    const respJson = await resp.json();
    const moviesList = respJson.data;
    this.setState({
      movies: moviesList
    });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={styles.moviesList}>
        {movies.map(movie => (
          <div key={movie.id} className={styles.movieItem}>
            <div>
              <img src={movie.poster_path} className={styles.poster} />
            </div>
            <div>{movie.title}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default MoviesList;
