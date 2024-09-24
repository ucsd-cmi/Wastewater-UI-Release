import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import useResizeObserver from "@hooks/useResizeObserver";
import LineageBarChart, {
  VariantCode,
} from "@components/variantTracking/LineageBarChart";
import useInterval from "@hooks/useInterval";
import TimeLine from "@components/variantTracking/TimeLine";
import StackedAreaChart from "@components/variantTracking/StackedAreaChart";
import VariantSearchBox from "../VariantSearchBox";
import styles from "./VariantTable.module.scss";
import { PlayButton, StopButton } from "@icons";
import {
  BuildingMapping,
  BuildingNames,
  LineageFirstSeen,
  VariantData,
  VariantPlotData,
} from "@constants";
import moment from "moment";
import {
  getVariantCountMap,
  computeBuildingData,
  computeCampusData,
} from "@utils/variant";
import { lineageColorMap } from "@apis/variants";
import * as d3 from "d3";
import cn from "classnames";

interface TVariantTableProps {
  earliestAvailableDate: Date;
  latestAvailableDate: Date;
  variantData: VariantData;
  colorMap: lineageColorMap;
  lineageFirstSeen: LineageFirstSeen;
  buildingMapping: BuildingMapping;
  buildingToCaan: BuildingNames;
  allBuildings: string[];
  currDate: Date;
  currDateCallback: (newDate: Date) => void;
}

const getDataByDate = (date: Date, data: VariantData) => {
  return data.get(moment(date).format("M/D/YYYY"));
};

