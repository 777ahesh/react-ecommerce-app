import React from "react";
import "./conversion.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Log from "../images/message.png";

function Conversion2() {
  const percentage = 25.5;
  return (
    <div className="con-main1">
      <div className="con-left" style={{ width: 64, height: 64 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "27px",
            pathTransitionDuration: 0.5,
            pathColor: `#443c06`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "#00AB55",
          })}
        />
        ;
      </div>
      <div className="con-mid">
          <h3>38,566</h3><span className="paral">Conversion</span>
          
      </div>
      <div className="con-right">
          <img src={Log} alt="users" />
      </div>
    </div>
  );
}

export default Conversion2;
