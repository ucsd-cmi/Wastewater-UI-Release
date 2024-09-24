export const daysOfWeek=  ["Su", "M", "Tu", "W", "Th", "F", "Sa", "Su"];

// Since our app is centered around Wastewater, there are 7 samples per week
export const daysInWastewaterTrend = 7;

// Since Exposure is based on discrete days, rather than the 11am - 11am form
// of Wastewater, a building's trend has one more value for Exposure than it
// does for Wastewater
export const daysInExposureTrend = 8;
