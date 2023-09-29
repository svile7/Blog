import React, {useState} from "react";
import {useSelector} from "react-redux";
import "./movies.scss";
import moviesData from "../movies.json";
import AllTimeMovies from "./all-movies/allTimeMovies";
import MoviesDescription from "./movies-description/moviesDescription";

const Movies = (onImageClick) => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const isVisible = useSelector((state) => state.movieVisibility.isVisible);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedMovies = moviesData.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage(currentPage + 0.5);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 0.5);
    }
  };

  return (
    <div className="movies-container">
      <h2>List of movies</h2>
      <h4>New</h4>
      <div className="movies-glavni">
        <button
          className="prev-button"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          &#171;
        </button>
        {displayedMovies.map((movie) => (
          <div key={movie.id} className="movies-filmovi">
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <div className="data-movies">
              <p>{movie.year} </p>
              <p>{movie.genre}</p>
              <p>{movie.duration}</p>
            </div>
            <div className="description-movies">
              <p>{movie.description}</p>
            </div>
          </div>
        ))}

        <button
          className="next-button"
          onClick={nextPage}
          disabled={endIndex >= moviesData.length}
        >
          &#187;
        </button>

        {isVisible && <MoviesDescription />}

        <AllTimeMovies />
      </div>
    </div>
  );
};

export default Movies;
