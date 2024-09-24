import { Story } from "@storybook/react";
import React, { ComponentProps, useEffect } from "react";
import StackedAreaChartLegend from "./StackedAreaChartLegend";


const storyExport = {
  title: "StackedAreaChartLegend",
  component: StackedAreaChartLegend,
};
export default storyExport;

const Template: Story<ComponentProps<typeof StackedAreaChartLegend>> = (args) => (
  <StackedAreaChartLegend {...args} />
);

export const Default = Template.bind({});
Default.args = {
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
  allVariants: [
    'Other lineage (Other)',
    'Recombinants (Other)',
    'Other lineage (Alpha)',
    'Other lineage (Delta)',
    'Other lineage (Omicron)',
    'Recombinants (Omicron)',
    'AY.44 (Delta)',
    'AY.103 (Delta)',
    'AY.25 (Delta)',
    'AY.116 (Delta)',
    'AY.20 (Delta)',
    'AY.46.4 (Delta)',
    'AY.119 (Delta)',
    'AY.25.1 (Delta)',
    'AY.100 (Delta)',
    'AY.3 (Delta)',
    'AY.3.1 (Delta)',
    'AY.113 (Delta)',
    'AY.43.4 (Delta)',
    'BA.1.1.X (Omicron)',
    'BA.1 (Omicron)',
    'B.1.1.529 (Omicron)',
    'BA.2.X (Omicron)',
    'BA.5.X (Omicron)',
    'BA.2.12.X (Omicron)',
    'BA.4.X (Omicron)',
    'BF.7.X (Omicron)',
    'BQ.1.X (Omicron)',
    'BQ.1.1.X (Omicron)',
    'BA.4.6 (Omicron)',
    'BA.2.75 (Omicron)',
    'XBB.X (Omicron)',
    'XBB.1.5.X (Omicron)',
    'XBB.1.9.X (Omicron)',
    'XBB.2.3.X (Omicron)',
    'XBB.1.16.X (Omicron)'
  ]
};