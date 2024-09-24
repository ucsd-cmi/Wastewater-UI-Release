export type Status =
  | "detected"
  | "monitored"
  | "unavailable"
  | "paused"
  | "notMonitored"
  | "oneSample";

export const statusRank = {
  detected: 5,
  monitored: 4,
  unavailable: 3,
  paused: 2,
  notMonitored: 1,
  oneSample: 0,
};

export type StatusRankKey = keyof typeof statusRank;

type StatusMap = {
  [key: string]: Status;
};

export const backendStatusConvertMap: StatusMap = {
  "Currently Monitored + Sampled + Detected": "detected",
  "Currently Monitored + Sampled + Not Detected": "monitored",
  "Currently Monitored + Not Sampled": "unavailable",
  "Not Currently Monitored": "notMonitored",
};

export type BackendStatusConvertMapKey = keyof typeof backendStatusConvertMap;

export interface WastewaterTrend {
  [key: string]: Status;
}

export interface ExposureTrend {
  [key: string]: string;
}

export interface SingleBuilding {
  CAAN: string;
  WastewaterData: WastewaterTrend;
  ExposureData: ExposureTrend;
}

export class BuildingData extends Map<string, SingleBuilding> {}

export interface FAQGroup {
  displayClose: boolean;
  questions: Array<SingleFAQ>;
}

// we need the hideOnMobile parameter for one question
// it's a bit silly, but it's the quickest solution
export interface SingleFAQ {
  question: string;
  answer: string;
  hideOnMobile?: boolean;
}

export class FAQData extends Map<string, FAQGroup> {}

export interface SamplerBreakdown {
  currentDateResidential: string;
  currentDateNonResidential: string;
  currentDateTotal: string;
  sevenDayResidential: string;
  sevenDayNonResidential: string;
  sevenDayTotal: string;
}

export interface ViralFraction {
  lineage: string;
  variant: string;
  fraction: number;
}

export interface SampleStat {
  positiveCounts: number;
  totalCounts: number;
}

export class ManholeData extends Map<string, Array<ViralFraction>> {}

export class VariantData extends Map<string, ManholeData> {}

export class SampleStats extends Map<string, SampleStat> {}

export class ViralFractionPlot extends Map<string, number> {}

export interface VariantPlotData {
  date: Date;
  fractions: ViralFractionPlot;
}

export interface LineageFirstSeen {
  [key: string]: Date;
}

export interface ManholeMapping {
  [key: string]: Array<string>;
}

export interface BuildingMapping {
  [key: string]: Array<string>;
}

export interface BuildingNames {
  [key: string]: string;
}

export interface GeoPoint {
  x: number;
  y: number;
}

export interface CAANGeography {
  [key: string]: GeoPoint;
}

export class ViralLoadManholeData extends Map<string, number> {};

export class ViralLoadData extends Map<string, ViralLoadManholeData> {};

export interface ViralLoadPlotData {
  date: Date;
  viralLoad: number;
}