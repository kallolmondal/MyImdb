import React from "react";
import MoviePoster from "../MoviePoster/moviePoster";

function HorizontalList({trendingMovies}) {
  const renderTrendingMovie = (movieData, index) => {
    return (
      <MoviePoster key={movieData.id} movieData={movieData} fitOnFrame />
    )
  };
  return (
    <div
      style={{
        gap: "10px",
        overflowX: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height:'45vh'
      }}
    >
      {trendingMovies.map((movieData, index) => {
        return renderTrendingMovie(movieData, index);
      })}
    </div>
  );
}

export default HorizontalList;
