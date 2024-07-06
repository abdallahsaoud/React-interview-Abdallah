import { FETCH_MOVIES_SUCCESS, DELETE_MOVIE, TOGGLE_LIKE_DISLIKE } from '../actions/MoviesActions';

const initialState = {
  movies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };
      case TOGGLE_LIKE_DISLIKE:
        return {
          ...state,
          movies: state.movies.map(movie => 
            movie.id === action.payload 
              ? { 
                  ...movie, 
                  likes: movie.liked ? movie.likes - 1 : movie.likes + 1,
                  dislikes: movie.liked ? movie.dislikes + 1 : movie.dislikes - 1,
                  liked: !movie.liked 
                } 
              : movie
          )
        };
      
    default:
      return state;
  }
};

export default moviesReducer;
