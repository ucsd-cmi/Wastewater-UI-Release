import React, { FunctionComponent } from "react";
import styles from "./ResidentialStatistics.module.scss";
import { SamplerBreakdown } from "@constants";

interface ResidentialStatisticsProps {
  currentDate: string;
  samplerBreakdown: SamplerBreakdown;
}
  
const ResidentialStatistics: FunctionComponent<ResidentialStatisticsProps> = ({
  currentDate,
  samplerBreakdown
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <div className={styles.headerText}>&nbsp;</div>
        <div className={styles.headerText}>Residential</div>
        <div className={styles.headerText}>Non-residential</div>
        <div className={styles.headerText}>Total</div>
      </div>
      <div className={styles.dataRow}>
        <div className={styles.dataLabel}>Positivity Rate: {currentDate}</div>
        <div className={styles.dataCell}>
          {samplerBreakdown.currentDateResidential}
        </div>
        <div className={styles.dataCell}>
          {samplerBreakdown.currentDateNonResidential}
        </div>
        <div className={styles.dataCell}>
          {samplerBreakdown.currentDateTotal}
        </div>
      </div>
      <div className={styles.dataRow}>
        <div className={styles.dataLabel}>Seven-day Average</div>
        <div className={styles.dataCell}>
          {samplerBreakdown.sevenDayResidential}
        </div>
        <div className={styles.dataCell}>
          {samplerBreakdown.sevenDayNonResidential}
        </div>
        <div className={styles.dataCell}>
          {samplerBreakdown.sevenDayTotal}
        </div>
      </div>
    </div>
  );
};

export default ResidentialStatistics;
  