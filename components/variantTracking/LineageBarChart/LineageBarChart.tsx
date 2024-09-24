import React, { useRef, useEffect, FunctionComponent } from "react";
import { select, scaleBand, scaleLinear, max } from "d3";
import useResizeObserver from "@hooks/useResizeObserver";
import styles from "./LineageBarChart.module.scss";

export interface VariantStats {
  lineage: string;
  variant: string;
  count: number;
  labelColor: string;
  textColor: string;
}
interface LineageBarChartProps {
  data: VariantStats[];
}

export const VariantCode = {
  Omicron: "▲",
  Delta: "●",
  Alpha: "■",
  Other: "△",
};

const formatDisplayLineage = (lineage: string) => lineage.split("(")[0].trim();

const LineageBarChart: FunctionComponent<LineageBarChartProps> = ({ data }) => {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;
    svg.selectAll("*").remove();

    // sorting the data
    data.sort((a, b) => b.count - a.count);

    const yScale = scaleBand()
      .paddingInner(0.1)
      .domain(data.map((_, index) => index.toString())) // [0,1,2,3,4,5]
      .range([0, dimensions.height]); // [0, 200]

    const xScale = scaleLinear()
      .domain([0, max(data, (entry) => entry.count) as number]) // [0, 65 (example)]
      .range([0, dimensions.width * 0.85]); // [0, 400 (example)]

    let height = Math.min(yScale.bandwidth(), 60);
    height = Math.max(height, 40);

    svg.attr("height", data.length * 42);
    // draw the bars
    svg
      .selectAll(".bar")
      .data(data, (entry, index) => (entry as VariantStats).lineage)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", 120)
      .attr("height", height)
      .attr("rx", height / 2)
      .attr("ry", height / 2)
      .attr("fill", (entry) => entry.labelColor)
      .transition()
      .attr("y", (entry, index) => yScale(index.toString()) as number)
      .attr("width", (entry) => xScale(entry.count));

    // add lineage labels
    svg
      .selectAll(".lineageLabel")
      .data(data, (entry, index) => (entry as VariantStats).lineage)
      .enter()
      .append("text")
      .attr("x", 0)
      .attr("class", "lineageLabel")
      .text(
        (entry) =>
          `${
            VariantCode[entry.variant as keyof typeof VariantCode]
          } ${formatDisplayLineage(entry.lineage)}`
      )
      .style("fill", "black")
      .transition()
      .attr(
        "y",
        (entry, index) => (yScale(index.toString()) as number) + height / 2 + 5
      );

    // add count labels
    svg
      .selectAll(".countLabel")
      .data(data, (entry, index) => (entry as VariantStats).lineage)
      .enter()
      .append("text")
      .attr("x", (entry) => xScale(entry.count) / 2 + 120)
      .attr("class", "countLabel")
      .text((entry) => `${entry.count} - positive`)
      .style("fill", (entry) => entry.textColor)
      .style("text-anchor", "middle")
      .style("font-family", "Roboto")
      .transition()
      .attr(
        "y",
        (entry, index) => (yScale(index.toString()) as number) + height / 2 + 5
      );
  }, [data, dimensions]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <svg ref={svgRef} className={styles.bar}></svg>
    </div>
  );
};

export default LineageBarChart;
