import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, Button, Link } from "@mui/material";

type Props = {};

const WelcomeScreen: React.FC = () => {
  return (
    <Grid container>
      <RouterLink to="birds"></RouterLink>
    </Grid>
  );
};

export default WelcomeScreen;
