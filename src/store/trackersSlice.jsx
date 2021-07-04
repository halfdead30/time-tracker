import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const TrackersSlice = createSlice({
  name: "trackers",
  initialState,
  reducers: {
    addTimeTracker: (state, action) => {
      state.unshift(action.payload);
    },
    removeTimeTracker: (state, action) => {
      return state.filter((tracker) => tracker.id !== action.payload.id);
    },
    updateTimeTracker: (state, action) => {
      const { id } = action.payload;

      return state.map((tracker) => {
        if (id !== tracker.id) return tracker;

        return {
          ...tracker,
          isActive: !tracker.isActive,
        };
      });
    },
  },
});

export const { addTimeTracker, removeTimeTracker, updateTimeTracker } =
  TrackersSlice.actions;
export default TrackersSlice.reducer;
