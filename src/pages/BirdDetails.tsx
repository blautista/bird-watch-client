/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Grid, Typography } from "@mui/material";
import React from "react";
import BirdCardList from "../components/BirdCardList/BirdCardList";
import dummyData from "../components/BirdCardList/dummyData.json";
import { Bird } from "../types/Bird";
import { css } from "@emotion/react";
const BirdDetails: React.FC = (props) => {
  const data = dummyData.data[1];
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      height="100vh"
    >
      <Grid
        container
        item
        lg={6}
        xl={6}
        md={6}
        direction="column"
        alignItems="flex-end"
        spacing={4}
        justifyContent="flex-start"
        p={6}
        m={0}
      >
        <Typography variant="subtitle2">{data.birdSciName}</Typography>
        <Typography variant="h2">{data.birdName}</Typography>
        <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
          Seen near {data.birdLocation}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          {data.wikiInfo.summary}
        </Typography>
        <Grid item></Grid>
      </Grid>
      <Grid item lg={6} xl={6} md={6}>
        <img
          src={data.wikiInfo.image}
          alt={data.birdSciName}
          css={css`
            width: 100%;
          `}
        ></img>
      </Grid>
    </Grid>
  );
};

export default BirdDetails;
