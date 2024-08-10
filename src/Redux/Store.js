import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./Banner/bannerSlice";
import trendingMovieSlice from "./TrendingMovies/trendingMovieSlice";
import nowPlayingMoviesSlice from "./NowPlayingMovies/nowPlayingMoviesSlice";
import upcomingMoviesSlice from "./UpcomingMovies/upcomingMovieSlice";



const store = configureStore({
    reducer:{
        bannerState: bannerSlice.reducer,
        trendingMovieState: trendingMovieSlice.reducer, 
        nowPlayingMovieState: nowPlayingMoviesSlice.reducer,
        upcomingMoviesState: upcomingMoviesSlice.reducer,
    }
})

export default store;