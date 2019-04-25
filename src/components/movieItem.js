import React from "react";
import queries from '../reducers/queries';
import {connect} from 'react-redux';

class MovieItem extends React.Component {
    constructor() {
        super();
        this.state = {
            url: 'https://reactjs-cdp.herokuapp.com/movies',
            content: []
        };
    };

    componentDidMount() {
        
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const content = this.props.content;

        return(
            content.map(item => {
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

export default connect(state =>({
    content: state.queries
}))(MovieItem);