import React, { FunctionComponent } from "react";
import * as d3 from 'd3'
import styles from "./ViralLoadTooltip.module.scss";
import { ViralLoadPlotData } from "@constants/structures";

interface ViralLoadTooltipProps {
  data: ViralLoadPlotData;
  position: number;
  xScale: d3.ScaleTime<number, number, never>;
  rectTop: number;
  rectHeight: number;
  tooltipTop: number;
  rightLimit: number;
}

const ViralLoadTooltip: FunctionComponent<ViralLoadTooltipProps> = ({
  data,
  position,
  xScale,
  rectTop,
  rectHeight,
  tooltipTop,
  rightLimit
}) => {
  // constants
  const tooltipRectSide = 1;
  const [tooltipWidth, gapWidth] = [176, 4];
  const curDate = d3.timeFormat('%b %e, %Y')(data.date);
  const viralLoad = d3.format(',.2f')(data.viralLoad);

  // handle known date case
  if (!position) position = xScale(data.date);

  return (
    <div
      className={styles.tooltip}
      style={{
        top: `${tooltipTop}px`,
        left: (
          (position + tooltipWidth + gapWidth + tooltipRectSide) < rightLimit ? 
          `${position + gapWidth + tooltipRectSide}px` :
          `${position - tooltipRectSide - gapWidth - tooltipWidth}px`
        )
      }}
    >
      <div className={styles.tooltipDate}>{curDate}</div>
      <div className={styles.tooltipData}>
        <div className={styles.dataLeft}>{viralLoad}</div>
        <div className={styles.dataRight}>Copies / Liter</div>
      </div>
      <div 
        className={styles.tooltipRect}
        style={{
          position: 'absolute',
          top: `${rectTop - tooltipTop}px`,
          left: (
            (position + tooltipWidth + gapWidth + tooltipRectSide) < rightLimit ?
            `${-gapWidth - 2 * tooltipRectSide}px` : `${tooltipWidth + gapWidth}px`
          ),
          height: `${rectHeight}px`,
          width: `${2 * tooltipRectSide}px`,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default ViralLoadTooltip;
