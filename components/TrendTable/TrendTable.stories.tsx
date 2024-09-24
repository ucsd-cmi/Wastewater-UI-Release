import { Story } from "@storybook/react";
import { ExposureTrend, WastewaterTrend, SingleBuilding, BuildingData } from "@constants";
import React, { ComponentProps } from "react";
import TrendTable from "./TrendTable";

const storyExport = {
  title: "TrendTable",
  component: TrendTable,
};
export default storyExport;

const Template: Story<ComponentProps<typeof TrendTable>> = (args) => (
  <TrendTable {...args} />
);

var wwTrendOne:WastewaterTrend = {
  "8/29/2021": "monitored",
  "8/28/2021": "detected",
  "8/27/2021": "monitored",
  "8/26/2021": "monitored",
  "8/25/2021": "monitored",
  "8/24/2021": "monitored",
  "8/23/2021": "monitored"
}

var exTrendOne:ExposureTrend = {
  "8/29/2021": "true",
  "8/28/2021": "false",
  "8/27/2021": "false",
  "8/26/2021": "false",
  "8/25/2021": "false",
  "8/24/2021": "true",
  "8/23/2021": "false",
  "8/22/2021": "false"
}

var buildingOne:SingleBuilding = {
  CAAN: "6115",
  WastewaterData: wwTrendOne,
  ExposureData: exTrendOne
}

var buildingData = new BuildingData();
buildingData.set("RIMAC", buildingOne);

export const Default = Template.bind({});
Default.args = {
  dates: ["8/29", "8/28", "8/27", "8/26", "8/25", "8/24", "8/23", "8/22"],
  daysOfWeek: ["Su", "M", "Tu", "W", "Th", "F", "Sa", "Su"],
  currSelected: "",
  displayExposure: false,
  buildingData: buildingData,
};
