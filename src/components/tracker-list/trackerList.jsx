import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTimeTracker,
  updateTimeTracker,
} from "../../store/trackersSlice";
import { ReactComponent as PlayCircle } from "../../assets/play_circle_outline.svg";
import { ReactComponent as PauseCircle } from "../../assets/pause_circle.svg";
import { ReactComponent as RemoveCircle } from "../../assets/remove_circle.svg";
import moment from "moment";

const TrackerList = () => {
  const trackers = useSelector((state) => state.trackers);
  const dispatch = useDispatch();
  const btnRef = useRef(null);

  const getAttributes = (e) => {
    const parent = e.target.closest(".timetracker-list__item");
    const id = parent.dataset.id;
    const isActive = parent.dataset.active;

    return {
      id,
      isActive,
    };
  };

  const toggleTimer = (e) => {
    const { id, isActive } = getAttributes(e);

    dispatch(
      updateTimeTracker({
        id,
        status: isActive,
      })
    );
  };

  const deleteTimer = (e) => {
    const { id } = getAttributes(e);

    dispatch(removeTimeTracker({ id }));
  };

  useEffect(() => {
    if (btnRef) {
      btnRef.current.addEventListener("click", (e) => {
        const { id, isActive } = getAttributes(e);

        const toggledTracker = trackers.find((tracker) => tracker.id === id);
        let interval;
        let currentTime;
        let res;

        if (toggledTracker.isActive !== isActive) {
          setInterval(() => {
            res = moment(toggledTracker.timestamp).add("1", "seconds");
            currentTime = res.format("HH:mm:ss");
            console.log(currentTime);
          }, 1000);
        }
      });
    }
  }, [btnRef]);

  return (
    <ul className="timetracker-list">
      {trackers.map((tracker) => (
        <li
          key={tracker.id}
          className="timetracker-list__item"
          data-id={tracker.id}
          data-active={tracker.isActive}
        >
          <span className="timetracker-list__name">{tracker.title}</span>
          <div className="timetracker-list-controls">
            <span className="timetracker-list-controls__time">
              {tracker.time}
            </span>
            <span className="timetracker-control">
              {tracker.isActive ? (
                <PauseCircle ref={btnRef} onClick={toggleTimer} />
              ) : (
                <PlayCircle ref={btnRef} onClick={toggleTimer} />
              )}
            </span>
            <span className="timetracker-control">
              <RemoveCircle onClick={deleteTimer} />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TrackerList;
