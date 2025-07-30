import { combineReducers } from "@reduxjs/toolkit";
import authenticationSlice from "./slices/authSlice";

// API reducer
import { authService } from "../api/services/authService";

const rootReducer = combineReducers({
  auth: authenticationSlice,
  [authService.reducerPath]: authService.reducer,
});

export default rootReducer;
