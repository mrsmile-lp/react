import React from "react";

class MovieItem extends React.Component {
    constructor() {
        super();
        this.state = {
            url: 'https://reactjs-cdp.herokuapp.com/movies',
            content: []
        };

       this.getMovies = this.getMovies.bind(this);
    };
    async getMovies(endpoint) {
        const movies = await fetch(endpoint);
        const jsonMovies = await movies.json();
        this.setState({
            content: jsonMovies.data
        });
    }

    componentDidMount() {
        this.getMovies(this.state.url);
    }

    render() {
        return(
            this.state.content.map(item => {
                return (
                    <div className="movie-item" key={item.id}>
                        <img className="movie-poster" src={item.poster_path}/>
                        <div className="movie-label">
                            <div className="title">{item.title}</div>
                            <div>{item.release_date.substring(0,4)}</div>
                        </div>
                        <div className="movie-genre">{item.genres.map(genre => {
                            return genre + ' ';
                        })}</div>
                    </div>
                )
            })           
        )
    };
}

export default MovieItem;