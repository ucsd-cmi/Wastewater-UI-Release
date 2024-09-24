import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import BuildingWeeklyTrend from "./BuildingWeeklyTrend";

const storyExport = {
  title: "BuildingWeeklyTrend",
  component: BuildingWeeklyTrend,
};
export default storyExport;

const Template: Story<ComponentProps<typeof BuildingWeeklyTrend>> = (args) => (
  <BuildingWeeklyTrend {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "Revelle",
  currSelected: "",
  displayExposure: true,
  exposureTrend: {
    "3/28/2022": "true",
    "3/27/2022": "false",
    "3/26/2022": "true",
    "3/25/2022": "false",
    "3/24/2022": "false",
    "3/23/2022": "false",
    "3/22/2022": "false",
    "3/21/2022": "false",
  },
  wastewaterTrend: {
    "3/28/2022": "detected",
    "3/27/2022": "monitored",
    "3/26/2022": "monitored",
    "3/25/2022": "detected",
    "3/24/2022": "monitored",
    "3/23/2022": "monitored",
    "3/22/2022": "monitored",
  },
};
