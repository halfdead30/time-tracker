import TrackerForm from "../components/TrackerForm/TrackerForm";
import TrackerList from "../components/TrackerList/TrackerList";

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
