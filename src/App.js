import "./App.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import { moviesData } from "./Data";
import React, { useState } from "react";
import Filter from "./components/Filter";
import { Route, Router, Routes } from "react-router-dom";
import MovieDescription from "./components/Description/Description";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filter, setFilter] = useState({ title: "", rate: "" });

  const handleFilterChange = (type, value) => {
    setFilter({ ...filter, [type]: value });
  };

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    const { title, rate } = filter;
    return (
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      (!rate || movie.rate >= parseFloat(rate))
    );
  });

  return (
    <div style={{ backgroundColor: "#212A38" }} className="App">
      <div style={{ gap: "21rem" }} className="Entete">
        <h1 style={{ color: "white", marginLeft: "140px" }}> App Movies</h1>
        <AddMovie add={add} />
        <Filter
          style={{ display: "flex", justifyContent: "flex-end" }}
          className="filter"
          onFilterChange={handleFilterChange}
        />
      </div>

      <MovieList movies={filteredMovies} />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/Description" element={<MovieDescription />} /> */}
      </Routes>
    </div>
  );
};

export default App;
