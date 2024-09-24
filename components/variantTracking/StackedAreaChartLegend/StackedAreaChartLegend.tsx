import React, { useRef, useEffect, FunctionComponent } from "react";
import * as d3 from 'd3'
import { lineageColorMap } from "@apis/variants";
import useResizeObserver from "@hooks/useResizeObserver";
import styles from "./StackedAreaChartLegend.module.scss";

interface StackedAreaChartLegendProps {
  allVariants: string[];
  colorMap: lineageColorMap;
}

const StackedAreaChartLegend: FunctionComponent<StackedAreaChartLegendProps> = ({ allVariants, colorMap }) => {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    // constants
    const width = dimensions?.width!;
    const minItemWidth = 150;
    const minItemHeight = 30;
    const legendSide = 20;
    const padding = 10;
    const itemsPerRow = Math.max(Math.floor((width - 8 * padding) / minItemWidth), 1);
    const numRows = Math.ceil(allVariants.length / itemsPerRow);
    const height = minItemHeight * numRows + 1.5 * padding;

    // define svg canvas
    const svg = d3.select(svgRef.current).attr("height", height).attr("width", "100%");
    if (!dimensions) return;

    // clear on resize
    svg.selectAll("*").remove()
    
    // define scales
    const legendXScale = (
      d3.scaleLinear()
      .domain([0, itemsPerRow])
      .range([4 * padding, width - 2 * padding])
    );
    const legendYScale = (
      d3.scaleLinear()
      .domain([0, numRows])
      .range([padding, height - padding])
    );

    // create legend items
    const legendItems = svg
      .selectAll('.legend-item')
      .data(allVariants)
      .enter()
      .append('g')
      .attr('class', 'legend-item')
      .attr("transform", (d) => "translate(" + 
        legendXScale(allVariants.indexOf(d) % itemsPerRow) + ", " +
        legendYScale(Math.floor(allVariants.indexOf(d) / itemsPerRow)) + ")"
      );

    // colored rectangles
    legendItems
      .append('rect')
      .attr('width', legendSide)
      .attr('height', legendSide)
      .attr('fill', (d) => colorMap[d].labelColor);

    // legend texts
    legendItems
      .append('text')
      .text((d) => d)
      .attr('x', 1.5 * legendSide)
      .attr('y', 0.5 * legendSide)
      .style('dominant-baseline', 'central');
  }, [allVariants, dimensions, colorMap]);

  return (
    <div ref={wrapperRef} className={styles.legendDiv}>
      <div className={styles.legendTitle}>Variants Legend:</div>
      <svg ref={svgRef} className={styles.legend}></svg>
    </div>
  );
};

export default StackedAreaChartLegend;
