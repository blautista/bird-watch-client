import React from "react";
import {
  BirdDetailsHeader,
  BirdDetailsHeaderTitle,
} from "../components/BirdDetailsHeader/BirdDetailsHeader";
import { Bird } from "../types/Bird";

const BirdDetails: React.FC<Bird> = (props) => {
  return (
    <BirdDetailsHeader>
      <BirdDetailsHeaderTitle
        location={props.birdLocation}
        lat={props.lat}
        lng={props.lng}
      />
    </BirdDetailsHeader>
  );
};

export default BirdDetails;
