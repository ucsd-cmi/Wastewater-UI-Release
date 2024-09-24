import {
  getBuildingData,
  getLatestUpdateDate,
  getResidentialStats,
  getViralLoadData,
  getManholeMapping,
  getBuildingNames
} from "@apis";
import {  
  computeBuildingData,
  computeCampusData
} from "@utils/viral";
import { HeaderNotes, ExposureToggle, ResidentialStatistics } from "@basics";
import { Header, MapLayer, SearchBox, TrendTable, FAQs } from "@components";
import ViralLoadChart from "@components/ViralLoad/ViralLoadChart";
import { daysOfWeek, SamplerBreakdown } from "@constants";
import cn from "classnames";
import moment from "moment";
import type { InferGetStaticPropsType } from "next";
import Script from "next/script";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import { Row } from "react-bootstrap";
import useBreakpoints from "use-window-width-breakpoints";
import styles from "./Home.module.scss";
import { HeaderLogo } from "@images";

export async function getStaticProps() {
  const latestAvailableDate = await getLatestUpdateDate();

  var endDate = new Date(latestAvailableDate);
  var endDateString = moment(endDate).format("M/D/YYYY");
  var startDate = endDate.setDate(endDate.getDate() - 7);
  var startDateString = moment(startDate).format("M/D/YYYY");

  const buildingData = await getBuildingData(startDateString, endDateString);

  // prepare date for get status api call
  const offsetDate = new Date(latestAvailableDate);
  offsetDate.setDate(offsetDate.getDate() + 1);
  // we need offset by one to get the right data from ArcGIS
  const offsetDateString = moment(offsetDate).format("M/D/YYYY");

  var samplerBreakdown: SamplerBreakdown = await getResidentialStats(
    latestAvailableDate
  );

  const viralLoadData = await getViralLoadData();
  const { buildingMapping } = await getManholeMapping();
  const { buildingToCaan } = await getBuildingNames();

  return {
    props: {
      latestAvailableDate,
      offsetDateString,
      buildingData,
      samplerBreakdown,
      viralLoadData,
      buildingToCaan,
      buildingMapping
    },
    revalidate: 60 * 60 * 8,
  };
}

const Home = ({
  latestAvailableDate,
  offsetDateString,
  buildingData,
  samplerBreakdown,
  viralLoadData,
  buildingToCaan,
  buildingMapping
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const breakpoint = useBreakpoints();
  const [dates, setDates] = useState<string[]>([]);
  const [currSelected, setCurrSelected] = useState<string>("");
  const [displayExposure, setDisplayExposure] = useState<boolean>(true);
  const [displayVendingMachines, setDisplayVendingMachines] = useState<boolean>(
    false
  );
  const [displayFAQs, setDisplayFAQs] = useState<boolean>(false);
  const selectCallBack = useCallback((selected: string) => {
    setCurrSelected(selected);
  }, []);
  const exposureCallback = useCallback((toggle: boolean) => {
    setDisplayExposure(toggle);
  }, []);
  const vendingMachinesCallback = useCallback((toggle: boolean) => {
    setDisplayVendingMachines(toggle);
  }, []);
  const faqsCallback = useCallback((toggle: boolean) => {
    setDisplayFAQs(toggle);
  }, []);
  // TODO: Solve timezone problem

  function handleFAQClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const eventTarget = e.target as Element;
    if (
      typeof eventTarget.id !== undefined &&
      eventTarget.id == "faq_container"
    ) {
      setDisplayFAQs(false);
    }
  }

  useEffect(() => {
    const currentDate = new Date(latestAvailableDate);
    const dates = daysOfWeek.map((_, i) => {
      var currentDateString;
      if (i) {
        currentDate.setDate(currentDate.getDate() - 1);
        currentDateString = moment(currentDate).format("M/D");
      } else {
        currentDate.setDate(currentDate.getDate());
        currentDateString = moment(currentDate).format("M/D");
      }
      return currentDateString;
    });
    setDates(dates);
  }, [latestAvailableDate]);

  const getViralLoadData = useCallback((building: string) => (
      (building && buildingToCaan.hasOwnProperty(building)) ?
      computeBuildingData(viralLoadData, buildingToCaan[building], buildingMapping) :
      computeCampusData(viralLoadData)
  ), [viralLoadData, buildingMapping, buildingToCaan]);

  const viralChartData = useMemo(
    () => getViralLoadData(currSelected),
    [currSelected, getViralLoadData]
  )

  const isBuilding = !!(currSelected && buildingToCaan.hasOwnProperty(currSelected));

  return (
    <Row className={styles.wrapper}>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="beforeInteractive"
      />
      {breakpoint.up.md && (
        <Header
          title="Wastewater Monitoring"
          titlebar_img_src={HeaderLogo}
          titlebar_img_alt="Return to Learn"
          faqTrigger={faqsCallback}
        />
      )}
      {breakpoint.down.sm && (
        <Header
          title="Wastewater"
          titlebar_img_src={HeaderLogo}
          titlebar_img_alt="Return to Learn"
          faqTrigger={faqsCallback}
        />
      )}
      <div className={styles.leftCol}>
        {dates.length ? (
          <MapLayer
            onClick={selectCallBack}
            currSelected={currSelected}
            latestAvailableDate={offsetDateString}
            dates={dates}
            displayExposure={displayExposure}
            displayVendingMachines={displayVendingMachines}
            buildingData={buildingData}
          />
        ) : (
          <div>Loading.....</div>
        )}
      </div>

      <div
        className={cn(
          "d-flex flex-column align-items-lg-start align-items-center gx-0",
          styles.rightCol
        )}
      >
        <ExposureToggle
          displayExposure={displayExposure}
          displayVendingMachines={displayVendingMachines}
          exposureCallback={exposureCallback}
          vendingMachinesCallback={vendingMachinesCallback}
        />
        <ResidentialStatistics
          currentDate={latestAvailableDate}
          samplerBreakdown={samplerBreakdown}
        />
        <div className={cn("d-flex", styles.searchBar)}>
          <SearchBox
            onSearch={selectCallBack}
            currSelected={currSelected}
            latestAvailableDate={offsetDateString}
          />
        </div>
        <div className={styles.viralLoadChart}>
          <div className={styles.viralLoadHeader}>Viral Load</div>
          <ViralLoadChart
            viralLoadData={viralChartData}
            isBuildingData={isBuilding}
          />
        </div>
        <div className={styles.trendTable}>
          {dates.length ? (
            <TrendTable
              daysOfWeek={daysOfWeek}
              dates={dates}
              currSelected={currSelected}
              displayExposure={displayExposure}
              buildingData={buildingData}
            />
          ) : (
            <div>Loading.....</div>
          )}
        </div>
        {breakpoint.down.sm && <HeaderNotes faqTrigger={faqsCallback} />}
      </div>
      {displayFAQs === true && (
        <div
          id="faq_container"
          className={styles.faqContainer}
          onClick={(e) => handleFAQClick(e)}
        >
          <div className={styles.faqContent}>
            <FAQs faqTrigger={faqsCallback} />
          </div>
        </div>
      )}
    </Row>
  );
};

export default Home;
