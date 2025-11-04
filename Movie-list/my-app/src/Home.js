import React, { useState } from "react";

function Home({ addMovie }) {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addMovie({ title, comment, stars });
    setTitle("");
    setComment("");
    setStars(1);
  };

  const handleStarClick = (num) => {
    setStars(num);
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write a short comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="stars">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            onClick={() => handleStarClick(num)}
            style={{
              cursor: "pointer",
              fontSize: "1.8rem",
              color: num <= stars ? "gold" : "white", 
              textShadow: "0 0 3px #000",
              transition: "color 0.2s ease",
            }}
          >
            ★
          </span>
        ))}
      </div>

      <button type="submit">Add Movie</button>
    </form>
  );
}

export default Home;