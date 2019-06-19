const GET_MOVIES = "GET_MOVIES";

export const getMoviesAction = () => ({
  type: GET_MOVIES
});

export async function getMovies() {
  return dispatch => {
    dispatch(getMoviesAction());
    fetch("http://react-cdp-api.herokuapp.com/movies").then(res => res.json());
  };
}

const INITIAL_STATE = {
  movies: []
};

export const getMoviesReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        state: moviesList
      };
    default:
      return state;
  }
};
