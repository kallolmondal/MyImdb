import React from "react";
import "./moviePoster.css";
import CircularProgressBar from "../CircularProgressBar/circularProgressBar";
import { BASE_URL } from "../../Utilities/utilities";

function MoviePoster({ movieData }) {
  return (
    <div className="moviePoster-container">
      <div className="moviePoster-img-progressbar-container">
        <img
          className="moviePoster"
          src={BASE_URL + movieData.poster_path}
          alt="movie-poster"
        />
        <div>
          <CircularProgressBar ratings={movieData.vote_average} />
        </div>
      </div>
      <div className="movieTitleText-container">
        <h3>{movieData.original_title}</h3>
      </div>
    </div>
  );
}

export default MoviePoster;
