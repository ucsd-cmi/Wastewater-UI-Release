import { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from "./TimeLine.module.scss";
import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import { Progress } from "flowbite-react";

import "react-datepicker/dist/react-datepicker.css";

interface TimelineProps {
  earliestDate: Date;
  startDate: Date;
  currDate: Date;
  endDate: Date;
  setStartDate: (newDate: Date) => void;
  onStartDateChange: (newDate: Date) => void;
  onEndDateChange: (newDate: Date) => void;
}

function calculatePercentageWithinDateRange(
  specificDate: Date,
  startDate: Date,
  endDate: Date
): number {
  const totalDays =
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  const daysFromStart =
    (specificDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  const percentage = (daysFromStart / totalDays) * 100;

  return percentage;
}

const TimeLine: FunctionComponent<TimelineProps> = ({
  startDate,
  currDate,
  endDate,
  setStartDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  useEffect(() => {
    if (onStartDateChange) {
      onStartDateChange(currDate);
    }

    if (onEndDateChange) {
      onEndDateChange(endDate);
    }
  }, [currDate, endDate, onStartDateChange, onEndDateChange]);

  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.parentWrapper}>
      <div className={styles.dateWrapper}>
        <span>Start</span>
        <DatePicker
          showIcon
          selected={startDate}
          onChange={(date: Date) => {
            setStartDate(date);
            onStartDateChange(date);
          }}
          onSelect={(date: Date) => {
            setStartDate(date);
            onStartDateChange(date);
          }}
        />
      </div>

      <div className={styles.wrapper} ref={targetRef}>
        <div className={styles.currentDate}>
          {moment(currDate).format("MMM D YYYY")}
          <Progress
            progress={calculatePercentageWithinDateRange(
              currDate,
              startDate,
              endDate
            )}
          />
        </div>
      </div>

      <div className={styles.dateWrapper}>
        <span>End</span>
        <DatePicker
          showIcon
          selected={endDate}
          onChange={(date: Date) => {
            onEndDateChange(date);
            onStartDateChange(startDate);
          }}
          onSelect={(date: Date) => {
            onEndDateChange(date);
            onStartDateChange(startDate);
          }}
        />
      </div>
    </div>
  );
};

export default TimeLine;
