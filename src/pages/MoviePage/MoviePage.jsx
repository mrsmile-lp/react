import React from 'react';
import styles from './MoviePage.css';
import { hot } from "react-hot-loader";
import { Link } from 'react-router-dom';

class MoviePage extends React.Component {
    state = {
        movie: {}
    }

    async getMovie(id) {
        const resp = await fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`);
        const movieJson = await resp.json();
        await this.setState({
            movie: movieJson
        })
    }

    componentDidMount() {
        this.getMovie(this.props.match.params.id);
    }

    render() {
        const { movie } = this.state;
        console.log(movie);
        return (
            <div className={styles.wrapper}>
                <div className={styles.movie}>
                    <div>
                        <img src={movie.poster_path} />
                    </div>
                    <h2 className={styles.title}>
                        {movie.title}
                    </h2>
                    <div>
                        {movie.overview}
                    </div>
                    <Link to="/" >
                        <div className={styles.buttonback}>
                            Home</div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default hot(module)(MoviePage);