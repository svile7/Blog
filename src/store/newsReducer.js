const initialState = {
  selectedNews: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_NEWS":
      return {
        ...state,
        selectedNews: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
