import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
// Chargement des données dans les cards 
// const [movies, setMovies] = useState(moviesData);

  return (
    <div>
        <div style={{ display: "flex", justifyContent:"center",flexWrap: "wrap", backgroundColor: "black", margin: "2rem", }}>
          {movies.map((movie, index) => (
          <MovieCard key={index} movie = {movie} />
            ))}
        </div>
    </div>
    
    );
    };
export default MovieList
