import React, { 
  useRef, 
  useEffect, 
  FunctionComponent,
  useState
} from "react";
import * as d3 from 'd3';
import savitzkyGolay from 'ml-savitzky-golay';
import { lineageColorMap } from "@apis/variants";
import {
  VariantPlotData,
  LineageFirstSeen
} from "@constants";
import { sortLineageByName } from "@utils/variant";
import StackedAreaChartLegend from "@components/variantTracking/StackedAreaChartLegend";
import StackedAreaChartTooltip from "@components/variantTracking/StackedAreaChartTooltip";
import useResizeObserver from "@hooks/useResizeObserver";
import styles from "./StackedAreaChart.module.scss";

interface StackedAreaChartProps {
  variantData: VariantPlotData[];
  colorMap: lineageColorMap;
  lineageFirstSeen: LineageFirstSeen;
  isBuildingData: boolean;
  currDate: Date;
  start: boolean;
}

const StackedAreaChart: FunctionComponent<StackedAreaChartProps> = ({ 
  variantData, 
  colorMap, 
  lineageFirstSeen,
  isBuildingData,
  currDate,
  start
}) => {
  // define containers
  const svgRef = useRef(null);
  const svg = d3.select(svgRef.current);
  const wrapperRef = useRef(null);
  const dimensions = useResizeObserver(wrapperRef);

  // compute unique variants
  const allVariants = Array.from(
    new Set(variantData.flatMap((entry) => Array.from(entry.fractions.keys())))
  ).sort((a: string, b: string) => {
    // Rule 1: "Other", "Recombinants"
    const aContainsOther = a.includes("Other") || a.includes("Recombinants");
    const bContainsOther = b.includes("Other") || b.includes("Recombinants");
    
    if (aContainsOther && !bContainsOther) return -1;
    else if (!aContainsOther && bContainsOther) return 1;
    else if (aContainsOther && bContainsOther) return sortLineageByName(a, b);
    
    // Rule 2: First day by prevalence (first day only have two Others)
    // Rule 3: By first seen date
    return lineageFirstSeen[a] > lineageFirstSeen[b] ? 1 : -1;
  });

   // constants
  const padding = 10;
  const yMax = 1.1;
  const minDate = d3.min(variantData, (d) => d.date) as Date;
  const maxDate = d3.max(variantData, (d) => d.date) as Date;
   
   // define scales
  const xScale = (
    d3
    .scaleTime()
    .domain([minDate, maxDate])
    .range([3 * padding, dimensions?.width! - 3 * padding])
  );
  xScale.domain([minDate, xScale.invert(dimensions?.width! - padding)]);

  const yScale = (
    d3.scaleLinear()
    .domain([1, 0])
    .range([padding * 2, dimensions?.height! - 2 * padding])
  );
  yScale.domain([yMax, 0]);

  // utility function
  const getCurrData = (date: Date) => {
    if (!date) return;

    const bisectDate = d3.bisector((d: VariantPlotData) => d.date).left;
    const index = bisectDate(variantData, date);
    if (variantData[index]?.date.getTime() === date.getTime()) {
      return {data: variantData[index], position: xScale(date)};
    } else {
      return;
    }
  };

  // define states
  interface TooltipData {
    data: VariantPlotData;
    position: number;
  }
  const [tooltipData, setTooltipData] = useState<TooltipData | undefined>(getCurrData(currDate));
  const currDateRef = useRef(currDate);

  // detect changes
  useEffect(() => {
    setTooltipData(getCurrData(currDate));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variantData, dimensions, colorMap, isBuildingData, currDate]);
  
  useEffect(() => {
    currDateRef.current = currDate;
  }, [currDate]);

  // plot data
  useEffect(() => {
    if (!dimensions) return;

    // clear on resize, CHECK
    svg.selectAll("*").remove();

    // handle empty input
    if (!variantData || variantData.length <= 1) {
      plotEmptyGraph(svg, padding, dimensions.height, dimensions.width);
      return;
    }

    // stack data
    const stackedData = (
      d3
      .stack()
      .keys(allVariants)
      .value((d: any, key) => d.fractions.has(key) ? d.fractions.get(key)! : 0)
      (variantData as any)
    );
    
    // smooth stacked data by Savitzky-Golay filter
    if (!isBuildingData && Math.abs(maxDate.getTime() - minDate.getTime()) >= 60 * 86400 * 1000) {
      const upperLines = stackedData.map((lineage) => savitzkyGolay(
        lineage.map((daily) => daily[1]), 1, {
          "windowSize": 21,
          "polynomial": 1,
          "derivative": 0,
          "pad": "pre",
          "padValue": "replicate",
        }
      ));
  
      stackedData.forEach((lineage, lineageIndex) => {
        lineage.forEach((item, itemIndex) => {
          item[1] = upperLines[lineageIndex][itemIndex]; // update upper line
          if (lineageIndex > 0) item[0] = upperLines[lineageIndex-1][itemIndex]; // update lower line
        })
      });
    }
    
    // tooltip handler
    const handleMouseMove = (e: MouseEvent) => {
      // Find nearest x-axis value based on the mouse position
      const [mouseX, _] = d3.pointer(e);
      const xValue = xScale.invert(mouseX);
      const bisectDate = d3.bisector((d: any) => d.date).left;
      const index = bisectDate(variantData, xValue, 1);
      const d0 = variantData[index - 1];
      const d1 = variantData[index];
      const closestData = xValue.valueOf() - d0.date.valueOf() > d1.date.valueOf() - xValue.valueOf() ? d1 : d0;

      setTooltipData({
        data: closestData,
        position: mouseX
      });
    }

    // draw stacked areas
    svg
    .selectAll(".garea")
    .data(stackedData)
    .enter()
    .append("path")
    .attr("class", styles.dataPath)
    .attr("fill", (d: any) => colorMap[d.key].labelColor)
    .attr("d", d3.area(
      (d: any, i) => xScale(d.data.date),
      (d: any) => yScale(d[0]),
      (d: any) => yScale(d[1])
    ));
    
    // draw overlay layer for interaction
    svg
    .append('rect')
    .attr('class', styles.tooltipOverlay)
    .attr('x', xScale(minDate))
    .attr('y', yScale(1))
    .attr('width', xScale(maxDate) - xScale(minDate))
    .attr('height', yScale(0) - yScale(1))
    .on('mouseover', handleMouseMove)
    .on('mousemove', handleMouseMove)
    .on("mouseout", () => setTooltipData(getCurrData(currDateRef.current)));

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
        .attr("transform", "translate(0, " + (dimensions.height - 2 * padding) + ")")
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
        .attr("transform", "translate(0, " + (dimensions.height - 2 * padding) + ")")
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
    const yAxisTickValues = [0, 0.2, 0.4, 0.6, 0.8, 1];
    const yAxisFormat = d3.format('.0%');
    const yAxis = (
      d3
      .axisLeft(yScale)
      .scale(yScale)
      .tickValues(yAxisTickValues)
      .tickFormat(yAxisFormat)
      .tickSize(0)
    );

    const yAxisGroup = (
      svg
      .append('g')
      .call(yAxis)
      .attr('class', 'yAxis')
      .attr("transform", "translate(" + 3 * padding + ", 0)")
    );

    yAxisGroup.selectAll('.tick text').attr('dx', '-0.6em');

    // axis labels
    svg
    .append('text')
    .attr('class', styles.xtitle)
    .attr('x', dimensions?.width! - 2 * padding)
    .attr('y', dimensions.height)
    .text('Time');

    svg
    .append('text')
    .attr('class', styles.ytitle)
    .attr('y', padding)
    .attr('x', xScale(minDate))
    .attr('dx', '-1.6em')
    .text(`Variants Prevalence${isBuildingData ? '' : ' (Campus-wide)'}`);

    svg
    .append('text')
    .attr('class', styles.hoverMessage)
    .attr('y', yScale(yMax))
    .attr('x', xScale(maxDate))
    .text('Hover on graph to see lineage breakdown');

    // add grid
    svg
    .selectAll("g.yAxis .tick")
    .append("line")
    .attr("class", styles.gridLine)
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", xScale(maxDate) - xScale(minDate))
    .attr("y2", 0);

    yAxisGroup.select(`.tick line.${styles.gridLine}`).remove(); // overlay with axis
    
    // fix border asthetics
    svg
    .append('line')
    .attr('class', styles.borderLine)
    .attr("x1", xScale(maxDate))
    .attr("x2", xScale(maxDate))
    .attr("y1", yScale(1))
    .attr("y2", yScale(0));

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
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variantData, dimensions, colorMap, isBuildingData]);

  return (
    <div>
      <div ref={wrapperRef} style={{ 
        position: "relative",
        marginBottom: variantData.length > 1 ? "1.5rem" : "1rem",
        marginTop: "1rem",
        marginLeft: "1rem",
        marginRight: "1rem"
      }}>
        <svg ref={svgRef} className={styles.stackedAreaChart}></svg>
        {
          variantData.length > 1 && !!tooltipData && !start && (
            <StackedAreaChartTooltip
              data={tooltipData!.data}
              position={tooltipData!.position}
              colorMap={colorMap}
              xScale={xScale}
              rectTop={yScale(1)}
              rectHeight={yScale(0) - yScale(1)}
              tooltipTop={yScale(yMax)}
              rightLimit={dimensions?.width! - 2 * padding}
              width={dimensions?.width!}
            />
          )
        }
        {
          variantData.length === 0 && (
            <div className={styles.noData}>
              Data Unavailable for Selected Building and Time Range
            </div>
          )
        }
        {
          variantData.length === 1 && (
            <div className={styles.noData}>
              We don&apos;t have sufficient data to plot the stack area chart for selected building and time range.<br/><br/>
              Please select a building or range with 1+ days of data.
            </div>
          )
        }
      </div>
      {
        variantData.length > 1 && (
          <div style={{ 
            marginBottom: "1rem",
            marginLeft: "2rem",
            marginRight: "2rem"
          }}>
            <StackedAreaChartLegend 
              allVariants={allVariants.slice().reverse()} 
              colorMap={colorMap}
            />
          </div>
        )
      }
    </div>
  );
};

