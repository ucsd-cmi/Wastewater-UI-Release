import cn from "classnames";
import React, { FunctionComponent } from "react";
import styles from "./StatusTrend.module.scss";
import { Status } from "@constants";

interface StatusTrendProps {
  status: Partial<Status>;
  forPopUp?: boolean;
  children: React.ReactNode;
}

const StatusTrend: FunctionComponent<StatusTrendProps> = ({
  status,
  children,
  forPopUp,
}) => {
  return (
    <div
      className={cn(styles.size, styles[status], {
        [styles.sizeWithWord]: children,
        [styles.sizePopUp]: forPopUp,
      })}
    >
      {children}
    </div>
  );
};

export default StatusTrend;
