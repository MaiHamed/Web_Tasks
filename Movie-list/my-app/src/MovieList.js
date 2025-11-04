import React from "react";

function List({ movies, removeMovie }) {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies yet. Add one!</p>
      ) : (
        movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.comment}</p>
            <p>
              {"⭐".repeat(movie.stars)}
              <span>
                ({movie.stars}/5)
                
              </span>
            </p>
            <button onClick={() => removeMovie(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default List;