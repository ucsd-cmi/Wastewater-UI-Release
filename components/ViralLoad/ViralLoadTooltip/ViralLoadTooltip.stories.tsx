import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import ViralLoadTooltip from "./ViralLoadTooltip";
import * as d3 from 'd3';

const storyExport = {
  title: "ViralLoadTooltip",
  component: ViralLoadTooltip,
};
export default storyExport;

const Template: Story<ComponentProps<typeof ViralLoadTooltip>> = (args) => (
  <ViralLoadTooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
      date: new Date("2023-03-08"),
      viralLoad: 979101.8986802174
  },
  position: 1353.7410971618388,
  xScale: (
    d3
    .scaleTime()
    .domain([new Date('2020-11-25'), new Date('2023-03-28')])
    .range([30, 1386])
  ),
  rectTop: 48.18181818181819,
  rectHeight: 281.8181818181818,
  tooltipTop: 20,
  rightLimit: 1432.1030726393437
};
