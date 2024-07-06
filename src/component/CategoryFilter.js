import React from 'react';
import { useSelector } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText } from '@mui/material';
import './CategoryFilter.css'

const CategoryFilter = ({ selectedCategories, setSelectedCategories }) => {
  const movies = useSelector(state => state.movies.movies);
  const categories = [...new Set(movies.map(movie => movie.category))];

  const handleChange = (event) => {
    setSelectedCategories(event.target.value);
  };

  // Assurez-vous que selectedCategories est défini et est un tableau
  const selectedCats = Array.isArray(selectedCategories) ? selectedCategories : [];

  return (
    <FormControl id='category-filter'>
      <InputLabel>Category</InputLabel>
      <Select
        multiple
        value={selectedCats}
        onChange={handleChange}
        renderValue={(selected) => selected.join(', ')}
        id='category-select'
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            <Checkbox checked={selectedCats.indexOf(category) > -1} />
            <ListItemText primary={category} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
