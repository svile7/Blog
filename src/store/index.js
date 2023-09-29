import {combineReducers, createStore} from "redux";
import newsReducer from "./newsReducer";
import movieReducer from "./movieReducer";
import visibilityReducer from "./visibilityReducer";
const rootReducer = combineReducers({
  news: newsReducer,
  movie: movieReducer,
  movieVisibility: visibilityReducer,
});

const store = createStore(rootReducer);

export default store;
