import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const TrackersSlice = createSlice({
  name: "trackers",
  initialState,
  reducers: {
    addTimeTracker: (state, action) => {
      return [action.payload, ...state];
    },
    removeTimeTracker(state, action) {
      return state.filter((tracker) => tracker.id !== action.payload.id);
    },
    updateTimeTracker(state, action) {
      const { id, formatedTime } = action.payload;

      return state.map((el) =>
        el.id === id ? { ...el, time: formatedTime } : el
      );
    },
  },
});

export const { addTimeTracker, removeTimeTracker, updateTimeTracker } =
  TrackersSlice.actions;
export default TrackersSlice.reducer;
