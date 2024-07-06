import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../actions/MoviesActions';
import MovieCard from './MovieCard';
import { Grid, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CategoryFilter from './CategoryFilter';
import MoviePagination from './MoviePagination';
import './MovieList.css'

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const [selectedCategories, setSelectedCategories] = useState([]); // Initialisation correcte
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredMovies = selectedCategories.length > 0 
    ? movies.filter(movie => selectedCategories.includes(movie.category))
    : movies;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <Container>
      <CategoryFilter selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
      <FormControl id="movie-per-page">
        <InputLabel>Movies Per Page</InputLabel>
        <Select
          value={moviesPerPage}
          onChange={(e) => setMoviesPerPage(e.target.value)}
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className='grid-container'>
        {currentMovies.map(movie => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      <MoviePagination
        totalMovies={filteredMovies.length}
        moviesPerPage={moviesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default MovieList;
