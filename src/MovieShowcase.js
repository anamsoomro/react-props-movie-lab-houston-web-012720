import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return ( 
      movieData.map( movie => {
        // console.log(movie)
        return (
          <div>
            {/* <MovieCard movie={movie} /> */}
            <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>

          </div>
        )
      })
    )
  }



  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
