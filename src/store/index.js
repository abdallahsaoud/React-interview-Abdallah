import { configureStore, combineReducers, } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import moviesReducer from '../reducers/moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;