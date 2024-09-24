import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import MapLayer from "./MapLayer";

const storyExport = {
  title: "MapLayer",
  component: MapLayer,
};
export default storyExport;

const Template: Story<ComponentProps<typeof MapLayer>> = (args) => (
  <MapLayer {...args} />
);

export const Default = Template.bind({});
Default.args = {};
