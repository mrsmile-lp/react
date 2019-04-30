import React from "react";
import queries from '../reducers/queries';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class MovieItem extends React.Component {
    constructor() {
        super();
        this.state = {
            url: 'https://reactjs-cdp.herokuapp.com/movies',
            content: []
        };
    };

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const {content} = this.props;

        return(
            content.map(item => {
                return (
                    <div className="movie-item" key={item.id}>
                    <Link to={'film/' + item.id}>
                        <img className="movie-poster" src={item.poster_path}/>
                        <div className="movie-label">
                            <div className="title">{item.title}</div>
                            <div>{item.release_date.substring(0,4)}</div>
                        </div>
                        <div className="movie-genre">{item.genres.map(genre => {
                            return genre + ' ';
                        })}</div>
                        </Link>
                    </div>
                )
            })           
        )
    };
}

export default connect(state =>({
    content: state.queries
}))(MovieItem);