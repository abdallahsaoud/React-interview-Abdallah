import React from 'react';
import Pagination from '@mui/material/Pagination';
import './MoviePagination.css'

const MoviePagination = ({ totalMovies, moviesPerPage, currentPage, setCurrentPage }) => {
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const pageCount = Math.ceil(totalMovies / moviesPerPage) || 1; // Assurez-vous que pageCount est toujours au moins 1

  return (
    <Pagination count={pageCount} page={currentPage} onChange={handlePageChange} id='pagination'/>
  );
};

export default MoviePagination;
