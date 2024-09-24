import "../styles/globals.css";
import "../assets/scss/global/index.scss";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import ReactGA from "react-ga";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const tagMgtArgs = {
      gtmId: "REDACTED",
    };
    TagManager.initialize(tagMgtArgs);
    ReactGA.initialize("REDACTED");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
