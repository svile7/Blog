import {SET_SELECTED_MOVIE} from "../store/movieAction";

const initialState = {
  selectedMovie: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
