import React from "react";
import {connect} from 'react-redux';

class Movie extends React.Component {

    render() {
        // console.log(this.props);
        const {filmData} = this.props;
        const {match} = this.props;
        const film = filmData.filter(function(item){
            return item.id == match.params.id;
        });
        console.log(film[0]);
        return(
            <div className="movie">{film[0].id}</div>
        )
    }
        
}

export default connect(store =>({
    filmData: store.queries
}))(Movie);