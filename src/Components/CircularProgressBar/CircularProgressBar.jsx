import React from "react";
import "./circularProgressBar.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Colors } from "../../Utilities/colors";

const percentage = 66;
function CircularProgressBar({ ratings }) {
  const ratingsPercentage = Math.floor((ratings / 10) * 100);
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
          pathColor:
            ratingsPercentage > 0 && ratingsPercentage < 50
              ? `rgb(255, 0, 40, ${percentage / 100})`
              : ratingsPercentage > 50 && ratingsPercentage < 70
              ? `rgb(247, 255, 0, ${percentage / 100})`
              : `rgb(33, 216, 17, ${percentage / 100})`,
          textColor: Colors.white,
          trailColor: Colors.gray,
        })}
      />
    </div>
  );
}

export default CircularProgressBar;
