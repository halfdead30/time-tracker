import TrackerForm from "../components/form/form";
import TrackerList from "../components/tracker-list/trackerList";

const TimeTracker = () => {
  return (
    <div className="timetracker">
      <div className="container">
        <h1 className="timetracker__title">tracker</h1>
        <TrackerForm />
        <TrackerList />
      </div>
    </div>
  );
};

export default TimeTracker;