const VariantTable: FunctionComponent<TVariantTableProps> = ({
  earliestAvailableDate,
  latestAvailableDate,
  variantData,
  colorMap,
  lineageFirstSeen,
  buildingMapping,
  buildingToCaan,
  allBuildings,
  currDate,
  currDateCallback,
}) => {
  const searchRef = useRef(null);
  const searchDim = useResizeObserver(searchRef);
  const [startDate, setStartDate] = useState(
    new Date(
      earliestAvailableDate.getFullYear(),
      earliestAvailableDate.getMonth(),
      earliestAvailableDate.getDate()
    )
  );
  const [endDate, setEndDate] = useState(
    new Date(
      latestAvailableDate.getFullYear(),
      latestAvailableDate.getMonth(),
      latestAvailableDate.getDate()
    )
  );
  const [error, setError] = useState(false);
  const [start, setStart] = useState(false);
  const [ended, setEnded] = useState(false);
  const [validRange, setvalidRange] = useState(false);
  const [data, setData] = useState(
    getVariantCountMap(
      colorMap,
      getDataByDate(latestAvailableDate, variantData)
    )
  );
  const [selectedBuilding, setSelectedBuilding] = useState<string>("");

  const updateBuilding = useCallback((selected: any) => {
    setSelectedBuilding(selected.item.value);
  }, []);

  const clearBuilding = useCallback(() => {
    setSelectedBuilding("");
  }, []);

  const isBuilding = !!(
    selectedBuilding && buildingToCaan.hasOwnProperty(selectedBuilding)
  );

  const changeOnEmpty = useCallback((value: string) => {
    if (value.length === 0) setSelectedBuilding("");
  }, []);

  const handlePlayButton = () => {
    // If the previous loop ends and user clicks play, replay the previous loop.
    if (+currDate === +endDate) {
      currDateCallback(startDate);
    }
    setStart(!start);
  };

  const updateStartDate = useCallback((newDate: Date) => {
    currDateCallback(newDate);
    setvalidRange(false);
    setEnded(false);
  }, []);

  const updateEndDate = useCallback((newDate: Date) => {
    setEndDate(newDate);
    setEnded(false);
  }, []);

  const getVariantPlotData = useCallback(
    (
      startDate: Date | undefined,
      endDate: Date | undefined,
      building: string
    ) => {
      // select building
      const locationData =
        building && buildingToCaan.hasOwnProperty(building)
          ? computeBuildingData(
              variantData,
              buildingToCaan[building],
              buildingMapping
            )
          : computeCampusData(variantData);

      // select dates
      const bisect = d3.bisector((d: VariantPlotData) => d.date);
      const startIndex = startDate
        ? bisect.left(locationData, startDate!)
        : undefined;
      const endIndex = endDate
        ? bisect.right(locationData, endDate!)
        : undefined;

      return locationData.slice(startIndex, endIndex);
    },
    [variantData, buildingMapping, buildingToCaan]
  );

  const stackedChartData = useMemo(
    () => getVariantPlotData(startDate, endDate, selectedBuilding),
    [startDate, endDate, selectedBuilding, getVariantPlotData]
  );

  useEffect(() => {
    const data = getVariantCountMap(
      colorMap,
      getDataByDate(currDate, variantData)
    );
    setData(data);
    if (data.length) {
      setvalidRange(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currDate, variantData]);

  useInterval(() => {
    if (start) {
      if (+startDate > +endDate) {
        setError(true);
        setStart(false);
        return;
      } else {
        setError(false);
      }
      // If any invalid date is set, disable play button.
      if (+currDate > +latestAvailableDate || +endDate > +latestAvailableDate) {
        alert("Please set a valid date range.");
        setStart(false);
        return;
      }

      // When the curr Date is smaller than end Date, keeps looping.
      if (+currDate < +endDate) {
        // Searches for the next available date.
        let reachAvailableDate = false;
        let targetDate = new Date(
          currDate.getFullYear(),
          currDate.getMonth(),
          currDate.getDate() + 1
        );
        while (!reachAvailableDate) {
          let data = getVariantCountMap(
            colorMap,
            getDataByDate(targetDate, variantData)
          );

          if (data.length === 0) {
            targetDate = new Date(
              targetDate.getFullYear(),
              targetDate.getMonth(),
              targetDate.getDate() + 1
            );
          } else {
            reachAvailableDate = true;
            if (+targetDate <= +endDate) {
              currDateCallback(targetDate);
            } else {
              // finishes the playback if there is no available data for the end date.
              currDateCallback(endDate);
              // when the next target date is out of selection range, stops.
              setStart(false);
              setEnded(true);
            }
          }
        }
      } else {
        setStart(false);
        setEnded(true);
      }
    }
  }, 500);

  return (
    <React.Fragment>
      <TimeLine
        startDate={startDate}
        setStartDate={setStartDate}
        earliestDate={earliestAvailableDate}
        currDate={currDate}
        endDate={endDate}
        onStartDateChange={updateStartDate}
        onEndDateChange={updateEndDate}
      />
      <div className={styles.wrapper}>
        <div className={styles.playButton}>
          <button onClick={handlePlayButton}>
            {start ? <StopButton /> : <PlayButton />}
          </button>
        </div>
        <div className={styles.BarChart}>
          {/* <p className={styles.hintText}>Click on progress bar(s) to highlight the samples that contains that lineage in the map. Click again to unselect.</p> */}
          <div className ={cn(styles.legendWrapper, styles.defaultText)}>
            <div className="me-3">{VariantCode["Omicron"]} Omicron</div>
            <div className="me-3">{VariantCode["Delta"]} Delta</div>
            <div className="me-3">{VariantCode["Alpha"]} Alpha</div>
            <div className="me-3">{VariantCode["Other"]} Other</div>
            <div className={styles.hintText}># of positive samplers across the campus</div>
          </div>
          {error && (
            <div className={styles.errorText}>
              Date range is invalid. End date must be after Start date. Please
              adjust date selection.
            </div>
          )}
          {ended && !validRange && "No Data Available for this range."}
          {data.length ? (
            <LineageBarChart data={data} />
          ) : (
            <div className={styles.defaultText}>
              No Data Available at this date.
            </div>
          )}
        </div>
      </div>

      <div className={styles.searchWrapper}>
        <div className={styles.searchBackground} ref={searchRef}></div>
        <StackedAreaChart
          variantData={stackedChartData}
          colorMap={colorMap}
          lineageFirstSeen={lineageFirstSeen}
          isBuildingData={isBuilding}
          currDate={currDate}
          start={start}
        />
        <VariantSearchBox
          placeholder={
            searchDim?.width! < 622
              ? "Search building (Default: Campus)"
              : "Search a building (Default shows campus-wide data)"
          }
          data={allBuildings}
          onSelect={updateBuilding}
          onChange={changeOnEmpty}
          clearInput={clearBuilding}
          resetMessage={"Reset to campus-wide data"}
          showResetButton={isBuilding}
        />
      </div>
    </React.Fragment>
  );
};

export default VariantTable;
