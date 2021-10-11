import React from "react";
import "./loadingstyle.css";
import { useProgress } from "@react-three/drei";

const Loading = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <div className="loading">
      <svg viewBox="0 0 1350 600">
        <symbol id="text">
          <text x="50%" y="50%" fill="transparent" textAnchor="middle">
            racefi
          </text>
          <text
            className="border"
            x="50%"
            y="50%"
            fill="transparent"
            textAnchor="middle"
          >
            racefi
          </text>
        </symbol>
        <use xlinkHref="#text"></use>
      </svg>
      <div className="progress">
        <div className="progressLoading">
          <div className="progress-value"></div>
        </div>
        <p>{progress.toFixed(0)} %</p>
      </div>
    </div>
  );
};

export default Loading;
