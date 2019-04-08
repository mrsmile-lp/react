import React from "react";

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            url: 'https://reactjs-cdp.herokuapp.com/movies',
            content: {}
        };

       this.getMovies = this.getMovies.bind(this);
    };
    async getMovies(endpoint, id = null) {
        const movies = await fetch(endpoint);
        const jsonMovies = await movies.json();
        this.setState({
            content: jsonMovies
        });
        //console.log(this.state.content.data[0].id);
    }
    render() {
        this.getMovies(this.state.url);
        console.log(this.state.content.data[0].id);
        return(
            <div className="content">
                {this.state.content.data[0].id}
            </div>
        )
    };
}

export default Content;