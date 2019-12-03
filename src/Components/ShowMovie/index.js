import React, { Component } from 'react'

class ShowMovie extends Component {
    state = {
        movie: {}
    }

    async componentDidMount() {
        console.log(this.props.match.params.id)
        const resMovie = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`)
        const movieJson = await resMovie.json()
        console.log(movieJson)
        this.setState({
            movie: movieJson
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.movie.title}</h1>
                <p>{this.state.movie.overview}</p>
            </div>
        );
    }
}

export default ShowMovie
