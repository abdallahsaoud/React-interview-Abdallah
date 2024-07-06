import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleLikeDislike } from '../actions/MoviesActions';
import { Card, CardContent, CardActions, Button, Typography, LinearProgress } from '@mui/material';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  if (!movie) {
    return null; // Ne pas rendre le composant si le film est indéfini
  }

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
  };

  const handleToggleLikeDislike = () => {
    dispatch(toggleLikeDislike(movie.id));
  };

  const totalVotes = (movie.likes || 0) + (movie.dislikes || 0);
  const likeRatio = totalVotes > 0 ? (movie.likes / totalVotes) * 100 : 0;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">{movie.title}</Typography>
        <Typography color="textSecondary">{movie.category}</Typography>
        <LinearProgress variant="determinate" value={likeRatio} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleToggleLikeDislike}>Toggle Like/Dislike</Button>
        <Button size="small" id='delete-button' onClick={handleDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
