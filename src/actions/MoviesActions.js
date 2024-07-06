import { movies$ } from '../movies';

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const TOGGLE_LIKE_DISLIKE = 'TOGGLE_LIKE_DISLIKE';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMovies = () => async (dispatch) => {
  try {
    const movies = await movies$;
    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: movies
    });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIES_FAILURE,
      payload: error
    });
  }
};

export const deleteMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    payload: id
  };
};

export const toggleLikeDislike = (id) => {
  return {
    type: TOGGLE_LIKE_DISLIKE,
    payload: id
  };
};
