import React from "react";
import { Grid } from "@mui/material";
import { Bird } from "../../types/Bird";
import BirdCard from "../BirdCard/BirdCard";

type Props = {
  birdsArray: Bird[];
};

const BirdCardList = ({ birdsArray }: Props) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {birdsArray.map((bird) => (
        <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
          <BirdCard birdData={bird} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BirdCardList;
