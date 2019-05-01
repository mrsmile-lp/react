import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Movie extends React.Component {

    render() {
        const {filmData} = this.props;
        const {match} = this.props;
        const film = filmData.filter(function(item){
            return item.id == match.params.id;
        });
        const filmItem = film[0];
        return (
          <div className="film-wrapper">
            <div className="film">
              <div className="film-title">
                <h1>{filmItem.title}</h1>
              </div>
              <div className="film-image">
                <img src={filmItem.poster_path} />
              </div>
              <div className="film-overview">{filmItem.overview}</div>
            </div>
            <Link to='/' className="button">Home</Link>
          </div>
        );
    }
        
}

export default connect(store =>({
    filmData: store.queries
}))(Movie);