import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzY2OGNhNGI4ZjMzYzZhNmEyM2M5NzI2ODk3YWU4MCIsIm5iZiI6MTcyMzAxNjA4MC4xODAzNCwic3ViIjoiNjY5ZmVhZjQxZGQwMTBiNTVkZGRhZDZjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.TFCJUEBkDUhqWESqVkJZra9EcnFg9uVCyhP9N8fxK44",
  },
};

export const fetchNowPlayingMovies = createAsyncThunk(
  "fetchNowPlayingMovies",
  async () => {
    try {
      const response = await axios.get(url, options);
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
);
const nowPlayingMoviesSlice = createSlice({
  name: "nowPlayingMoviesSlice",
  initialState: {
    nowPlayingMovies: [],
    npLoading: true,
    npError: false,
  },
  reducers: {
    setError: (state) => {
      state.npError = true;
      state.npLoading = false;
      state.nowPlayingMovies = [];
    },
    setLoading: (state) => {
      state.npLoading = true;
      state.npError = false;
      state.nowPlayingMovies = [];
    },
    setNowPlayingMovies: (state, action) => {
      state.npLoading = false;
      state.npError = false;
      state.nowPlayingMovies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNowPlayingMovies.pending, (state, action) => {
      state.nowPlayingMovies = [];
      state.npLoading = true;
      state.npError = false;
    });
    builder.addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
      state.nowPlayingMovies = action.payload;
      state.npLoading = false;
      state.npError = false;
    });
    builder.addCase(fetchNowPlayingMovies.rejected, (state, action) => {
      state.nowPlayingMovies = [];
      state.npLoading = true;
      state.npError = true;
    });
  },
});

export default nowPlayingMoviesSlice;
