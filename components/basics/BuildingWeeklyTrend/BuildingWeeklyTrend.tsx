import { StatusTrend, BuildingExposureTrend } from "@basics";
import { customBreakPoints, WastewaterTrend, ExposureTrend } from "@constants";
import cn from "classnames";
import React, { FunctionComponent } from "react";
import useBreakpoints from "use-window-width-breakpoints";
import styles from "./BuildingWeeklyTrend.module.scss";

interface BuildingWeeklyTrendProps {
  name: string;
  currSelected: string;
  forPopUp?: boolean;
  displayExposure?: boolean;
  exposureTrend: ExposureTrend;
  wastewaterTrend: WastewaterTrend;
}

const BuildingWeeklyTrend: FunctionComponent<BuildingWeeklyTrendProps> = ({
  name,
  currSelected,
  forPopUp,
  displayExposure,
  exposureTrend,
  wastewaterTrend
}) => {
  var exposure:string;
  if (displayExposure && Object.values(exposureTrend).indexOf("true") > -1) {
    exposure = "exposureTrue";
  } else {
    exposure = "exposureFalse";
  }
  const breakpoint = useBreakpoints(customBreakPoints);
  const isSelected = currSelected === name;

  return (
    <div>
      <div className={styles.wrapper}>
        {(breakpoint.up.md || forPopUp) &&
          Object.entries(wastewaterTrend).map(([idx, status]) => (
            <StatusTrend status={status} key={idx} forPopUp={forPopUp}>
              {idx === Object.keys(wastewaterTrend)[0] && !forPopUp && (
                <div
                  className={cn(styles.buildingName, styles[Object.values(wastewaterTrend)[0]], {
                    "fw-bold": isSelected,
                  })}
                >
                  {name}
                </div>
              )}
            </StatusTrend>
          ))}

        {breakpoint.down.sm && !forPopUp && (
          <StatusTrend status={Object.values(wastewaterTrend)[0]} key={0}>
            <div
              className={cn(styles.buildingName, styles[Object.values(wastewaterTrend)[0]], {
                "fw-bold": isSelected,
              })}
            >
              {name}
            </div>
            <span className={styles[exposure]}></span>
          </StatusTrend>
        )}
      </div>
      {breakpoint.up.md && !forPopUp && displayExposure && isSelected && (
          <BuildingExposureTrend
            exposureData={exposureTrend}
            forPopUp={false}
          />
        )}
    </div>
  );
};

export default BuildingWeeklyTrend;
