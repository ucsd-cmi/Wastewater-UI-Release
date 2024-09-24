import { lineageColorMap } from "@apis/variants";
import { VariantStats } from "@components/variantTracking/LineageBarChart";
import {
  VariantData,
  ManholeData,
  ViralFractionPlot,
  VariantPlotData,
  BuildingMapping
} from "@constants";
import * as d3 from 'd3';

type countMap = {
  [key: string]: number;
};

type variantMap = {
  [key: string]: string;
};

export const getVariantCountMap = (
  colorMap: lineageColorMap,
  data?: ManholeData
): VariantStats[] => {
  if (data === undefined) {
    return [];
  }
  const variantMap: variantMap = {};
  const countMap = Array.from(data.entries()).reduce((countMap, entry) => {
    entry[1].forEach((element) => {
      const lineage = `${element.lineage} (${element.variant})`;
      countMap[lineage] = (countMap[lineage] || 0) + 1;
      variantMap[lineage] = element.variant;
    });
    return countMap;
  }, {} as countMap);

  return Object.entries(countMap).map((val, _) => ({
    variant: variantMap[val[0]],
    lineage: val[0],
    count: val[1],
    labelColor: colorMap[val[0]].labelColor,
    textColor: colorMap[val[0]].textColor
  }));
};

export function sortLineageByName (a: string, b: string) {
  const variantA = a.split("(")[1].slice(0, -1);
  const variantB = b.split("(")[1].slice(0, -1);
  
  const lineageA = a.substring(0, a.indexOf('('));
  const lineageB = b.substring(0, b.indexOf('('));

  if (variantA === variantB) return lineageA < lineageB ? -1 : 1;
  else if (variantA === 'Other') return -1;
  else if (variantB === 'Other') return 1;
  else {
    return variantA < variantB ? -1 : 1;
  }
};

export const computeBuildingData = (
  variantData: VariantData,
  buildingCaan: string,
  buildingMapping: BuildingMapping
): VariantPlotData[] => {
  var buildingData: VariantPlotData[] = [];
  const manholeIDs = buildingMapping[buildingCaan];
  if (!manholeIDs) return buildingData;
  
  variantData.forEach((manholeData, dateValue) => {
    // aggregate across related manholes
    var variantMap = new ViralFractionPlot();
    var totalLoad = 0;
    manholeIDs.forEach((manholeID) => {
      var fracArray = manholeData.get(manholeID);
      if (fracArray && fracArray.length > 0) {
        fracArray.forEach((viralFraction) => {
          var viralKey = `${viralFraction.lineage} (${viralFraction.variant})`;
          totalLoad += viralFraction.fraction;
          if (!variantMap.has(viralKey)) {
            variantMap.set(viralKey, 0);
          }
          variantMap.set(
            viralKey, 
            variantMap.get(viralKey)! + viralFraction.fraction
          ); // assume each sample has the same load (weight)
        })
      } 
    })

    // normalize
    if (variantMap.size > 0)  {
      variantMap.forEach((varFraction, variantKey) => {
        variantMap.set(variantKey, varFraction / totalLoad);
      })
  
      // sort
      var variantPlotData: VariantPlotData = {
        date: d3.timeParse("%-m/%-d/%Y")(dateValue)!,
        fractions: new Map([...variantMap.entries()].sort((a, b) => b[1] - a[1]))
      };
      buildingData.push(variantPlotData);
    }
  })
  return buildingData;
}

export const computeCampusData = (variantData: VariantData): VariantPlotData[] => {
  var campusData: VariantPlotData[] = [];
  variantData.forEach((manholeData, dateValue) => {
    // aggregate across all manholes
    var variantMap = new ViralFractionPlot();
    var totalLoad = 0;
    manholeData.forEach((fracArray, _) => {
      fracArray.forEach((viralFraction) => {
        var viralKey = `${viralFraction.lineage} (${viralFraction.variant})`;
        totalLoad += viralFraction.fraction;
        if (!variantMap.has(viralKey)) {
          variantMap.set(viralKey, 0);
        }
        variantMap.set(
          viralKey, 
          variantMap.get(viralKey)! + viralFraction.fraction
        ); // assume each sample has the same load (weight)
      })
    })

    // normalize
    variantMap.forEach((varFraction, variantKey) => {
      variantMap.set(variantKey, varFraction / totalLoad);
    })

    // sort
    var variantPlotData: VariantPlotData = {
      date: d3.timeParse("%-m/%-d/%Y")(dateValue)!,
      fractions: new Map([...variantMap.entries()].sort((a, b) => b[1] - a[1]))
    };
    campusData.push(variantPlotData);
  })
  return campusData;
}