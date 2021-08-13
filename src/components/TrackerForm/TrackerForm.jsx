import { nanoid } from "@reduxjs/toolkit";
import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as PlayCircle } from "../../assets/play_circle.svg";
import { addTimeTracker } from "../../store/trackersSlice";

const TrackerForm = () => {
  const [trackerTitle, setTrackerTitle] = useState("No name tracker:");
  const dispatch = useDispatch();

  // Handle input change and set state by e.target.value
  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setTrackerTitle("No name tracker:");
    } else {
      setTrackerTitle(e.target.value);
    }
  };

  // Dispatch action to reducer and add new time tracker
  const addTracker = (e) => {
    e.preventDefault();

    const startedAt = moment().startOf("day").format();

    dispatch(
      addTimeTracker({
        id: nanoid(),
        startedAt,
        time: "00:00:00",
        title: trackerTitle,
        isActive: false,
      })
    );
  };

  return (
    <form action="" className="timetracker-form" onSubmit={addTracker}>
      <input
        type="text"
        className="timetracker-form__input"
        placeholder="Enter tracker name"
        onChange={handleInputChange}
      />
      <PlayCircle onClick={addTracker} className="timetracker-form__btn" />
    </form>
  );
};

export default TrackerForm;
