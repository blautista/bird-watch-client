/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Grid, Typography, Button, Link, TextField } from "@mui/material";
import { css } from "@emotion/react";

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleWelcomeScreenClick = () => {
    navigate(`/birds`);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      height="100vh"
    >
      <Grid item spacing={2}>
        <Typography variant="h1">Bird Watch App</Typography>
        <Typography variant="h5">
          I will give you the latest notable bird sightings near your area.
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Grid item>
          <Button
            onClick={handleWelcomeScreenClick}
            size="large"
            variant="contained"
          >
            Use my current location
          </Button>
        </Grid>
        {/* <Grid item container direction="column" spacing={3}>
          <Grid item>
            <Typography variant="h6">
              Or, alternatively, input the coordinates below:
            </Typography>
            <TextField variant="filled" label="Latitude"></TextField>
            <TextField variant="filled" label="Longitude"></TextField>
          </Grid>
          <Grid item>
            <Button onClick={handleWelcomeScreenClick} variant="contained">
              Give me birds!
            </Button>
          </Grid>
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default WelcomeScreen;
