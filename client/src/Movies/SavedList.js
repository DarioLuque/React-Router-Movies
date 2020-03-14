import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import MovieList from './MovieList';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to={`/movies/${movie.id}`} className="saved-movie">{movie.title}

      </Link>
    ))}

    <NavLink to="/" className="home-button">Home</NavLink>

  </div>
);

export default SavedList;
