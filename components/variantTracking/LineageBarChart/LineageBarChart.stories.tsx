import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import LineageBarChart from "./LineageBarChart";

const storyExport = {
  title: "LineageBarChart",
  component: LineageBarChart,
};
export default storyExport;

const Template: Story<ComponentProps<typeof LineageBarChart>> = (args) => (
  <LineageBarChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      variant: "Omicron",
      lineage: "BA.2.12.X",
      count: 10,
      labelColor: "#f4efd3",
      textColor: "#ffffff",
    },
    {
      variant: "Omicron",
      lineage: "BA.2.X",
      count: 15,
      labelColor: "#cccccc",
      textColor: "#000000",
    },
    {
      variant: "Omicron",
      lineage: "BA.5.X",
      count: 20,
      labelColor: "#c2b0c9",
      textColor: "#000000",
    },
    {
      variant: "Omicron",
      lineage: "BA.1",
      count: 25,
      labelColor: "#9656a1",
      textColor: "#ffffff",
    },
    {
      variant: "Omicron",
      lineage: "BA.6.X",
      count: 30,
      labelColor: "#fa697c",
      textColor: "#ffffff",
    },
    {
      variant: "Omicron",
      lineage: "BA.4.X",
      count: 35,
      labelColor: "#fcc169",
      textColor: "#000000",
    },
  ],
};
