import React from "react";
import MovieBanner from "../../Components/MovieBanner/MovieBanner";
import MoviePoster from "../../Components/MoviePoster/MoviePoster";

function HomeScreen() {
  return (
    <div>
      <div>
        <MovieBanner />
      </div>

      <div className="top-rated-container">
        <h2>Top Rated Movies</h2>
        <div>
          <MoviePoster/>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
