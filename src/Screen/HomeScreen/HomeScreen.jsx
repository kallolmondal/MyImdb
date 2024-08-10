import React, { useEffect } from "react";
import MovieBanner from "../../Components/MovieBanner/movieBanner";
import "./homeScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "../../Redux/TrendingMovies/trendingMovieSlice";
import { fetchNowPlayingMovies } from "../../Redux/NowPlayingMovies/nowPlayingMoviesSlice";
import ShimmerBanner from "../../Components/ShimmerBanner/shimmerBanner";
import bannerMiddleware from "../../Redux/Banner/bannerMiddleware";
import HorizontalList from "../../Components/HorizontalList/horizontalList";
import { fetchUpcomingMovies } from "../../Redux/UpcomingMovies/upcomingMovieSlice";

function HomeScreen() {
  const dispatch = useDispatch();
  const { trendingMovies, loading, error } = useSelector(
    (store) => store.trendingMovieState
  );
  const { nowPlayingMovies, npLoading, npError } = useSelector(
    (store) => store.nowPlayingMovieState
  );
  const { upcomingMovies, upcomingMovieLoading, upcomingMovieError } =
    useSelector((store) => store.upcomingMoviesState);
  const { banner, bannerLoading } = useSelector((state) => state.bannerState);
  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(bannerMiddleware());
  }, [dispatch]);
  return (
    <div>
      {bannerLoading ? <ShimmerBanner /> : <MovieBanner banner={banner} />}

      <div className="top-rated-movie-container">
        <h1>Top Rated Movies</h1>
        {loading ? (
          <ShimmerBanner width={150} height={225} />
        ) : (
          <HorizontalList trendingMovies={trendingMovies} />
        )}
      </div>

      <div className="top-rated-movie-container">
        <h1>Now Payling</h1>
        {loading ? (
          <ShimmerBanner width={150} height={225} />
        ) : (
          <HorizontalList trendingMovies={nowPlayingMovies} />
        )}
      </div>

      <div className="top-rated-movie-container">
        <h1>Upcoming Movies</h1>
        {upcomingMovieLoading ? (
          <ShimmerBanner width={150} height={225} />
        ) : (
          <HorizontalList trendingMovies={upcomingMovies} />
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
