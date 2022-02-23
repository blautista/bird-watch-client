import { Grid, Button } from "@mui/material";
import React from "react";
import dummyData from "../components/BirdCardList/dummyData.json";
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
} from "../features/birds/birdSlice";

type Props = {};

const MainPage = (props: Props) => {
  const handleButtonClick = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch(fetchBirdsAsync({ lat: latitude, lng: longitude }));
      }
    );
  };

  const birdsArray = useAppSelector(selectBirdsArray);
  const userLocation = useAppSelector(selectUserLocation);
  console.log("i fetched deta");
  const dispatch = useAppDispatch();

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
        {birdsArray && birdsArray.length > 0 && (
          <BirdCardList birdsArray={birdsArray} />
        )}
        {!birdsArray ||
          (birdsArray.length === 0 && <p>click the button bro</p>)}
      </Grid>
      <Button onClick={handleButtonClick}>gimme birds</Button>
    </Grid>
  );
};

export default MainPage;
