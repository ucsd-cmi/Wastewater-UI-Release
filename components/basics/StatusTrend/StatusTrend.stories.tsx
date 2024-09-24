import React, { ComponentProps } from "react";
import StatusTrend from "./StatusTrend";
import { Story } from "@storybook/react";

const storyExport = {
  title: "StatusTrend",
  component: StatusTrend,
};
export default storyExport;

const Template: Story<ComponentProps<typeof StatusTrend>> = (args) => (
  <StatusTrend {...args} />
);

export const Default = Template.bind({});
Default.args = {
  status: "detected",
};
