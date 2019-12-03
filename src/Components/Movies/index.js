import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { MOVIES } from '../../constants/routes'

class Movies extends Component {
    state = {
        movies: [],
        search: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        const movie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=Fight%20Club&page=1&include_adult=false`)
        const movieJson = await movie.json()
        console.log(movieJson)
        this.setState({
            movies: movieJson.results
        })
    }

    doGetMovie = async () => {
        const movie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${this.state.search}&page=1&include_adult=false`)
        const movieJson = await movie.json()
        console.log(movieJson)
        this.setState({
            movies: movieJson.results
        })
    }

    render() {
        return (
            <div>
                <input name='search' value={this.state.search} placeholder='Find a movie' onChange={this.handleChange}/>
                <button onClick={this.doGetMovie}>Search for Movie</button>
                {
                    this.state.movies.map(movie => 
                        <div>
                            <h3>{movie.title}</h3>
                            <Link to={`${MOVIES}/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            </Link>
                        </div>
                    )
                }
            </div>
        );
    }
};

export default Movies;