import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzY2OGNhNGI4ZjMzYzZhNmEyM2M5NzI2ODk3YWU4MCIsIm5iZiI6MTcyMzAxNjA4MC4xODAzNCwic3ViIjoiNjY5ZmVhZjQxZGQwMTBiNTVkZGRhZDZjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.TFCJUEBkDUhqWESqVkJZra9EcnFg9uVCyhP9N8fxK44",
  },
};
export const fetchTrendingMovies = createAsyncThunk(
  "fetchTrendingMovies",
  async () => {
    try {
      const response = await axios.get(url, options);
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
);
const trendingMovieSlice = createSlice({
  name: "topRatedMovieSlice",
  initialState: {
    trendingMovies: [],
    loading: true,
    error: false,
  },
  reducers: {
    setError: (state) => {
      state.error = true;
      state.loading = false;
      state.trendingMovies = [];
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = false;
      state.trendingMovies = [];
    },
    setTopRatedMovies: (state, action) => {
      state.loading = false;
      state.error = false;
      state.trendingMovies = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTrendingMovies.pending, (state, action) => {
      // Add user to the state array
      state.trendingMovies = [];
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchTrendingMovies.fulfilled, (state, action) => {
      // Add user to the state array
      state.trendingMovies = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchTrendingMovies.rejected, (state, action) => {
      // Add user to the state array
      state.trendingMovies = [];
      state.loading = true;
      state.error = true;
    });
  },
});

export default trendingMovieSlice;
