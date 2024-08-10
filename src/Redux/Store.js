import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./Banner/bannerSlice";
import trendingMovieSlice from "./TrendingMovies/trendingMovieSlice";
import nowPlayingMoviesSlice from "./NowPlayingMovies/nowPlayingMoviesSlice";


const store = configureStore({
    reducer:{
        bannerState: bannerSlice.reducer,
        trendingMovieState: trendingMovieSlice.reducer, 
        nowPlayingMovieState: nowPlayingMoviesSlice.reducer,
    }
})

export default store;