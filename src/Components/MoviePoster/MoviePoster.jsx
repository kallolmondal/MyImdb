import React from "react";
import "./MoviePoster.css";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";
import { BASE_URL } from "../../Utilities/Utilities";

function MoviePoster({ movieData }) {
  //console.log("movieData==>>>", movieData);
  return (
    <div className="moviePoster-container">
      <div className="moviePoster-img-progressbar-container">
        <img
          className="moviePoster"
          src={BASE_URL + movieData.poster_path}
          alt="movie-poster"
        />
        <CircularProgressBar ratings={movieData.vote_average} />
      </div>
      <div className="movieTitleText-container">
        <h3>{movieData.original_title}</h3>
      </div>
    </div>
  );
}

export default MoviePoster;
