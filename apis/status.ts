import { layerInfoAPI, exposureAPI, backendAPI, variantAPI } from "@apis";
import { gql } from "@apollo/client";
import * as query from "@arcgis/core/rest/query";
import {
  backendStatusConvertMap,
  BackendStatusConvertMapKey,
  daysInExposureTrend,
  daysInWastewaterTrend,
  statusRank,
  StatusRankKey,
  WastewaterTrend,
  ExposureTrend,
  SingleBuilding,
  BuildingData,
  SamplerBreakdown,
  ViralLoadData,
  ViralLoadManholeData
} from "@constants";
import { layerLink } from "@constants";
import moment from "moment";

interface ExposureResponse {
  exposure_map: ExposureMatrix;
}

interface ExposureMatrix {
  [key: string]: Array<string>;
}

interface SamplerResponse { 
  '7-day total positivity rate avg': string;
  '7-day residential positivity rate avg': string;
  '7-day non-residential positivity rate avg': string;
  'total positivity rate': string;
  'residential positivity rate': string;
  'non-residential positivity rate': string;
}

/** 
 * Build a default wastewater data object for a single building.
 * 
 * We default to a data status of "unavailable" since that's inherently
 * accurate for any results that might be missing from ArcGIS
 * @param {string} endDate  The most recent date for which we have data
 * @returns {WastewaterTrend} Object with seven key/value pairs of date:status
*/
const getDefaultWastewaterTrend = (endDate: string) => {
  var defaultWastewaterTrend: WastewaterTrend = {};
  for (let i = 0; i < daysInWastewaterTrend; i++) {
    var tmpDateObj = new Date(endDate);
    tmpDateObj.setDate(tmpDateObj.getDate() - i);
    var tmpDate = moment(tmpDateObj).format("M/D/YYYY");
    defaultWastewaterTrend[tmpDate] = "unavailable";
  }
  return defaultWastewaterTrend;
}

/** 
 * Build a default exposure data object for a single building.
 * 
 * We default to a data status of "false" since there's no notion of a
 * verifiable lack of exposure. We have eight days of data, rather than seven
 * since exposure is attached to a discrete days and therefore covers the eight
 * calendar days that comprise seven wastewater samples.
 * @param {string} endDate  The most recent date for which we have data
 * @returns {ExposureTrend} Object with eight key/value pairs of date:status
*/
const getDefaultExposureTrend = (endDate: string) => {
  var defaultExposureTrend: ExposureTrend = {};
  for (let i = 0; i < daysInExposureTrend; i++) {
    var tmpDateObj = new Date(endDate);
    tmpDateObj.setDate(tmpDateObj.getDate() - i);
    var tmpDate = moment(tmpDateObj).format("M/D/YYYY");
    defaultExposureTrend[tmpDate] = "false";
  }
  return defaultExposureTrend;
}

/**
 * Get the most recent date for which we have wastewater data
 * 
 * @returns {string}  The most recent date
 */
export const getLatestUpdateDate = async () => {
  const response = await layerInfoAPI.get<string>("get_latest_update");
  return response.data;
};

/**
 * Retrieve residential, non-residential, and positivity rates
 * 
 * @returns {SamplerBreakdown} The breakdown of positivity rates for
 *  the current date and a seven-day rolling average
 */
export const getResidentialStats = async (dateString: string) => {
  const samplerResponse = await backendAPI.post("", {"body": {
    "mode": "stats",
    "password": "Open, sesame",
    "date": dateString
  }});
  const positivityStats: SamplerResponse = JSON.parse((samplerResponse.data as any).body);
  var samplerBreakdown:SamplerBreakdown = {
    currentDateResidential: positivityStats['residential positivity rate'],
    currentDateNonResidential: positivityStats['non-residential positivity rate'],
    currentDateTotal: positivityStats['total positivity rate'],
    sevenDayResidential: positivityStats['7-day residential positivity rate avg'],
    sevenDayNonResidential: positivityStats['7-day non-residential positivity rate avg'],
    sevenDayTotal: positivityStats['7-day total positivity rate avg']
  };
  
  return samplerBreakdown;
};

/**
 * Collect wastewater and exposure data for all buildings.
 * 
 * We build a Map() using building name as the key, and the value is an
 * object containing a building's CAAN, wastewater data, and exposure
 * data.
 * @param {string} startDate The earliest date we're pulling data for
 * @param {string} endDate  The latest date we're pulling data for
 * @returns {BuildingData} The full matrix of data for all buildings
 */
