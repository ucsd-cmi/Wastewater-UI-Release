import cn from "classnames";
import React, { FunctionComponent } from "react";
import styles from "./TimeIndicator.module.scss";

interface TimeIndicatorProps {
  date: string;
  dayOfWeek: string;
  className?: string;
  large?: boolean;
}

const TimeIndicator: FunctionComponent<TimeIndicatorProps> = ({
  date,
  dayOfWeek,
  className,
  large,
}) => {
  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles.wrapperLarge]: large,
      })}
    >
      <div className={cn(styles.size, { [styles.large]: large })}>
        <div className={styles.weekDay}>{dayOfWeek}</div>
        <div className={styles.regularDate}>{date}</div>
      </div>
    </div>
  );
};

export default TimeIndicator;
