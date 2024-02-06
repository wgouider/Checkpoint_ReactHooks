import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  // Chargement des données dans les cards
  // const [movies, setMovies] = useState(moviesData);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          backgroundColor: "#212A38",
          margin: "2rem",
        }}
      >
        {movies.map((movie, index) => (
          <div className="image-container d-flex justify-content-start m-3">
            <MovieCard key={index} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieList;
