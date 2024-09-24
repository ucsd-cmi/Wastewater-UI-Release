import {
  BuildingMapping,
  ViralLoadData,
  ViralLoadPlotData,
} from "@constants";
import * as d3 from 'd3';

export const computeCampusData = (viralData: ViralLoadData): ViralLoadPlotData[] => {
  var campusData: ViralLoadPlotData[] = [];
  viralData.forEach((manholeData, dateValue) => {
    var viralPlotData: ViralLoadPlotData = {
      date: d3.timeParse("%Y-%m-%d")(dateValue)!,
      viralLoad: d3.mean(Array.from(manholeData), (arr) => arr[1])!
    };
    campusData.push(viralPlotData);
  })
  return campusData;
}

export const computeBuildingData = (
  viralData: ViralLoadData,
  buildingCaan: string,
  buildingMapping: BuildingMapping
): ViralLoadPlotData[] => {
  var buildingData: ViralLoadPlotData[] = [];
  const manholeIDs = buildingMapping[buildingCaan];
  if (!manholeIDs) return buildingData;
  
  viralData.forEach((manholeData, dateValue) => {
    var viralLoad = d3.mean(manholeIDs, (manholeID) => manholeData.get(manholeID));
    if (viralLoad !== undefined) {
      var viralPlotData: ViralLoadPlotData = {
        date: d3.timeParse("%Y-%m-%d")(dateValue)!,
        viralLoad: viralLoad
      };
      buildingData.push(viralPlotData);
    }
  })
  return buildingData;
}