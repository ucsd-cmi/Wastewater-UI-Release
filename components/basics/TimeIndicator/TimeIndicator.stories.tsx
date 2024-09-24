import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import TimeIndicator from "./TimeIndicator";

const storyExport = {
  title: "TimeIndicator",
  component: TimeIndicator,
};
export default storyExport;

const Template: Story<ComponentProps<typeof TimeIndicator>> = (args) => (
  <TimeIndicator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  dayOfWeek: "M",
  date: "22",
};
