import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BirdDetailsHeader, BirdDetailsHeaderTitle } from "./BirdDetailsHeader";

export default {
  title: "Example/BirdDetailsHeader",
  component: BirdDetailsHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BirdDetailsHeader>;

const Template: ComponentStory<typeof BirdDetailsHeader> = (args) => (
  <BirdDetailsHeader {...args}>
    <BirdDetailsHeaderTitle
      lat={9.6823123123}
      lng={-13.521123123}
      location="Conakry - lambanyi plage"
    />
  </BirdDetailsHeader>
);

export const BirdDetailsHeaderExample = Template.bind({});
BirdDetailsHeaderExample.args = {};
