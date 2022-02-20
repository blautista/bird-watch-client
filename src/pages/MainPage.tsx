import { Grid } from "@mui/material";
import React from "react";
import dummyData from "../components/BirdCardList/dummyData.json";
import {
  BirdDetailsHeader,
  BirdDetailsHeaderTitle,
} from "../components/BirdDetailsHeader/BirdDetailsHeader";
import BirdCardList from "../components/BirdCardList/BirdCardList";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <Grid container>
      <BirdDetailsHeader>
        <BirdDetailsHeaderTitle
          location={dummyData.userLocation.name}
          lat={dummyData.userLocation.lat}
          lng={dummyData.userLocation.lon}
        />
      </BirdDetailsHeader>
      <Grid item>
        <BirdCardList birdsArray={dummyData.data} />
      </Grid>
    </Grid>
  );
};

export default MainPage;
