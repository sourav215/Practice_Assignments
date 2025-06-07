import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'your_api_key_here';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (query, thunkAPI) => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    if (res.data.Response === 'False') {
      return thunkAPI.rejectWithValue(res.data.Error);
    }
    return res.data.Search;
  }
);

export const fetchMovieDetails = createAsyncThunk(
  'movies/fetchMovieDetails',
  async (id, thunkAPI) => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    return res.data;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    loading: false,
    error: null,
    selectedMovie: null,
    favorites: [],
  },
  reducers: {
    clearSelected: (state) => { state.selectedMovie = null },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(f => f !== id);
      } else {
        state.favorites.push(id);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.selectedMovie = action.payload;
      });
  }
});

export const { clearSelected, toggleFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;