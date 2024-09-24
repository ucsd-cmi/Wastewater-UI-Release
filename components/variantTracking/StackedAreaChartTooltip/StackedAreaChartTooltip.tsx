import React, { FunctionComponent } from "react";
import * as d3 from 'd3'
import { lineageColorMap } from "@apis/variants";
import styles from "./StackedAreaChartTooltip.module.scss";
import { VariantPlotData } from "@constants/structures";

interface StackedAreaChartTooltipProps {
  data: VariantPlotData;
  colorMap: lineageColorMap;
  position: number;
  xScale: d3.ScaleTime<number, number, never>;
  rectTop: number;
  rectHeight: number;
  tooltipTop: number;
  rightLimit: number;
  width: number;
}

const StackedAreaChartTooltip: FunctionComponent<StackedAreaChartTooltipProps> = ({
  data,
  colorMap,
  position,
  xScale,
  rectTop,
  rectHeight,
  tooltipTop,
  rightLimit,
  width
}) => {
  // constants
  const tooltipRectSide = 1;
  const [tooltipWidth, gapWidth] = [128, 4];
  const curDate = d3.timeFormat('%b %e, %Y')(data.date);

  // handle known date case
  if (!position) position = xScale(data.date);

  // compute tooltipData content
  const groups = d3.group(data.fractions, (d) => d[0].substring(d[0].indexOf('(') + 1, d[0].indexOf(')')));
  const groupSum = d3.rollup(
    data.fractions, 
    (values) => d3.sum(values, v => v[1]),
    (d) => d[0].substring(d[0].indexOf('(') + 1, d[0].indexOf(')'))
  );
  const sortedSums = new Map(Array.from(groupSum).sort((a, b) => b[1] - a[1]));

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
        {Array.from(sortedSums).map(([variant, pct]) => (
          <div key={variant}>
            {/* Variant name */}
            <span className={styles.variantData}>
              {`${variant}: ${d3.format('.1%')(pct)}`}
              <br />
            </span>

            {/* Lineage breakdown */}
            {groups.get(variant)?.map((lineages) => (
              <div key={lineages[0]}>
                <span
                  className={styles.lineageData}
                  style={{ color: colorMap[lineages[0]].labelColor }}
                >
                  {`${lineages[0].substring(0, lineages[0].indexOf('('))}: ${d3.format('.1%')(lineages[1])}`}
                </span>
                <br />
              </div>
            ))}
          </div>
        ))}
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
          backgroundColor: 'white',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default StackedAreaChartTooltip;
