import React from 'react';
import SearchBar from './components/SearchBar';
import MoviesList from './features/movies/MoviesList';
import MovieDetails from './features/movies/MovieDetails';

const App = () => {
  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">Movie Search App</h1>
      <SearchBar />
      <MoviesList />
      <MovieDetails />
    </div>
  );
};

export default App;