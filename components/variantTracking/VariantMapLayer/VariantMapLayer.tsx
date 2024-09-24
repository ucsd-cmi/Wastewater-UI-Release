import config from "@arcgis/core/config";
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Map from "@arcgis/core/Map";
import React, { FunctionComponent, useEffect, useRef } from "react";
import styles from "./VariantMapLayer.module.scss";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import * as watchUtils from "@arcgis/core/core/watchUtils";
import { campusLabels, caanGeography, VariantData, ManholeMapping } from "@constants";
import { arcgisVariantMap } from "@apis";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import TextSymbol from "@arcgis/core/symbols/TextSymbol";
import Point from "@arcgis/core/geometry/Point";
import { lineageColorMap } from "@apis/variants";

config.apiKey =
  "REDACTED";

var view: __esri.MapView;

const variantLayer = new GraphicsLayer({
  visible: true
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


interface VariantMapLayerProps {
  displayDate: Date;
  variantData: VariantData;
  manholeMapping: ManholeMapping;
  colorMap: lineageColorMap;
}

const VariantMapLayer: FunctionComponent<VariantMapLayerProps> = ({
  displayDate,
  variantData,
  manholeMapping,
  colorMap
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const simpleFillSymbol = new SimpleFillSymbol({
    color: "#a9a9a9",
    outline: {
      width: "0px"
    },
    style: "solid"
  })

  const simpleRenderer = new SimpleRenderer({
    symbol: simpleFillSymbol
  })

  const currentLayer = useRef<FeatureLayer>(
    new FeatureLayer({
      portalItem: { id: arcgisVariantMap },
      outFields: ["*"],
      renderer: simpleRenderer
    })
  );

  useEffect(() => {
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
    map.add(variantLayer);

    view.ui.add(zoom, "bottom-right");

    watchUtils.whenTrue(view, "ready", function () {
      const target = document.getElementsByClassName(
        "esri-ui-manual-container"
      )[0];
      const configOps = { attributes: false, childList: true, subtree: true };
    });
  };
  setMapView();
}, []);

  useEffect(() => {
    // Clear the variant display layer first
    variantLayer.removeAll();

    var tmpDate = displayDate.toLocaleDateString();
    if(variantData.has(tmpDate)) {
        const dateData = variantData.get(tmpDate);
        for (const[key, manholeData] of dateData!) {
            const manhole = key;
            const variant = manholeData[0];
            const lineageLabel = variant.lineage + " (" + variant.variant + ")";
            const lineageColor = colorMap[lineageLabel].labelColor;
            const iconURL = "/api/varianticon/" + lineageColor.substring(1) + ".ts"

            const variantIcon = new PictureMarkerSymbol({
                url: iconURL,
                width: "56px",
                height: "38px"
            });
            const variantLabelV = new TextSymbol({
                lineWidth: "56px",
                color: lineageColor,
                text: variant.variant,
                font: {
                  size: 6,
                  family: "Montserrat",
                },
                yoffset: "12px",
                verticalAlignment: "middle"
            });
            const variantLabelL = new TextSymbol({
                lineWidth: "56px",
                color: lineageColor,
                text: variant.lineage,
                font: {
                  size: 6,
                  family: "Montserrat",
                },
                yoffset: "4px",
                verticalAlignment: "middle"
            });
    
            if(manhole in manholeMapping) {
                manholeMapping[manhole].forEach((caan) => {
                    if(caan in caanGeography) {
                        const point = new Point({
                            x: caanGeography[caan].x,
                            y: caanGeography[caan].y
                        });
                        const variantPoint = new Graphic({
                            geometry: point,
                            symbol: variantIcon,
                            attributes: {
                            arrayKey: caan,
                            label: "Test"
                            }
                        });
                        const variantDetailLabelV = new Graphic({
                            geometry: point,
                            symbol: variantLabelV,
                        });
                        const variantDetailLabelL = new Graphic({
                            geometry: point,
                            symbol: variantLabelL,
                        });
                        variantLayer.add(variantPoint);
                        variantLayer.add(variantDetailLabelV);
                        variantLayer.add(variantDetailLabelL);
                    }
                });
            } else {
                // We don't have any CAANs for the manhole, move on
            }
        }      
    }
  }, [displayDate]);

  return (
    <>
      <div
        id="viewDiv"
        className={styles.containerDiv}
        ref={containerRef}
      ></div>
    </>
  );
};

export default VariantMapLayer;
