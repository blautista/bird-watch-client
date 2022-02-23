import { Bird } from "./Bird";
import { UserLocation } from "./UserLocation";

export interface BirdServerResponse {
  data: Bird[];
  userLocation: UserLocation;
}