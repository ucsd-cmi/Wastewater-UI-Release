import React, { FunctionComponent } from "react";
import { ExposureTrend } from "@constants";
import styles from "./BuildingExposureTrend.module.scss";

interface BuildingExposureTrendProps {
  exposureData: ExposureTrend;
  forPopUp?: boolean;
}
  
const BuildingExposureTrend: FunctionComponent<BuildingExposureTrendProps> = ({
  exposureData,
  forPopUp,
}) => {
  return (
    <div className={forPopUp ? styles.wrapperPopUp : styles.wrapper}>
      {Object.entries(exposureData).map(([index, exposureStatus]) => (
        <div className={forPopUp ? styles.exposureDivPopUp : styles.exposureDiv} key={index}>
          <span className={styles[exposureStatus]}></span>
        </div>          
      ))}
    </div>
  );
};

export default BuildingExposureTrend;
  