import { WikiInfo } from "./WikiInfo";
import { Recording } from "./Recording";

export interface Bird {
  birdName: string;
  birdSciName: string;
  birdLocation: string;
  observedAt: string;
  lat: number;
  lng: number;
  wikiInfo: WikiInfo;
  recordings: Recording[];
}