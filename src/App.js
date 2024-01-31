import './App.css';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { moviesData } from './Data';
import React, { useState}  from 'react';
import Filter from './components/Filter';  
const App= () => {
  const [movies, setMovies] = useState(moviesData); 
  const [filter, setFilter] = useState({ title: '', rate: '' });  


  const handleFilterChange = (type, value) => {
    setFilter({ ...filter, [type]: value });
  };

  const add = (newMovie) => {
    setMovies([...movies,newMovie])
  }

  const filteredMovies = movies.filter((movie) => {
    const { title, rate } = filter;
    return (
      movie.title.toLowerCase().includes(title.toLowerCase()) && (!rate || movie.rate >= parseFloat(rate))
    );
  });


  return (
    <div style ={{backgroundColor : 'black'}} className="App">
      
      <div style={{gap:'64rem'}} className= "Entete">
      <h1 style ={{color : 'white', marginLeft:'100px'}}> App Movies</h1>
      <Filter style ={{display : 'flex', justifyContent:'flex-end' }} className='filter' onFilterChange={handleFilterChange} />
      </div>
      <MovieList movies={filteredMovies} />

      
      < AddMovie add={add} />
    </div>
  );
}

export default App;
