import React, {useState} from "react";
import "./allTimeMovies.scss";
import allMoviesData from "../../allTimeMovies.json";
import {useDispatch} from "react-redux";
import {setSelectedMovie} from "../../store/movieAction";
import {toggleMovieVisibility} from "../../store/visibilityAction";

const AllTimeMovies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const handleToggleVisibility = () => {
    dispatch(toggleMovieVisibility());
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= allMoviesData.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allMoviesData.length - 1 : prevIndex - 1
    );
  };

  const isOnStartIndex = currentIndex === 0;
  const lastIndex = currentIndex === 9;

  return (
    <div className="allMovies-container">
      <h5>All time</h5>
      <div className="slider">
        <button
          className="prev-buttons"
          onClick={prevSlide}
          disabled={isOnStartIndex}
        >
          &#8249;
        </button>
        {allMoviesData.slice(currentIndex, currentIndex + 3).map((movie) => (
          <div key={movie.id} className="slide">
            <h3>{movie.title}</h3>
            <img
              src={movie.image}
              alt={`${movie.title} image`}
              onClick={() => {
                dispatch(setSelectedMovie(movie));
                handleToggleVisibility();
              }}
            />
          </div>
        ))}

        <button
          className="next-buttons"
          onClick={nextSlide}
          disabled={lastIndex}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default AllTimeMovies;
