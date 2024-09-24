import axios from "axios";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const arcgisPortalItemID = "REDACTED";
export const arcgisVariantMap = "REDACTED";

const traceResultsEndpoint =
  "http://REDACTED/2015-03-31/functions/function/invocations";
const requestHeaders = {
  "content-type": "application/json",
};

export const backendAPI = axios.create({
  baseURL: traceResultsEndpoint,
  headers: requestHeaders,
});

// altered because the sampler breakdown was throwing a timeout error
backendAPI.defaults.timeout = 25000;

export const layerInfoAPI = axios.create({
  baseURL: "http://REDACTED",
  headers: requestHeaders,
});

layerInfoAPI.defaults.timeout = 2500;

export const exposureAPI = axios.create({
  baseURL: "http://REDACTED",
  headers: requestHeaders,
});

export const variantAPI = new ApolloClient({
  uri: "http://REDACTED", // TODO: set this to ENV var when the feature is ready.
  cache: new InMemoryCache(),
});
