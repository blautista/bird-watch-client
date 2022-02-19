import React from "react";
import { Bird } from "../../types/Bird";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";
type Props = {
  birdData: Bird;
};

const BirdCard = ({ birdData }: Props) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          image={birdData.wikiInfo.image}
          alt={birdData.birdSciName}
        ></CardMedia>
        <CardContent>
          <Typography variant="h3">{birdData.birdName}</Typography>
          <Typography variant="h6">{birdData.birdSciName}</Typography>
          <Typography variant="body2">{birdData.wikiInfo.summary}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BirdCard;