const plotEmptyGraph = (
  svg: d3.Selection<null, unknown, null, undefined>,
  padding: number,
  height: number,
  width: number
) => {
  const xMax = 31;
  const yMax = 1.1;

  // define scales
  const xScale = (
    d3
    .scaleLinear()
    .domain([0, 30])
    .range([3 * padding, width - 2 * padding])
  );
  xScale.domain([0, xMax])

  const yScale = (
    d3.scaleLinear()
    .domain([1, 0])
    .range([padding * 2, height - 2 * padding])
  );
  yScale.domain([yMax, 0]);

  // draw axes
  const xAxis = (
    d3
    .axisBottom(xScale)
    .ticks(0)
    .tickSize(0)
  );

  const xAxisGroup = (
    svg
    .append('g')
    .call(xAxis)
    .attr('class', 'xAxis')
    .attr("transform", "translate(0, " + (height - 2 * padding) + ")")
  );

  const yAxisTickValues = [0, 0.2, 0.4, 0.6, 0.8, 1];
  const yAxisFormat = d3.format('.0%');
  const yAxis = (
    d3
    .axisLeft(yScale)
    .scale(yScale)
    .tickValues(yAxisTickValues)
    .tickFormat(yAxisFormat)
    .tickSize(0)
  );

  const yAxisGroup = (
    svg
    .append('g')
    .call(yAxis)
    .attr('class', 'yAxis')
    .attr("transform", "translate(" + 3 * padding + ", 0)")
  );

  yAxisGroup.selectAll('.tick text').attr('dx', '-0.6em');

  // axis labels
  svg
  .append('text')
  .attr('class', styles.xtitle)
  .attr('x', xScale(xMax))
  .attr('y', height)
  .text('Time');

  svg
  .append('text')
  .attr('class', styles.ytitle)
  .attr('y', padding)
  .attr('x', xScale(0))
  .attr('dx', '-1.6em')
  .text('Variants Prevalence');

  // axis arrows
  const arrowHeight = 8;
  const arrowHalfWidth = arrowHeight / Math.sqrt(3);
  
  svg
  .append('polygon')
  .attr('class', 'yAxisArrow')
  .attr('points', `
    ${xScale(0)} ${yScale(yMax)}, 
    ${xScale(0) - arrowHalfWidth} ${yScale(yMax) + arrowHeight}, 
    ${xScale(0) + arrowHalfWidth} ${yScale(yMax) + arrowHeight}
  `);

  svg
  .append('polygon')
  .attr('class', 'xAxisArrow')
  .attr('points', `
    ${xScale(xMax)} ${yScale(0)}, 
    ${xScale(xMax) - arrowHeight} ${yScale(0) + arrowHalfWidth}, 
    ${xScale(xMax) - arrowHeight} ${yScale(0) - arrowHalfWidth}
  `);

  // background layer
  svg
  .append("rect")
  .attr('class', styles.backgroundLayer)
  .attr("width", "100%")
  .attr("height", "100%");
}

export default StackedAreaChart;
