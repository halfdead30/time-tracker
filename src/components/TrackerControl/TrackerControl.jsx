import React from "react";
import { ReactComponent as PlayCircle } from "../../assets/play_circle_outline.svg";
import { ReactComponent as PauseCircle } from "../../assets/pause_circle.svg";

const TrackerControl = ({ isActive, toggleTimer }) => (
  <span className="timetracker-control">
    {isActive ? (
      <PauseCircle onClick={toggleTimer} />
    ) : (
      <PlayCircle onClick={toggleTimer} />
    )}
  </span>
);

export default TrackerControl;
