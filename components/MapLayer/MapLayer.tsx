import config from "@arcgis/core/config";
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Map from "@arcgis/core/Map";
import CustomContent from "@arcgis/core/popup/content/CustomContent";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import {
  BuildingExposureTrend,
  BuildingWeeklyTrend,
  TimeIndicator,
} from "@basics";
import React, { FunctionComponent, useEffect, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import styles from "./MapLayer.module.scss";
import FeatureEffect from "@arcgis/core/views/layers/support/FeatureEffect";
import FeatureFilter from "@arcgis/core/views/layers/support/FeatureFilter";
import FeatureLayerView from "@arcgis/core/views/layers/FeatureLayerView";
import * as watchUtils from "@arcgis/core/core/watchUtils";
import { daysOfWeek, BuildingData, vendingMachines, campusLabels } from "@constants";
import moment from "moment";
import ReactGA from "react-ga";
import { arcgisPortalItemID } from "@apis";
import Point from "@arcgis/core/geometry/Point";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import TextSymbol from "@arcgis/core/symbols/TextSymbol";

config.apiKey =
  "REDACTED";

var layerView: FeatureLayerView;
var view: __esri.MapView;
var obsCallback: MutationCallback;

const exposureLayer = new GraphicsLayer({
  visible: false
});
const vendingMachineLayer = new GraphicsLayer({
  visible: false
});
const vendingMachineDetailLayer = new GraphicsLayer({
  visible: false
});

const getBuildingLabelLayer = (spatialReference: __esri.SpatialReference) => {
  const collegesLayer = new GraphicsLayer();

  const generatePointGraphic = (
    name: keyof typeof campusLabels,
    x: number,
    y: number
  ) => {
    const isCollege = campusLabels[name].isCollege;
    const point = {
      type: "point",
      x: x,
      y: y,
      spatialReference: spatialReference,
    };

    const pointGradGraphic = new Graphic({
      geometry: point,
      symbol: {
        color: [0, 0, 0, isCollege ? 0.6 : 1],
        type: "text",
        text: name,
        font: {
          size: 12,
          family: "Montserrat",
          weight: "bold",
        },
      } as __esri.SymbolProperties,
    });

    return pointGradGraphic;
  };

  const graphics = Object.keys(campusLabels).map((key) => {
    const coordinateKey = key as keyof typeof campusLabels;
    return generatePointGraphic(
      coordinateKey,
      campusLabels[coordinateKey].x,
      campusLabels[coordinateKey].y
    );
  });
  collegesLayer.addMany(graphics);

  return collegesLayer;
};


interface MapLayerProps {
  onClick: (selectedPlace: string) => void;
  currSelected: string;
  latestAvailableDate: string;
  dates: string[];
  displayExposure: boolean;
  displayVendingMachines: boolean;
  buildingData: BuildingData;
}

const MapLayer: FunctionComponent<MapLayerProps> = ({
  onClick,
  currSelected,
  latestAvailableDate,
  dates,
  displayExposure,
  displayVendingMachines,
  buildingData,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLayer = useRef<FeatureLayer>(
    new FeatureLayer({
      portalItem: { id: arcgisPortalItemID },
      outFields: ["*"],
    })
  );

  var exposureCAANs: string[] = [];
  for (const[key, singleBuilding] of buildingData) {
    if (Object.values(singleBuilding.ExposureData).indexOf("true") > -1) {
      exposureCAANs.push(singleBuilding.CAAN);
    }
  }

  const getPopUpContent = () => {
    const popUpContent = new CustomContent({
      outFields: ["*"],
      creator: (event) => {
        const output = document.createElement("div");
        // Has to cast event as any since the types provided mismatch the actual returned objects.
        // We know better than typescript.
        const buildingName = (event as any).graphic.attributes.NAME;
        const buildingCAAN = (event as any).graphic.attributes.CAANtext_INTERNAL;
        const buildingInfo = buildingData.get(buildingName)!;

        const staticElement = renderToStaticMarkup(
          <div className={styles.wrapper}>
            <div className={styles.timeRow}>
              {/* TODO(yizong): slice is only a temporary solution */}
              {dates.map((date, index) => (
                <TimeIndicator
                  key={index}
                  date={date.split("/")[1]}
                  dayOfWeek={
                    daysOfWeek[
                      moment(date + "/" + moment().format("YYYY")).isoWeekday()
                    ]
                  }
                />
              ))}
            </div>
            <BuildingWeeklyTrend
              key={buildingName}
              name={buildingName}
              wastewaterTrend={buildingInfo.WastewaterData}
              exposureTrend={buildingInfo.ExposureData}
              currSelected={currSelected}
              forPopUp={true}
            />
            <div className={styles.sampleNote}>
              Each sample covers a 24hr period, e.g. 11am - 11am
            </div>
            <div className={styles.exposureWrapper} id="exposurePopWrapper">
              <BuildingExposureTrend
                exposureData={buildingInfo.ExposureData}
                forPopUp={true}
              />
              <div className={styles.exposureNote}>
                Potential COVID-19 Exposure
              </div>
            </div>
          </div>
        );
        output.innerHTML = `<div>${staticElement}</div>`;
        return output;
      },
    });
    return popUpContent;
  };
  const popContent = useRef<CustomContent>(getPopUpContent());
  function setFeatureLayerFilter(expression: string, layer?: FeatureLayer) {
    if (layer) {
      layer.definitionExpression = expression;
    }
  }
  useEffect(() => {
    const template = new PopupTemplate({
      outFields: ["*"],
      title: "{Name}",
      content: [popContent.current],
    });

    currentLayer.current.popupTemplate = template;

    const map = new Map({
      basemap: "arcgis-light-gray", // Basemap layer service
    });

    const setMapView = async () => {
      const MapView = (await import("@arcgis/core/views/MapView")).default;
      const Zoom = (await import("@arcgis/core/widgets/Zoom")).default;
      view = new MapView({
        map: map,
        zoom: 14, // Zoom level
        container: "viewDiv", // Div element
        center: [-117.231842, 32.878378],
        constraints: {
          minZoom: 13,
          maxZoom: 16,
        },
        popup: {
          autoOpenEnabled: false,
          collapseEnabled: false,
          dockOptions: {
            buttonEnabled: false,
          },
          id: "wastewaterPopup",
        },
        ui: {
          components: ["attribution"],
        },
      });
      map.add(currentLayer.current);

      const zoom = new Zoom({
        view: view,
        layout: "horizontal",
      });

      const collegesLayer = getBuildingLabelLayer(view.spatialReference);
      map.add(collegesLayer);

      // build exposure layer
      const exposureIcon = new PictureMarkerSymbol({
        url: "/exposure.png",
        width: "8px",
        height: "8px"
      });

      const caanQuery = "'" + exposureCAANs.join("','") + "'";
      const dateQuery = moment(latestAvailableDate)
        .format("YYYY-MM-DD")
        .toString();
      currentLayer.current
        .queryFeatures({
          outFields: ["*"],
          returnGeometry: true,
          where: `CAANtext_INTERNAL IN (${caanQuery}) AND Date >= '${dateQuery}'`,
        })
        .then(function (results) {
          for (let i = 0; i < results.features.length; i++) {
            const exposureLocation = new Graphic({
              geometry: results.features[i].geometry.extent.center,
              symbol: exposureIcon,
            });
            exposureLayer.add(exposureLocation);
          }
        });
        map.add(exposureLayer);

      // build vending machine layer
      const vendingMachineIcon = new PictureMarkerSymbol({
        url: "/vending_machine.png",
        width: "32px",
        height: "36px"
      });

      for (var i = 0; i < vendingMachines.length; i++) {
        const point = new Point({
          x: vendingMachines[i].x,
          y: vendingMachines[i].y
        });

        const vendingMachine = new Graphic({
          geometry: point,
          symbol: vendingMachineIcon,
          attributes: {
            arrayKey: i,
            label: vendingMachines[i].label,
            isVendingMachine: true
          }
        });

        vendingMachineLayer.add(vendingMachine);
      }

      map.add(vendingMachineLayer);
      map.add(vendingMachineDetailLayer);

      view
        .whenLayerView(currentLayer.current)
        .then(function (newLayerView) {
          layerView = newLayerView;
        })
        .catch(function (error) {
          console.log(error);
        });

      view.ui.add("legendDiv", "manual");
      view.ui.add(zoom, "bottom-right");

      view.on("click", (event) => {
        vendingMachineDetailLayer.removeAll();
        view
          .hitTest(event, { include: [currentLayer.current, vendingMachineLayer] })
          .then(function (hitTestResult) {
            if (hitTestResult.results.length) {
              for (var x = 0; x < hitTestResult.results.length; x++ ) {
                if (hitTestResult.results[x].graphic.attributes.isVendingMachine) {
                  var arrayKey = hitTestResult.results[x].graphic.attributes.arrayKey;
                  const vendingMachineOpen = new PictureMarkerSymbol({
                    url: "/vending_machine_open.png",
                    width: "280px",
                    height: "36px",
                    xoffset: "124px",
                  });

                  const vendingMachineLabel = new TextSymbol({
                    lineWidth: "226px",
                    color: "#296298",
                    text: vendingMachines[arrayKey].label,
                    font: {
                      size: 8,
                      family: "Montserrat",
                    },
                    xoffset: "135px",
                    verticalAlignment: "middle"
                  });

                  const point = new Point({
                    x: vendingMachines[arrayKey].x,
                    y: vendingMachines[arrayKey].y,
                  });

                  const vendingMachineDetailBG = new Graphic({
                    geometry: point,
                    symbol: vendingMachineOpen,
                  });

                  const vendingMachineDetailLabel = new Graphic({
                    geometry: point,
                    symbol: vendingMachineLabel,
                  });

                  vendingMachineDetailLayer.add(vendingMachineDetailBG);
                  vendingMachineDetailLayer.add(vendingMachineDetailLabel);

                  var screenPoint = view.toScreen(point);
                  screenPoint.x += 124;
                  var newPoint = view.toMap(screenPoint);

                  view
                    .goTo(
                      { target: newPoint, },
                      { duration: 1000, }
                    );
                  break;
                } else {
                  onClick(hitTestResult.results[0].graphic.attributes.NAME);
                  ReactGA.event({
                    category: "Search",
                    action: "Search from clicking a building",
                    label: hitTestResult.results[0].graphic.attributes.NAME,
                  });
                }
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      });

      watchUtils.whenTrue(view.popup, "visible", function () {
        watchUtils.whenFalseOnce(view.popup, "visible", function () {
          onClick("");
        });
      });

      watchUtils.whenTrue(view, "ready", function () {
        const target = document.getElementsByClassName(
          "esri-ui-manual-container"
        )[0];
        const configOps = { attributes: false, childList: true, subtree: true };
        var observer = new MutationObserver(obsCallback);
        observer.observe(target, configOps);
      });

      await getLegend(view);
    };

    const getLegend = async (view: __esri.MapView) => {
      const legend_style = styles.legend_icon;

      const expand_div = document.createElement("div");
      expand_div.classList.add(styles.expand_container);

      const mobile_legend_div = document.createElement("div");
      mobile_legend_div.style.textAlign = "right";
      mobile_legend_div.style.background = "rgba(0,0,0,0)";
      mobile_legend_div.innerHTML =
        '<img src="/legend_img.png" style="margin: 0; padding: 0; width: 14.375rem;" />';

      const Expand = (await import("@arcgis/core/widgets/Expand")).default;
      const legendExpand = new Expand({
        view: view,
        content: mobile_legend_div,
        expandIconClass: legend_style,
        collapseIconClass: legend_style,
        container: expand_div,
      });
      view.ui.add(legendExpand, "manual");
      expand_div.style.position = "absolute";
      expand_div.style.top = "4.75rem";
      expand_div.style.right = "0rem";
    };

    setMapView();
  }, [onClick]);

  useEffect(() => {
    vendingMachineLayer.visible = displayVendingMachines;
    vendingMachineDetailLayer.visible = displayVendingMachines;
  }, [displayVendingMachines])

  useEffect(() => {
    if (displayExposure) {
      obsCallback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList") {
            var exposureDiv = document.getElementById("exposurePopWrapper");
            if (exposureDiv) {
              exposureDiv.style.display = "";
            }
          }
        }
      };

      exposureLayer.visible = true;
      var exposureDiv = document.getElementById("exposurePopWrapper");
      if (exposureDiv) {
        exposureDiv.style.display = "";
      }
    } else {
      obsCallback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList") {
            var exposureDiv = document.getElementById("exposurePopWrapper");
            if (exposureDiv) {
              exposureDiv.style.display = "none";
            }
          }
        }
      };
      exposureLayer.visible = false;
      var exposureDiv = document.getElementById("exposurePopWrapper");
      if (exposureDiv) {
        exposureDiv.style.display = "none";
      }
    }
    const target = document.getElementsByClassName(
      "esri-ui-manual-container"
    )[0];
    if (target) {
      const configOps = { attributes: false, childList: true, subtree: true };
      var observer = new MutationObserver(obsCallback);
      observer.observe(target, configOps);
    }
  }, [displayExposure]);

  useEffect(() => {
    let opts = {
      duration: 1000,
    };

    if (currSelected) {
      currentLayer.current
        .queryFeatures({
          outFields: ["*"],
          returnGeometry: true,
          where: `NAME = '${currSelected}'`,
        })
        .then(function (results) {
          view
            .goTo(
              {
                target: results.features[0].geometry.extent.center,
                zoom: 16,
              },
              opts
            )
            .then(function () {
              const featureFilter = new FeatureFilter({
                where: `NAME = '${currSelected}'`,
              });
              layerView.effect = new FeatureEffect({
                filter: featureFilter,
                excludedEffect: "opacity(30%)",
              });

              view.popup.open({
                location: view.center,
                features: [results.features[0]],
              });
            });
        });
    } else {
      if (view) {
        view.popup.close();
        view.goTo(
          {
            target: [-117.231842, 32.878378],
            zoom: 14,
          },
          opts
        );
      }
      if (layerView) {
        const featureFilter = new FeatureFilter({
          where: `1 = 1`,
        });
        layerView.effect = new FeatureEffect({
          filter: featureFilter,
          includedEffect: "opacity(100%)",
        });
      }
    }
  }, [currSelected]);

  useEffect(() => {
    let dateFilter = "";
    if (latestAvailableDate) {
      dateFilter = `Date = '${latestAvailableDate}'`;
    }

    if (dateFilter) {
      setFeatureLayerFilter(dateFilter, currentLayer.current);
    }
  }, [latestAvailableDate]);

  useEffect(() => {
    if (containerRef.current) {
      $(document).on(
        "click",
        ".esri-expand__panel .esri-widget--button",
        () => {
          const innerContainer = $(containerRef.current as HTMLElement).find(
            "div.esri-view-surface.esri-view-surface--inset-outline.esri-view-surface--touch-none"
          );
          const cornerContainer = $(containerRef.current as HTMLElement).find(
            "div.esri-ui-inner-container.esri-ui-corner-container"
          );
          cornerContainer.css("filter", "brightness(0.8)");
          innerContainer.css("filter", "brightness(0.8)");
          $("#searchContainer").css("filter", "brightness(0.8)");
        }
      );

      $(document).on("mouseup", function (e) {
        var expandContainer = $(
          ".esri-expand__container.esri-expand__container--expanded"
        );
        const innerContainer = $(containerRef.current as HTMLElement).find(
          "div.esri-view-surface.esri-view-surface--inset-outline.esri-view-surface--touch-none"
        );
        const cornerContainer = $(containerRef.current as HTMLElement).find(
          "div.esri-ui-inner-container.esri-ui-corner-container"
        );
        // container ref exists and the legend is expanded
        if (expandContainer.length > 0) {
          // Forces cast since we know better than TypeScript.
          const currentSelectedDiv = (e.target as unknown) as HTMLElement;

          // if the target of the click isn't the container nor a descendant of the container
          if (
            !expandContainer.is(currentSelectedDiv) &&
            expandContainer.has(currentSelectedDiv).length === 0
          ) {
            innerContainer.css("filter", "unset");
            cornerContainer.css("filter", "unset");
            $("#searchContainer").css("filter", "unset");
          }
        }
      });
    }
  }, []);

  return (
    <>
      <div
        id="viewDiv"
        className={styles.containerDiv}
        ref={containerRef}
      ></div>
      <div id="legendDiv" className={styles.legend_container}></div>
    </>
  );
};

export default MapLayer;
