import { BirdServerResponse } from "../../types/BirdServerResponse"

export const fetchBirds = async (coords: {lat: number, lng: number}) => {
  const url = `https://bird-watch-server.herokuapp.com/api/birds?lat=${coords.lat}&lng=${coords.lng}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    // const newStateArray = data.data.map((el) => ({
    //   ...el,
    //   audios: el.recordings?.map((rec) => new Audio(rec?.file)),
    // }));
    return data;
  } catch (error: any) {
    return null;
  }
};