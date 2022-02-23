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

interface State {
  userLocation: UserLocation | {};
  birdsArray: Bird[] | [];
  status: "idle" | "loading";
}

const initialState: State = {
  birdsArray: [],
  userLocation: {},
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
        state.status = "idle";
        state.birdsArray = action.payload.data;
        state.userLocation = action.payload.userLocation;
      });
  },
});

export const selectBirdsArray = (state: State) => state.birdsArray;
export const selectUserLocation = (state: State) => state.userLocation;
