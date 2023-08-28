import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import deviceReducer from "./slices/DeviceSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    device: deviceReducer,
  },
});
