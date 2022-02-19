import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BirdCardList from "./BirdCardList";
import dummyData from "./dummyData.json";

export default {
  title: "BirdCardList",
  component: BirdCardList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BirdCardList>;

const Template: ComponentStory<typeof BirdCardList> = (args) => (
  <BirdCardList {...args} />
);

export const GuineaBirdsList = Template.bind({});
GuineaBirdsList.args = {
  birdsArray: dummyData.data,
};
