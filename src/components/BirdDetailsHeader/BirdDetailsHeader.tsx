import React from "react";
import { Typography, Grid, AppBar, Toolbar } from "@mui/material";
import { css } from "@emotion/react";

type HeaderProps = {};
type TitleProps = { location: string; lat: number; lng: number };

export const BirdDetailsHeaderTitle: React.FC<TitleProps> = ({
  location,
  lat,
  lng,
}) => {
  return (
    <Grid item>
      <Typography variant="h2">Birds near {location}</Typography>
      <Typography variant="body2">
        ({lat},{lng}).
      </Typography>
    </Grid>
  );
};

export const BirdDetailsHeader: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Grid m={6} container justifyContent="center" alignItems="center">
      {children}
    </Grid>
  );
};