export const getBuildingData = async (startDate: string, endDate: string) => {
  var buildingData = new BuildingData();
  var curDate = endDate;

  const exposureAPIResponse = await exposureAPI.get<ExposureResponse>(
    `update_building_exposure_map`
  );
  const exposureDataTmp: ExposureResponse = exposureAPIResponse.data;
  const exposureData = exposureDataTmp.exposure_map;

  while(curDate != startDate) {
    var curDateObj = new Date(curDate);
    var queryDateObj = new Date(curDate);
    queryDateObj.setDate(queryDateObj.getDate() + 1);
    var queryDate = moment(queryDateObj).format("M/D/YYYY");

    const queryForTheDate = {
      returnGeometry: false,
      outFields: ["*"],
      where: `Date = '${queryDate}'`,
    };
    const featuresForTheDate = await query.executeQueryJSON(
      layerLink,
      queryForTheDate
    );

    const featuresArray = featuresForTheDate.toJSON()["features"];

    for (let i = 0; i < featuresArray.length; i++) {
      const buildingName = featuresArray[i].attributes.NAME;
      const buildingCAAN = featuresArray[i].attributes.CAANtext_INTERNAL;
      if(buildingData.has(buildingName)) {
        var buildingInfo = buildingData.get(buildingName)!;
        buildingInfo.WastewaterData[curDate] = backendStatusConvertMap[featuresArray[i].attributes.Status as BackendStatusConvertMapKey];
        buildingData.set(buildingName,buildingInfo);
      } else {
        var buildingInfo: SingleBuilding = {
          CAAN: buildingCAAN,
          WastewaterData: getDefaultWastewaterTrend(endDate),
          ExposureData: getDefaultExposureTrend(endDate),
        }
        buildingInfo.WastewaterData[curDate] = backendStatusConvertMap[featuresArray[i].attributes.Status as BackendStatusConvertMapKey];
        if (buildingCAAN && exposureData[buildingCAAN]) {
          for (let j = 0; j < exposureData[buildingCAAN].length; j++) {
            var dparts = exposureData[buildingCAAN][j].split("/");
            var year = "20" + dparts[2];
            var checkDate = new Date(
              parseInt(year),
              parseInt(dparts[0]) - 1,
              parseInt(dparts[1])
            );
            const checkDateStr = moment(checkDate)
              .format("M/D/YYYY")
              .toString();
    
            if(buildingInfo.ExposureData[checkDateStr] != null) {
              buildingInfo.ExposureData[checkDateStr] = "true";
            }
          }          
        }
        buildingData.set(buildingName,buildingInfo);
      }
    }

    curDateObj.setDate(curDateObj.getDate() - 1);
    curDate = moment(curDateObj).format("M/D/YYYY");    
  }

  return sortBuildingData(buildingData);
};

/**
 * Sort the list of buildings by our default criteria
 * 
 * We sort the building list first by the most recent wastewater result,
 * then alphabetically by building name
 * @param {BuildingData} buildingData The full list of buildings w/ data
 * @returns {BuildingData} The sorted list of buildings
 */
const sortBuildingData = (
  buildingData: BuildingData
) => {
  const buildingDataSorted = new Map([...buildingData.entries()].sort(
    function (a, b) {
      const statusDiff = 
        statusRank[Object.values(b[1].WastewaterData)[0] as StatusRankKey] - 
        statusRank[Object.values(a[1].WastewaterData)[0] as StatusRankKey];

      if (statusDiff !== 0) {
        return statusDiff;
      }

      if (a[0] !== b[0]) {
        return a[0] < b[0] ? -1 : 1;
      }

      return 0;
    }
  ));
  return buildingDataSorted;
};

/**
 * Get Viral Load data from GraphQL API
 * 
 * @returns {ViralLoadData} viral load for all dates and manholes
 */
export const getViralLoadData = async () => {
  var viralLoadData = new ViralLoadData();

  const result = await variantAPI.query({
    variables: {
      startDate: null,
      endDate: null,
    },
    query: gql`
      query getQpcrViralLoads($startDate: Time, $endDate: Time) { 
        getQpcrViralLoads(startDate: $startDate, endDate: $endDate) {
          date
          manholeID
          viralLoad
        }
      }
    `,
  });
  
  for (let i = 0; i < result.data.getQpcrViralLoads.length; i++) {
    var viralLoadObj = result.data.getQpcrViralLoads[i];
    var viralLoadDate = viralLoadObj.date.slice(0, 10);

    if (!viralLoadData.has(viralLoadDate)) {
      viralLoadData.set(viralLoadDate, new ViralLoadManholeData());
    }
    // assume manhole IDs are unique for each date
    viralLoadData.get(viralLoadDate)!.set(viralLoadObj.manholeID, viralLoadObj.viralLoad);
  }

  return viralLoadData;
}