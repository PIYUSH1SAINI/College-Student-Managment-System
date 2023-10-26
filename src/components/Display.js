import "./stylePrince.css";
import React, { useState, useEffect } from "react";

function Display(props) {
  const [number, setter] = useState(65);
  var t = props.percentage / 100;
  // let styl={
  //     stroke: "red",
  //     animation: 100

  // }
  var temp = 472 - 472 * t;
  return (
    <div className="App">
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div className="number">
              <h3>{props.name}</h3>
              <span className="percentage"> {props.percentage} %</span>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient className="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke-linecap="round"
            className={props.class}
          />
        </svg>
      </div>
    </div>
  );
}

export default Display;
