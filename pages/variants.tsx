import {
  getLatestUpdateDate,
  getLineageColorMap,
  getVariantData,
  getManholeMapping,
  getBuildingNames
} from "@apis";
import { Header } from "@components";
import type { InferGetStaticPropsType } from "next";
import Script from "next/script";
import React, { useCallback, useState } from "react";
import { Row } from "react-bootstrap";
import useBreakpoints from "use-window-width-breakpoints";
import styles from "./Home.module.scss";
import cn from "classnames";
import { HeaderLogo } from "@images";
import VariantTable from "@components/variantTracking/VariantTable";
import VariantMapLayer from "@components/variantTracking/VariantMapLayer";

export async function getStaticProps() {
  const latestAvailableDate = await getLatestUpdateDate();

  const {
    variantData,
    latestAvailableVariantDate,
    earliestAvailableVariantDate,
    lineageFirstSeen
  } = await getVariantData(latestAvailableDate);

  const lineageColorMap = await getLineageColorMap();

  var {
    manholeMapping,
    buildingMapping
  } = await getManholeMapping();

  const {
    buildingToCaan,
    allBuildings
  } = await getBuildingNames();

  return {
    props: {
      variantData,
      latestAvailableVariantDate,
      earliestAvailableVariantDate,
      lineageColorMap,
      lineageFirstSeen,
      manholeMapping,
      buildingMapping,
      buildingToCaan,
      allBuildings
    },
    revalidate: 60 * 60 * 8,
  };
}

const Variants = ({
  variantData,
  latestAvailableVariantDate,
  earliestAvailableVariantDate,
  lineageColorMap,
  lineageFirstSeen,
  manholeMapping,
  buildingMapping,
  buildingToCaan,
  allBuildings
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const breakpoint = useBreakpoints();
  const [displayFAQs, setDisplayFAQs] = useState<boolean>(false);
  const faqsCallback = useCallback((toggle: boolean) => {
    setDisplayFAQs(toggle);
  }, []);
  const [currDate, setCurrDate] = useState(
    new Date(latestAvailableVariantDate!)
  );
  const currDateCallback = useCallback((currDate: Date) => {
    setCurrDate(currDate);
  }, []);

  return (
    <Row className={cn(styles.wrapper, styles.variantsSpacing)}>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="beforeInteractive"
      />
      {breakpoint.up.md && (
        <Header
          title="Variant Data"
          titlebar_img_src={HeaderLogo}
          titlebar_img_alt="Return to Learn"
          faqTrigger={faqsCallback}
        />
      )}
      {breakpoint.down.sm && (
        <Header
          title="Variant Data"
          titlebar_img_src={HeaderLogo}
          titlebar_img_alt="Return to Learn"
          faqTrigger={faqsCallback}
        />
      )}
          <VariantMapLayer
            displayDate={currDate}
            variantData={variantData}
            manholeMapping={manholeMapping}
            colorMap={lineageColorMap}
          />

      <div className={styles.trendTable}>
        {latestAvailableVariantDate && earliestAvailableVariantDate && (
          <VariantTable
            earliestAvailableDate={new Date(earliestAvailableVariantDate)}
            latestAvailableDate={new Date(latestAvailableVariantDate)}
            variantData={variantData}
            colorMap={lineageColorMap}
            lineageFirstSeen={lineageFirstSeen}
            buildingMapping={buildingMapping}
            buildingToCaan={buildingToCaan}
            allBuildings={allBuildings}
            currDate={currDate}
            currDateCallback={currDateCallback}
          />
        )}
      </div>
    </Row>
  );
};

export default Variants;
