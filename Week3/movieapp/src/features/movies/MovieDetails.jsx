import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelected } from './moviesSlice';

const MovieDetails = () => {
  const movie = useSelector((state) => state.movies.selectedMovie);
  const dispatch = useDispatch();

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded max-w-md w-full relative">
        <button onClick={() => dispatch(clearSelected())} className="absolute top-2 right-2">❌</button>
        <h2 className="text-xl font-bold mb-2">{movie.Title} ({movie.Year})</h2>
        <img src={movie.Poster} alt={movie.Title} className="w-full mb-2" />
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieDetails;