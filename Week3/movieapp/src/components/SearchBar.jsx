import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../features/movies/moviesSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) dispatch(fetchMovies(query));
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="border p-2 rounded w-full"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;