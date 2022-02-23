/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Grid, Typography, Button, Link } from "@mui/material";
import { css, jsx } from "@emotion/react";

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
      css={css`
        background-image: url("bg.jpg");
      `}
    >
      <Grid item>
        <Typography variant="h1">Bird Watch App</Typography>
      </Grid>
      <Grid item>
        <Button
          onClick={handleWelcomeScreenClick}
          variant="contained"
          css={css`
            width: 300px;
            height: 150px;
            font-size: 2rem;
          `}
        >
          See birds near me
        </Button>
      </Grid>
    </Grid>
  );
};

export default WelcomeScreen;
