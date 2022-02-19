import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BirdCard from "./BirdCard";
import { Bird } from "../../types/Bird";

const dummyBirdData: Bird = {
  birdLocation: "Conakry - lambanyi plage",
  birdName: "Red-eyed Dove",
  birdSciName: "Streptopelia semitorquata",
  observedAt: "2022-02-10 07:30",
  lat: 9.6408873,
  lng: -13.6246058,
  wikiInfo: {
    title: "Red-eyed dove",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Red-eyed_dove_%28Streptopelia_semitorquata%29.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Red-eyed_dove_%28Streptopelia_semitorquata%29.jpg/133px-Red-eyed_dove_%28Streptopelia_semitorquata%29.jpg",
    summary:
      "The red-eyed dove (Streptopelia semitorquata) is a dove that is a widespread and common in Sub-Saharan Africa. It has been listed as Least Concern on the IUCN Red List since 2004.",
    pagelanguage: "en",
    url: "https://en.wikipedia.org/wiki/Red-eyed_dove",
  },
  recordings: [
    {
      location: "Atewa Forest",
      recordedBy: "Phil Gregory",
      url: "https://xeno-canto.org/640402/download",
      date: "2018-03-27",
    },
    {
      location: "Al Dair, Jazan",
      recordedBy: "Gregory Askew",
      url: "https://xeno-canto.org/640186/download",
      date: "2020-07-27",
    },
    {
      location: "Mandegee farm, oloitoktok",
      recordedBy: "isaac kilusu",
      url: "https://xeno-canto.org/615095/download",
      date: "2020-01-11",
    },
  ],
};

export default {
  title: "Example/BirdCard",
  component: BirdCard,
} as ComponentMeta<typeof BirdCard>;

const Template: ComponentStory<typeof BirdCard> = (args) => (
  <BirdCard {...args} />
);

export const RedEyedDove = Template.bind({});

RedEyedDove.args = {
  birdData: dummyBirdData,
};
