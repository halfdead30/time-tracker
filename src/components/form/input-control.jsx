import { nanoid } from "@reduxjs/toolkit";
import moment from "moment";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as PlayCircle } from "../../assets/play_circle.svg";
import { addTimeTracker } from "../../store/trackersSlice";

const InputControl = () => {
  const [trackerTitle, setTrackerTitle] = useState("No name tracker:");
  const dispatch = useDispatch();
  const inputBtn = useRef();

  // Handle input change and set state by e.target.value
  const handleInputChange = (e) => {
    const target = e.target.value;

    if (target === "") {
      setTrackerTitle("No name tracker:");
    } else {
      setTrackerTitle(target);
    }
  };

  // Dispatch action to reducer
  const addTracker = (e) => {
    e.preventDefault();

    const momentObj = moment().startOf("day").format();

    dispatch(
      addTimeTracker({
        id: nanoid(),
        timestamp: momentObj,
        title: trackerTitle,
        isActive: false,
      })
    );
  };

  useEffect(() => {
    const inputBtnRef = inputBtn;

    inputBtn.current.addEventListener("click", addTracker);
    return () => inputBtnRef.current.removeEventListener("click", addTracker);
  }, [trackerTitle]);

  return (
    <form action="" className="timetracker-form" onSubmit={addTracker}>
      <input
        type="text"
        className="timetracker-form__input"
        placeholder="Enter tracker name"
        onChange={handleInputChange}
      />
      <PlayCircle ref={inputBtn} className="timetracker-form__btn" />
    </form>
  );
};

export default InputControl;
