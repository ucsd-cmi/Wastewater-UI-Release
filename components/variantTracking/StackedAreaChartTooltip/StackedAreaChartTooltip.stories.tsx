import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import StackedAreaChartTooltip from "./StackedAreaChartTooltip";
import * as d3 from 'd3';

const storyExport = {
  title: "StackedAreaChartTooltip",
  component: StackedAreaChartTooltip,
};
export default storyExport;

const Template: Story<ComponentProps<typeof StackedAreaChartTooltip>> = (args) => (
  <StackedAreaChartTooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
      date: new Date("2023-03-08"),
      fractions: new Map([
        ["XBB.1.5.X (Omicron)", 0.6419851470560004],
        ["XBB.1.16.X (Omicron)",  0.1158226785231048],
        ["Recombinants (Other)", 0.09002836323778243],
        ["BQ.1.1.X (Omicron)", 0.06462142091602557],
        ["XBB.1.9.X (Omicron)", 0.059474386179221954],
        ["Other lineage (Other)", 0.01283681124771441],
        ["BQ.1.X (Omicron)", 0.006094993554080746],
        ["XBB.X (Omicron)", 0.004893015715053591],
        ["BA.5.X (Omicron)", 0.004100697782736451],
        ["BA.2.X (Omicron)", 0.0001424857882796919]
      ])
  },
  colorMap: {
    "AY.100 (Delta)": {
      labelColor : "#6CE9D3",
      textColor: "#000000"
    },
    "AY.103 (Delta)": {
      labelColor: "#2BB73B",
      textColor: "#000000"
    },
    "AY.113 (Delta)": {
      labelColor: "#94FFB8",
      textColor: "#000000"
    },
    "AY.116 (Delta)": {
      labelColor: "#5C6D2C",
      textColor: "#FFFFFF"
    },
    "AY.119 (Delta)": {
      labelColor: "#8DEC40",
      textColor: "#000000"
    },
    "AY.20 (Delta)": {
      labelColor: "#ADDD96",
      textColor: "#000000"
    },
    "AY.25 (Delta)": {
      labelColor: "#4CC5A8",
      textColor: "#000000"
    },
    "AY.25.1 (Delta)": {
      labelColor: "#09630D",
      textColor: "#FFFFFF"
    },
    "AY.3 (Delta)": {
      labelColor: "#B6CCBD",
      textColor: "#000000"
    },
    "AY.3.1 (Delta)": {
      labelColor: "#A5BA24",
      textColor: "#000000"
    },
    "AY.43.4 (Delta)": {
      labelColor: "#F1F2A5",
      textColor: "#000000"
    },
    "AY.44 (Delta)": {
      labelColor: "#E9D417",
      textColor: "#000000"
    },
    "AY.46.4 (Delta)": {
      labelColor: "#EDFF1F",
      textColor: "#000000"
    },
    "Other lineage (Delta)": {
      labelColor: "#D4C95C",
      textColor: "#000000"
    },
    "B.1.1.529 (Omicron)": {
      labelColor: "#8931DC",
      textColor: "#FFFFFF"
    },
    "BA.1 (Omicron)": {
      labelColor: "#5D24BA",
      textColor: "#FFFFFF"
    },
    "BA.1.1.X (Omicron)": {
      labelColor: "#9A95E5",
      textColor: "#000000"
    },
    "BA.2.12.X (Omicron)": {
      labelColor: "#6B3099",
      textColor: "#FFFFFF"
    },
    "BA.2.75 (Omicron)": {
      labelColor: "#A33183",
      textColor: "#FFFFFF"
    },
    "BA.2.X (Omicron)": {
      labelColor: "#DC31D5",
      textColor: "#000000"
    },
    "BA.4.6 (Omicron)": {
      labelColor: "#E790CB",
      textColor: "#000000"
    },
    "BA.4.X (Omicron)": {
      labelColor: "#D85D5D",
      textColor: "#000000"
    },
    "BA.5.X (Omicron)": {
      labelColor: "#E42749",
      textColor: "#000000"
    },
    "BF.7.X (Omicron)": {
      labelColor: "#FF1200",
      textColor: "#000000"
    },
    "BQ.1.1.X (Omicron)": {
      labelColor: "#BF1A1A",
      textColor: "#FFFFFF"
    },
    "BQ.1.X (Omicron)": {
      labelColor: "#EE8F8F",
      textColor: "#000000"
    },
    "XBB.1.16.X (Omicron)": {
      labelColor: "#CD7028",
      textColor: "#000000"
    },
    "XBB.1.5.X (Omicron)": {
      labelColor: "#FF7002",
      textColor: "#000000"
    },
    "XBB.1.9.X (Omicron)": {
      labelColor: "#6B4C33",
      textColor: "#FFFFFF"
    },
    "XBB.2.3.X (Omicron)": {
      labelColor: "#FFC794",
      textColor: "#000000"
    },
    "XBB.X (Omicron)": {
      labelColor: "#A8886F",
      textColor: "#000000"
    },
    "Other lineage (Omicron)": {
      labelColor: "#000000",
      textColor: "#FFFFFF"
    },
    "Recombinants (Omicron)": {
      labelColor: "#333333",
      textColor: "#FFFFFF"
    },
    "Other lineage (Alpha)": {
      labelColor: "#666666",
      textColor: "#FFFFFF"
    },
    "Other lineage (Other)": {
      labelColor: "#999999",
      textColor: "#000000"
    },
    "Recombinants (Other)": {
      labelColor: "#CCCCCC",
      textColor: "#000000"
    }
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
  rightLimit: 1432.1030726393437,
  width: 1406
};
