import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzY2OGNhNGI4ZjMzYzZhNmEyM2M5NzI2ODk3YWU4MCIsIm5iZiI6MTcyMzAxNjA4MC4xODAzNCwic3ViIjoiNjY5ZmVhZjQxZGQwMTBiNTVkZGRhZDZjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.TFCJUEBkDUhqWESqVkJZra9EcnFg9uVCyhP9N8fxK44",
  },
};

export const fetchUpcomingMovies = createAsyncThunk(
  "fetchUpcomingMovies",
  async () => {
    try {
      const response = await axios.get(url, options);
      return response.data.results;
    } catch (error) {
      throw error;
    }
  }
);
const upcomingMoviesSlice = createSlice({
  name: "upcomingMovies",
  initialState: {
    upcomingMovies: [],
    upcomingMovieLoading: true,
    upcomingMovieError: false,
  },
  reducers: {
    setUpcomingMovies: (state, action) => {
      state.upcomingMovieLoading = true;
      state.upcomingMovieError = false;
      state.upcomingMovies = action.payload;
    },
    setUpcomingMovieLoading: (state) => {
      state.upcomingMovieLoading = true;
      state.upcomingMovieError = false;
      state.upcomingMovies = [];
    },
    setUpcomingMovieError: (state) => {
      state.upcomingMovieLoading = false;
      state.upcomingMovieError = true;
      state.upcomingMovies = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUpcomingMovies.pending, (state) => {
      state.upcomingMovies = [];
      state.upcomingMovieLoading = true;
      state.upcomingMovieError = false;
    });
    builder.addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
      state.upcomingMovies = action.payload;
      state.upcomingMovieLoading = false;
      state.upcomingMovieError = false;
    });
    builder.addCase(fetchUpcomingMovies.rejected, (state, action) => {
      state.upcomingMovies = [];
      state.upcomingMovieLoading = true;
      state.upcomingMovieError = true;
    });
  }
});

export default upcomingMoviesSlice;
