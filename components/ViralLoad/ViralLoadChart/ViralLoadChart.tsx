import React, { 
  useRef, 
  useEffect, 
  FunctionComponent,
  useState
} from "react";
import * as d3 from 'd3';
import {
  ViralLoadPlotData
} from "@constants";
import useResizeObserver from "@hooks/useResizeObserver";
import styles from "./ViralLoadChart.module.scss";
import ViralLoadTooltip from "../ViralLoadTooltip";

interface ViralLoadChart {
  viralLoadData: ViralLoadPlotData[];
  isBuildingData: boolean;
}

const ViralLoadChart: FunctionComponent<ViralLoadChart> = ({ 
  viralLoadData, 
  isBuildingData
}) => {
  // define containers
  const svgRef = useRef(null);
  const svg = d3.select(svgRef.current);
  const wrapperRef = useRef(null);
  const dimensions = useResizeObserver(wrapperRef);

  // constants
  const padding = 5;
  const minDate = d3.min(viralLoadData, (d) => d.date) as Date;
  const maxDate = d3.max(viralLoadData, (d) => d.date) as Date;
  const maxDisplay = 25.5e7;
  const rawMax = d3.max(viralLoadData, (d) => d.viralLoad)!;
  const currentMax = (
    rawMax > maxDisplay ? 
    d3.max(viralLoadData.filter((d) => d.viralLoad <= maxDisplay), (d) => d.viralLoad)! :
    rawMax
  );
  const yMax = currentMax * 1.1;
   
  // define scales
  const xScale = (
    d3
    .scaleTime()
    .domain([minDate, maxDate])
    .range([10 * padding, dimensions?.width! - 2 * padding])
  );
  xScale.domain([minDate, xScale.invert(dimensions?.width! + padding)]);

  const yScale = (
    d3.scaleLinear()
    .domain([currentMax, 0])
    .range([padding, dimensions?.height! - 4 * padding])
  );
  yScale.domain([yMax, 0]);
  const bgTickValues = [0, 5e7, 10e7, 15e7, 20e7, 25e7];

  const maxTick = Math.floor(currentMax / 1e7) * 1e7;
  const yTickValues = d3.range(0, maxTick + 1, maxTick / 5);

  // define states
  interface TooltipData {
    data: ViralLoadPlotData;
    position: number;
  }
  const [tooltipData, setTooltipData] = useState<TooltipData | undefined>(undefined);
  
  // plot data
  useEffect(() => {
    if (!dimensions) return;

    // clear on resize, CHECK
    svg.selectAll("*").remove();

    // handle empty input
    if (!viralLoadData || viralLoadData.length < 1) return;

    // draw background colors
    const maxBgDisplay = 5;
    const numBgDisplay = Math.min(maxBgDisplay, Math.ceil(currentMax / 5e7));
    const intensityColors = ['#f8dfdd', '#f1bebc', '#ea9e9a', '#e37d79', '#dc5d57'];
    svg
    .selectAll('.bgColor')
    .data(intensityColors.slice(0, numBgDisplay))
    .enter()
    .append('rect')
    .attr('class', 'bgColor')
    .attr('x', xScale(minDate))
    .attr('y', (d, i) => yScale(
      i === numBgDisplay - 1 ? currentMax : bgTickValues[i + 1]
    ))
    .attr('height', (d, i) => (
      i === numBgDisplay - 1 ? 
      yScale(bgTickValues[i]) - yScale(currentMax) :
      yScale(bgTickValues[i]) - yScale(bgTickValues[i + 1])
    ))
    .attr('width', xScale(maxDate) - xScale(minDate))
    .attr('fill', (d) => d)
    .style('fill-opacity', 0.5);

    // define x-Axis
    if (Math.abs(maxDate.getTime() - minDate.getTime()) >= 45 * 86400 * 1000) { // more than 45 days
      const minTickWidth = 30;
      const monthSpan = d3.timeMonth.count(d3.timeMonth(minDate), d3.timeMonth(maxDate)) + 1;
      const monthInterval = Math.ceil(monthSpan / (dimensions.width / minTickWidth));

      // universal month tick
      const xAxis = (
        d3
        .axisBottom(xScale)
        .ticks(d3.timeMonth.every(monthInterval))
        .tickFormat(d3.timeFormat("%b") as any)
        .tickSize(0)
      );

      const xAxisGroup = (
        svg
        .append('g')
        .call(xAxis)
        .attr('class', 'xAxis')
        .attr("transform", "translate(0, " + (dimensions.height - 4 * padding) + ")")
      );

      xAxisGroup.selectAll('.tick text').attr('dy', '1.3em');
      xAxisGroup.select(".tick:last-child").remove();

      // show year tick
      const xYearTick = (date: Date) => ( // check first tick or new year
        (
          date === d3.select(svg.selectAll('.xAxis g').nodes()[0]).datum() ||
          d3.timeMonth.offset(date, -monthInterval).getFullYear() !== date.getFullYear()
        ) ? `${d3.timeFormat("%Y")(date)}`: ''
      );

      svg
      .selectAll('.xAxis g')
      .append('text')
      .attr('x', 0)
      .attr('y', '2.8em')
      .style('fill', 'black')
      .text(d => xYearTick(d as Date));

    } else { // short interval (less than 45 days)
      const minTickWidth = 75;
      const daySpan = d3.timeDay.count(minDate, maxDate) + 1;
      const dayInterval = Math.ceil(daySpan / (dimensions.width / minTickWidth));

      // date ticks
      const xAxis = (
        d3
        .axisBottom(xScale)
        .ticks(d3.timeDay.every(dayInterval))
        .tickFormat(d3.timeFormat('%m/%d') as any)
        .tickSize(0)
      );

      const xAxisGroup = (
        svg
        .append('g')
        .call(xAxis)
        .attr('class', 'xAxis')
        .attr("transform", "translate(0, " + (dimensions.height - 4 * padding) + ")")
      );

      xAxisGroup.selectAll('.tick text').attr('dy', '1.3em');
      xAxisGroup.select(".tick:last-child").remove();

      // show year tick
      const xYearTick = (date: Date) => ( // check first tick or new year
        (
          date === d3.select(svg.selectAll('.xAxis g').nodes()[0]).datum() ||
          d3.timeDay.offset(date, -dayInterval).getFullYear() !== date.getFullYear()
        ) ? `${d3.timeFormat("%Y")(date)}`: ''
      );

      svg
      .selectAll('.xAxis g')
      .append('text')
      .attr('x', 0)
      .attr('y', '2.8em')
      .style('fill', 'black')
      .text(d => xYearTick(d as Date));
    }

    // define y-Axis
    const yAxis = (
      d3
      .axisLeft(yScale)
      .scale(yScale)
      .tickValues(yTickValues)
      .tickFormat(d3.formatPrefix(".0", 1e6))
      .tickSize(0)
    );

    const yAxisGroup = (
      svg
      .append('g')
      .call(yAxis)
      .attr('class', 'yAxis')
      .attr("transform", "translate(" + 10 * padding + ", 0)")
    );

    yAxisGroup.selectAll('.tick text').attr('dx', '-0.4em');

    // axis labels
    svg
    .append('text')
    .attr('class', styles.xtitle)
    .attr('x', dimensions.width / 2)
    .attr('y', dimensions.height)
    .attr('dy', '2em')
    .text('Time');

    svg
    .append('text')
    .attr('class', styles.ytitle)
    .attr('transform', 'rotate(-90)')
    .attr('y', padding / 2 + 2 * padding)
    .attr('x', -dimensions.height / 2)
    .text(`Mean Viral Gene Copies / Liter${isBuildingData ? '' : ' (Campus-wide)'}`);

    svg
    .append('text')
    .attr('class', styles.hoverMessage)
    .attr('y', yScale(yMax))
    .attr('x', xScale(maxDate))
    .text('Hover on graph to see daily viral loads');

    // add grid
    svg
    .selectAll("g.yAxis .tick")
    .append("line")
    .attr("class", styles.gridLine)
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", xScale(maxDate) - xScale(minDate))
    .attr("y2", 0);

    yAxisGroup.select(`.tick line.${styles.gridLine}`).remove();

    // add axis arrows
    const arrowHeight = 8;
    const arrowHalfWidth = arrowHeight / Math.sqrt(3);
    svg
    .append('polygon')
    .attr('class', 'yAxisArrow')
    .attr('points', `
      ${xScale(minDate)} ${yScale(yMax)}, 
      ${xScale(minDate) - arrowHalfWidth} ${yScale(yMax) + arrowHeight}, 
      ${xScale(minDate) + arrowHalfWidth} ${yScale(yMax) + arrowHeight}
    `);

    svg
    .append('polygon')
    .attr('class', 'xAxisArrow')
    .attr('points', `
      ${dimensions?.width! - 2 * padding} ${yScale(0)}, 
      ${dimensions?.width! - 2 * padding - arrowHeight} ${yScale(0) + arrowHalfWidth}, 
      ${dimensions?.width! - 2 * padding - arrowHeight} ${yScale(0) - arrowHalfWidth}
    `);

    // draw data points
    svg
    .selectAll(".viralPoint")
    .data(viralLoadData)
    .enter()
    .append("circle")
    .attr("class", "viralPoint")
    .attr('cx', (d) => xScale(d.date))
    .attr('cy', (d) => d.viralLoad <= maxDisplay ? yScale(d.viralLoad) : yScale(0))
    .attr('r', 3)
    .attr("fill", (d) => d.viralLoad <= maxDisplay ? "#d53e39" : "rgba(0, 0, 0, 0)");

    // tooltip handler
    const handleMouseMove = (e: MouseEvent) => {
      // Find nearest x-axis value based on the mouse position
      const [mouseX, _] = d3.pointer(e);
      const xValue = xScale.invert(mouseX);
      const bisectDate = d3.bisector((d: any) => d.date).left;
      const index = bisectDate(viralLoadData, xValue, 1);
      const d0 = viralLoadData[index - 1];
      const d1 = viralLoadData[index];
      const closestData = xValue.valueOf() - d0.date.valueOf() > d1.date.valueOf() - xValue.valueOf() ? d1 : d0;

      setTooltipData({
        data: closestData,
        position: xScale(closestData.date)
      });
    }
    
    // draw overlay layer for interaction
    svg
    .append('rect')
    .attr('class', styles.tooltipOverlay)
    .attr('x', xScale(minDate))
    .attr('y', yScale(currentMax))
    .attr('width', xScale(maxDate) - xScale(minDate))
    .attr('height', yScale(0) - yScale(currentMax))
    .on('mouseover', handleMouseMove)
    .on('mousemove', handleMouseMove)
    .on("mouseout", () => setTooltipData(undefined));
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viralLoadData, dimensions, isBuildingData]);

  return (
    <div>
      <div ref={wrapperRef} style={{ 
        position: "relative",
        marginBottom: "2rem",
        marginTop: "0.5rem",
        marginLeft: "0.2rem"
      }}>
        <svg ref={svgRef} className={styles.viralLoadChart}></svg>
        {
          viralLoadData.length > 0 && !!tooltipData && (
            <ViralLoadTooltip
              data={tooltipData!.data}
              position={tooltipData!.position}
              xScale={xScale}
              rectTop={yScale(currentMax)}
              rectHeight={yScale(0) - yScale(currentMax)}
              tooltipTop={yScale(yMax)}
              rightLimit={dimensions?.width! - 2 * padding}
            />
          )
        }
        {
          viralLoadData.length === 0 && (
            <div className={styles.noData}>
              Data Unavailable for Selected Building
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ViralLoadChart;
