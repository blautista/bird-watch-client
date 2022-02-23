import React from "react";
import { ImageList } from "@mui/material";
import { Bird } from "../../types/Bird";
import BirdCard from "../BirdCard/BirdCard";
import { getImageListColumnsByViewportWidth } from "../../utils";

type Props = {
  birdsArray: Bird[];
};

const BirdCardList = ({ birdsArray }: Props) => {
  const imageListCols = getImageListColumnsByViewportWidth();
  const handleBirdClick = () => {};

  return (
    <ImageList variant="masonry" cols={imageListCols} gap={4}>
      {birdsArray.map((bird) => (
        <BirdCard birdData={bird} onClick={handleBirdClick} />
      ))}
    </ImageList>
  );
};

export default BirdCardList;
