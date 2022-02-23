import {
  Action,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { fetchBirds } from "./fetchBirds";
import { UserLocation } from "../../types/UserLocation";
import { Bird } from "../../types/Bird";
import { BirdServerResponse } from "../../types/BirdServerResponse";
import { RootState, AppThunk } from "../../store";

export interface State {
  userLocation: UserLocation | null;
  birdsArray: Bird[] | null;
  status: "idle" | "loading" | "fail" | "success";
}

const initialState: State = {
  birdsArray: null,
  userLocation: null,
  status: "idle",
};

export const fetchBirdsAsync = createAsyncThunk("birds/fetchBirds", fetchBirds);

export const birdSlice = createSlice({
  name: "birds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBirdsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBirdsAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "success";
          state.birdsArray = action.payload.data;
          state.userLocation = action.payload.userLocation;
        } else {
          state.status = "fail";
        }
      });
  },
});

export const selectBirdsArray = (state: RootState) => state.birds.birdsArray;
export const selectFetchStatus = (state: RootState) => state.birds.status;
export const selectUserLocation = (state: RootState) =>
  state.birds.userLocation;
export default birdSlice.reducer;
