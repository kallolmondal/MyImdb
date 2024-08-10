import React from "react";
import './CircularProgressBar.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Colors } from "../../Utilities/Colors";

const percentage = 66;
function CircularProgressBar({ratings}) {
  const ratingsPercentage = Math.floor((ratings/10)*100);
  return (
    <div className="progressbar-div">
      <CircularProgressbar
        value={ratingsPercentage}
        text={`${ratingsPercentage}%`}
        className="circularProgressbar"
        styles={buildStyles({
          strokeLinecap: "round",
          textSize: "1.2rem",
          pathTransitionDuration: 0.5,
          pathColor: `rgb(33, 216, 17, ${percentage / 100})`,
          textColor: Colors.white,
          trailColor: Colors.gray,
        })}
      />
    </div>
  );
}

export default CircularProgressBar;
