import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { updateTimeTracker } from "../../store/trackersSlice";
import TrackerListName from "../TrackerListName/TrackerListName";
import TrackerTime from "../TrackerTime/TrackerTime";
import TrackerControl from "../TrackerControl/TrackerControl";
import DeleteBtn from "../DeleteBtn/DeleteBtn";

const TrackerListItem = ({ id, title, time, deleteTimer }) => {
  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(moment.duration());
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");
  const [formatedTime, setFormatedTime] = useState("00:00:00");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setCurrentTime(currentTime.add(1, "second"));

        setHours(Math.floor(currentTime.asHours()));
        setMinutes(Math.floor(currentTime.asMinutes()) - hours * 60);
        setSeconds(
          Math.floor(currentTime.asSeconds()) - hours * 60 * 60 - minutes * 60
        );

        setFormatedTime(
          `${hours > 9 ? hours : "0" + hours}:${
            minutes > 9 ? minutes : "0" + minutes
          }:${seconds > 9 ? seconds : "0" + seconds}`
        );
        dispatch(updateTimeTracker({ id, formatedTime }));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    id,
    currentTime,
    formatedTime,
    hours,
    minutes,
    seconds,
    dispatch,
    isActive,
  ]);

  const toggleTimer = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <li className={`timetracker-list__item ${isActive ? "active" : ""}`}>
      <TrackerListName title={title} />
      <div className="timetracker-list-controls">
        <TrackerTime formatedTime={formatedTime} />
        <TrackerControl isActive={isActive} toggleTimer={toggleTimer} />
        <DeleteBtn id={id} deleteTimer={deleteTimer} />
      </div>
    </li>
  );
};

export default TrackerListItem;
