import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { SearchIcon } from "@icons";
import { FunctionComponent, useEffect, useRef } from "react";
import styles from "./SearchBox.module.scss";
import ReactGA from "react-ga";
import React from "react";
import { arcgisPortalItemID } from "@apis";

interface searchBoxProps {
  onSearch: (selectedPlace: string) => void;
  currSelected: string;
  latestAvailableDate: string;
}

function setFeatureLayerFilter(expression: string, layer?: FeatureLayer) {
  if (layer) {
    layer.definitionExpression = expression;
  }
}

var searchWidget: __esri.widgetsSearch;

const SearchBox: FunctionComponent<searchBoxProps> = ({
  onSearch,
  currSelected,
  latestAvailableDate,
}) => {
  const currentLayer = useRef<FeatureLayer>(
    new FeatureLayer({
      portalItem: { id: arcgisPortalItemID },
      outFields: ["*"],
    })
  );

  useEffect(() => {
    const sources = [
      {
        layer: currentLayer.current,
        outFields: ["NAME"],
        displayField: "NAME",
        suggestionTemplate: "{NAME}",
        enableSuggestions: true,
        placeholder: "Building",
        name: "Buildings",
      },
    ];
    const getSearchBar = async (
      sources?: __esri.CollectionProperties<__esri.SearchSourceProperties>
    ) => {
      const Search = (await import("@arcgis/core/widgets/Search")).default;
      searchWidget = new Search({
        sources: sources,
        includeDefaultSources: false,
        container: "searchDiv",
        locationEnabled: false,
        searchAllEnabled: false,
      });
      searchWidget.on("select-result", (event) => {
        onSearch(event.result.name);
        ReactGA.event({
          category: "Search",
          action: "Search from search bar",
          label: event.result.name,
        });
      });
      searchWidget.on("search-clear", () => onSearch(""));
    };
    getSearchBar(sources);
  }, [onSearch]);

  useEffect(() => {
    if (latestAvailableDate) {
      setFeatureLayerFilter(
        `Date = '${latestAvailableDate}'`,
        currentLayer.current
      );
    }
  }, [latestAvailableDate]);

  useEffect(() => {
    if (searchWidget) {
      searchWidget.searchTerm = currSelected;
    }
  }, [currSelected]);

  return (
    <div className={styles.searchContainer} id="searchContainer">
      <div className={styles.iconContainer}>
        <SearchIcon className={styles.searchIcon} />
      </div>
      <div id="searchDiv" className={styles.searchBox} />
    </div>
  );
};

export default SearchBox;
