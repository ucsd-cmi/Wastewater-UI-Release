import { variantAPI } from "@apis";
import { gql } from "@apollo/client";
import {
  ViralFraction,
  ManholeData,
  VariantData,
  LineageFirstSeen,
  ManholeMapping,
  BuildingMapping,
  BuildingNames
} from "@constants";
import moment from "moment";
import { LabelColor } from "src/generated/graphql";

export interface lineageColorMap {
  [key: string]: { 
    labelColor: string; 
    textColor: string 
  };
}

export const getManholeMapping = async() => {
  var manholeMapping: ManholeMapping = {};
  var buildingMapping: BuildingMapping = {};

  const result = await variantAPI
  .query({
    query: gql`
      query getManholeCaanMappings {
        getManholeCaanMappings {
          manholeID
          internalCaan
        }
      }
    `,
  });

  for(let i = 0; i < result.data.getManholeCaanMappings.length; i++) {
    var caanObj = result.data.getManholeCaanMappings[i];
    manholeMapping[caanObj.manholeID] = caanObj.internalCaan;

    caanObj.internalCaan.forEach((caan: string) => {
      if (!buildingMapping[caan]) {
        buildingMapping[caan] = [];
      }
      buildingMapping[caan].push(caanObj.manholeID);
    })
  }

  return {
    manholeMapping,
    buildingMapping
  };
};

export const getVariantData = async (latestAvailableDate: string) => {
  var variantData = new VariantData();
  var lineageFirstSeen: LineageFirstSeen = {};
  var endDate = moment(latestAvailableDate).format("YYYY-MM-DD");
  var latestAvailableVariantDate: string | undefined;
  var earliestAvailableVariantDate: string | undefined;

  const result = await variantAPI.query({
    variables: {
      startDate: "2020-01-01T00:00:00.000Z",
      endDate: `${endDate}T00:00:00.000Z`,
    },
    query: gql`
      query getVariantFractions($startDate: Time!, $endDate: Time!) {
        getVariantFractions(startDate: $startDate, endDate: $endDate) {
          date
          lineage
          variant
          fraction
          manholeID
        }
      }
    `,
  });

  for (let i = 0; i < result.data.getVariantFractions.length; i++) {
    var variantObj = result.data.getVariantFractions[i];
    var variantFractionDateObject = moment.utc(variantObj.date);
    var variantFractionDate = variantFractionDateObject.format("M/D/YYYY");

    // Begin code to create the lineageFirstSeen values
    // We're going to use variant (lineage) as the key since lineage isn't unique
    const lineageKey = variantObj.lineage + ' (' + variantObj.variant + ')';
    var variantFractionDateDate = variantFractionDateObject.toDate();
    if (lineageKey in lineageFirstSeen) {
      if (variantFractionDateDate < lineageFirstSeen[lineageKey]) {
        lineageFirstSeen[lineageKey] = variantFractionDateDate;
      }
    } else {
      lineageFirstSeen[lineageKey] = variantFractionDateDate;
    }
    // End code to create

    if (
      !latestAvailableVariantDate ||
      +variantFractionDateObject > +moment(latestAvailableVariantDate)
    ) {
      latestAvailableVariantDate = variantFractionDate;
    }

    if (
      !earliestAvailableVariantDate ||
      +variantFractionDateObject < +moment(earliestAvailableVariantDate)
    ) {
      earliestAvailableVariantDate = variantFractionDate;
    }

    if (variantData.has(variantFractionDate)) {
      var dateData = variantData.get(variantFractionDate)!;
      if (dateData.has(variantObj.manholeID)) {
        var fractionData = dateData.get(variantObj.manholeID)!;
        var viralFraction: ViralFraction = {
          lineage: variantObj.lineage,
          variant: variantObj.variant,
          fraction: variantObj.fraction,
        };
        fractionData.push(viralFraction);
        dateData.set(variantObj.manholeID, fractionData);
      } else {
        var viralFraction: ViralFraction = {
          lineage: variantObj.lineage,
          variant: variantObj.variant,
          fraction: variantObj.fraction,
        };
        dateData.set(variantObj.manholeID, [viralFraction]);
      }
      variantData.set(variantFractionDate, dateData);
    } else {
      var viralFraction: ViralFraction = {
        lineage: variantObj.lineage,
        variant: variantObj.variant,
        fraction: variantObj.fraction,
      };
      var manholeData = new ManholeData();
      manholeData.set(variantObj.manholeID, [viralFraction]);
      variantData.set(variantFractionDate, manholeData);
    }
  }

  return {
    variantData,
    latestAvailableVariantDate,
    earliestAvailableVariantDate,
    lineageFirstSeen
  };
};

export const getLineageColorMap = async () => {
  const result = await variantAPI.query({
    query: gql`
      query getLabelColors {
        getLabelColors {
          lineageLabel
          variantLabel
          labelColor
          textColor
        }
      }
    `,
  });

  return result.data.getLabelColors.reduce(
    (prev: lineageColorMap, item: LabelColor) => {
      prev[`${item.lineageLabel} (${item.variantLabel})`] = {
        labelColor: item.labelColor,
        textColor: item.textColor
      };
      return prev;
    },
    {}
  ) as lineageColorMap;
};

export const getBuildingNames = async() => {
  interface BuildingCaan {
    buildingName: string;
    internalCaan: string;
  }
  var buildingToCaan: BuildingNames = {};
  var allBuildings: string[] = [];

  const result = await variantAPI.query({
    query: gql`
      query getBuildingNames {
        getBuildingInfo {
          internalCaan
          buildingName
        }
      }
    `,
  });

  result.data.getBuildingInfo.forEach((item: BuildingCaan) => {
    buildingToCaan[item.buildingName] = item.internalCaan;
    allBuildings.push(item.buildingName);
  })

  return {
    buildingToCaan,
    allBuildings
  };
};