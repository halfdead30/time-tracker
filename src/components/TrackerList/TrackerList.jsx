import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTimeTracker } from "../../store/trackersSlice";
import TrackerListItem from "../TrackerListItem/TrackerListItem";

const TrackerList = () => {
  const trackers = useSelector((state) => state.trackers);
  const dispatch = useDispatch();

  const deleteTimer = (id) => {
    dispatch(removeTimeTracker({ id }));
  };

  return (
    <ul className="timetracker-list">
      {trackers.map(({ id, startedAt, title }) => (
        <TrackerListItem
          key={id}
          id={id}
          title={title}
          time={startedAt}
          deleteTimer={deleteTimer}
        />
      ))}
    </ul>
  );
};

export default TrackerList;
