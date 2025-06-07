import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieDetails, toggleFavorite } from './moviesSlice';

const MoviesList = () => {
  const { list, loading, error, favorites } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {list.map((movie) => (
        <div
          key={movie.imdbID}
          className="border p-2 rounded hover:shadow cursor-pointer relative"
          onClick={() => dispatch(fetchMovieDetails(movie.imdbID))}
        >
          <img src={movie.Poster} alt={movie.Title} className="w-full h-48 object-cover mb-2" />
          <h3 className="font-semibold text-sm">{movie.Title}</h3>
          <p className="text-xs">{movie.Year}</p>
          <button
            onClick={(e) => { e.stopPropagation(); dispatch(toggleFavorite(movie.imdbID)); }}
            className="absolute top-2 right-2 text-red-500"
          >
            {favorites.includes(movie.imdbID) ? '★' : '☆'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;