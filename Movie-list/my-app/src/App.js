import React, { useState } from "react";
import Home from "./Home";
import List from "./MovieList";
import "./index.css";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  return (
    <div className="app-container">
      <h1>Mai Moives list</h1>
      <Home addMovie={addMovie} />
      <List movies={movies} removeMovie={removeMovie} />
    </div>
  );
}

export default App;