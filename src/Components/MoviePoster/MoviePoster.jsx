import React from "react";
import "./MoviePoster.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;
function MoviePoster() {
  return (
    <div className="moviePoster-container">
      <img
        className="moviePoster"
        src="https://image.tmdb.org/t/p/w500//wWba3TaojhK7NdycRhoQpsG0FaH.jpg"
        alt="movie-poster"
      />
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        className="circularProgressbar"
        styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
        
            // Text size
            textSize: '16px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
        
            // Can specify path transition in more detail, or remove it entirely
             pathTransition: 'none',
        
            // Colors
            pathColor: `rgba((27, 163, 156, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
      />
      <h3>The Shawshank Redemption</h3>
    </div>
  );
}

export default MoviePoster;
