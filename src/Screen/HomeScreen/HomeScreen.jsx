import React, { useEffect } from "react";
import MovieBanner from "../../Components/MovieBanner/MovieBanner";
import MoviePoster from "../../Components/MoviePoster/MoviePoster";
import "./HomeScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "../../Redux/TrendingMovies/trendingMovieSlice";
import { fetchNowPlayingMovies } from "../../Redux/NowPlayingMovies/nowPlayingMoviesSlice";
import ShimmerBanner from "../../Components/ShimmerBanner/shimmerBanner";
import bannerMiddleware from "../../Redux/Banner/bannerMiddleware";

function HomeScreen() {
  const dispatch = useDispatch();
  const { trendingMovies, loading, error } = useSelector(
    (store) => store.trendingMovieState
  );
  const { nowPlayingMovies, npLoading, npError } = useSelector(
    (store) => store.nowPlayingMovieState
  );
  const { banner, bannerLoading } = useSelector((state) => state.bannerState);
  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchNowPlayingMovies());
    dispatch(bannerMiddleware());
  }, [dispatch]);

  const renderTrendingMovie = (movieData, index) => {
    return loading ? (
      <ShimmerBanner width={150} height={225} />
    ) : (
      <MoviePoster key={movieData.id} movieData={movieData} fitOnFrame />
    );
  };
  const renderNowPlayingMovie = (movieData, index) => {
    return npLoading ? (
      <ShimmerBanner width={150} height={225} />
    ) : (
      <MoviePoster key={movieData.id} movieData={movieData} />
    );
  };
  return (
    <div>
      <div>
        {bannerLoading ? <ShimmerBanner /> : <MovieBanner banner={banner} />}
      </div>

      <div className="top-rated-movie-container">
        <h1>Top Rated Movies</h1>
        <div
          style={{
            gap: "10px",
            overflowX: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {trendingMovies.map((movieData, index) => {
            return renderTrendingMovie(movieData, index);
          })}
        </div>
      </div>

      <div className="top-rated-movie-container">
        <h1>Now Payling</h1>
        <div
          style={{
            gap: "10px",
            overflowX: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {nowPlayingMovies.map((movieData, index) => {
            return renderNowPlayingMovie(movieData, index);
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
