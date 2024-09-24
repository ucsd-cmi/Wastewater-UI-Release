import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import ResidentialStatistics from "./ResidentialStatistics";

const storyExport = {
  title: "ResidentialStatistics",
  component: ResidentialStatistics,
};
export default storyExport;

const Template: Story<ComponentProps<typeof ResidentialStatistics>> = (args) => (
    <ResidentialStatistics {...args} />
);
  
export const Default = Template.bind({});
Default.args = {
  currentDate: "6/16/22",
  samplerBreakdown: {
    currentDateResidential: "12.3%",
    currentDateNonResidential: "7.1%",
    currentDateTotal: "8.1%",
    sevenDayResidential: "9.0%",
    sevenDayNonResidential: "10.5%",
    sevenDayTotal: "13.6%"
  }
};
