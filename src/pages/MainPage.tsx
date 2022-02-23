import React, { useEffect, useState } from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import {
  BirdDetailsHeader,
  BirdDetailsHeaderTitle,
} from "../components/BirdDetailsHeader/BirdDetailsHeader";
import BirdCardList from "../components/BirdCardList/BirdCardList";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  selectBirdsArray,
  fetchBirdsAsync,
  selectUserLocation,
  selectFetchStatus,
} from "../features/birds/birdSlice";

type Props = {};

const MainPage = (props: Props) => {
  const birdsArray = useAppSelector(selectBirdsArray);
  const isLoading = useAppSelector(selectFetchStatus);
  const userLocation = useAppSelector(selectUserLocation);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!birdsArray) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          dispatch(fetchBirdsAsync({ lat: latitude, lng: longitude }));
        },
        () => {
          setError("The app needs location permissions to fetch birds");
        }
      );
    }
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      <BirdDetailsHeader>
        {userLocation && (
          <BirdDetailsHeaderTitle
            location={userLocation.name}
            lat={userLocation.lat}
            lng={userLocation.lon}
          />
        )}
      </BirdDetailsHeader>
      <Grid item maxWidth={1200} m={1}>
        {birdsArray ? (
          <BirdCardList birdsArray={birdsArray} />
        ) : isLoading === "loading" ? (
          <>
            <CircularProgress />
            <Typography variant="h5">Fetching birds near you...</Typography>
          </>
        ) : (
          <Typography variant="h5">
            There was a problem fetching the birds. Please refresh the page and
            try again.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default MainPage;
