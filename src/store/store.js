import { configureStore } from "@reduxjs/toolkit";

import trackersReducer from "./trackersSlice";

const store = configureStore({
  reducer: {
    trackers: trackersReducer,
  },
});

export default store;
