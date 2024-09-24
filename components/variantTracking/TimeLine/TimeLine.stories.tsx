import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import TimeLine from "./TimeLine";

const storyExport = {
  title: "TimeLine",
  component: TimeLine,
};
export default storyExport;

const Template: Story<ComponentProps<typeof TimeLine>> = (args) => (
  <TimeLine {...args} />
);

export const Default = Template.bind({});
Default.args = {
  startDate: new Date(),
};
