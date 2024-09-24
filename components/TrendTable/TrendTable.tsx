import cn from "classnames";
import { BuildingWeeklyTrend, TimeIndicator } from "@basics";
import { customBreakPoints, BuildingData } from "@constants";
import moment from "moment";
import { FunctionComponent, useEffect, useState } from "react";
import useBreakpoints from "use-window-width-breakpoints";
import styles from "./TrendTable.module.scss";
import React from "react";

interface TrendTableProps {
  dates: string[];
  daysOfWeek: string[];
  currSelected: string; // this indicates the current selected building on the search
  displayExposure: boolean;
  buildingData: BuildingData;
}

const TrendTable: FunctionComponent<TrendTableProps> = ({
  dates,
  daysOfWeek,
  currSelected,
  displayExposure,
  buildingData,
}) => {
  const [currBuildingData, setCurrBuildingData] = useState(buildingData);
  useEffect(() => {
    if (currSelected) {
      var selectedBuildingData = new BuildingData();
      var remainingBuildingData = new BuildingData(buildingData);
      const currSelectedBuilding = buildingData.get(currSelected)!;
      selectedBuildingData.set(currSelected, currSelectedBuilding);
      remainingBuildingData.delete(currSelected);
      setCurrBuildingData(new BuildingData([...selectedBuildingData, ...remainingBuildingData]));
    } else {
      setCurrBuildingData(buildingData);
    }
    $("#blockTable").animate({ scrollTop: 0 }, "fast");
  }, [currSelected]);

  const breakpoint = useBreakpoints(customBreakPoints);
  return (
    <div className={styles.tableWrapper}>
      {breakpoint.up.md && (
        <>
          <div className={styles.coverageNote}>
            Each sample covers a 24hr period, e.g. 11am - 11am
          </div>
          <TimeIndicator
            key="0"
            date={dates[0]}
            dayOfWeek={
              daysOfWeek[
                moment(dates[0] + "/" + moment().format("YYYY")).isoWeekday()
              ]
            }
            className={cn(styles.regularIndicator, styles.firstIndicator)}
          />
          <div className={styles.longIndicator}>Most Recent</div>
          <div className={styles.regularWrapper}>
            {/* TODO(yizong): delete the days of week so that we don't have to do the slicing */}
            {dates.slice(1).map((value, index) => (
              <TimeIndicator
                key={index}
                date={value}
                dayOfWeek={
                  daysOfWeek[
                    moment(
                      dates[index + 1] + "/" + moment().format("YYYY")
                    ).isoWeekday()
                  ]
                }
                className={styles.regularIndicator}
              />
            ))}
          </div>
        </>
      )}
      {breakpoint.down.sm && (
        <div className={styles.mobileTitle}>
          SARS-CoV-2 Detected in Wastewater on {dates[0]}
        </div>
      )}
      <div className={styles.blockWrapper} id="blockTable">
        {[...currBuildingData].map(([key, singleBuilding]) => (
          <BuildingWeeklyTrend
            key={key}
            name={key}
            currSelected={currSelected}
            displayExposure={displayExposure}
            exposureTrend={singleBuilding.ExposureData}
            wastewaterTrend={singleBuilding.WastewaterData}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendTable;
