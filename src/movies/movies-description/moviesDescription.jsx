import React, {useState} from "react";
import {useSelector} from "react-redux";
import "./moviesDescription.scss";
import {useDispatch} from "react-redux";
import {toggleMovieVisibility} from "../../store/visibilityAction";

const MoviesDescription = () => {
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);

  const dispatch = useDispatch();
  const handleToggleVisibility = () => {
    dispatch(toggleMovieVisibility());
  };
  return (
    <div>
      (
      <div className="description-blur">
        <div className="moviesDescription">
          {selectedMovie ? (
            <>
              <span onClick={handleToggleVisibility}>close</span>
              <h2>{selectedMovie.title}</h2>
              <div className="movies-description-glavni">
                <img src={selectedMovie.image} alt={selectedMovie.title} />
                <p>{selectedMovie.year}</p>
                <p>{selectedMovie.genre}</p>
                <p>{selectedMovie.duration}</p>
                <div className="movies-description-p">
                  <p>{selectedMovie.description}</p>
                </div>
              </div>
            </>
          ) : (
            <p>No movie selected.</p>
          )}
        </div>
      </div>
      )
    </div>
  );
};

export default MoviesDescription;
