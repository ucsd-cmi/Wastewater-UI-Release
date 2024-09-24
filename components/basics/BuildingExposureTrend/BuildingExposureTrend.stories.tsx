import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import BuildingExposureTrend from "./BuildingExposureTrend";

const storyExport = {
  title: "BuildingExposureTrend",
  component: BuildingExposureTrend,
};
export default storyExport;

const Template: Story<ComponentProps<typeof BuildingExposureTrend>> = (args) => (
  <BuildingExposureTrend {...args} />
);

export const Default = Template.bind({});
Default.args = {
  exposureData: {
    "3/28/2022": "true",
    "3/27/2022": "false",
    "3/26/2022": "true",
    "3/25/2022": "false",
    "3/24/2022": "false",
    "3/23/2022": "false",
    "3/22/2022": "false",
    "3/21/2022": "false",
  },
  forPopUp: false,
};
