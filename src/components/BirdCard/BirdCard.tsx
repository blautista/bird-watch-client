import React from "react";
import { useNavigate } from "react-router-dom";
import { Bird } from "../../types/Bird";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  ImageListItem,
} from "@mui/material";
type Props = {
  birdData: Bird;
  onClick: Function;
};

const BirdCard = ({ birdData }: Props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/birds/${birdData.birdSciName}`);
  };

  return (
    <ImageListItem key={birdData.birdSciName}>
      <Card>
        <CardActionArea onClick={handleCardClick}>
          {birdData.wikiInfo && (
            <CardMedia
              component="img"
              width="100%"
              image={birdData.wikiInfo.image}
              alt={birdData.birdSciName}
            ></CardMedia>
          )}
          <CardContent>
            <Typography variant="h3">{birdData.birdName}</Typography>
            <Typography variant="subtitle2">{birdData.birdSciName}</Typography>
            {/* <Typography variant="body1">{birdData.wikiInfo.summary}</Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </ImageListItem>
  );
};

export default BirdCard;
