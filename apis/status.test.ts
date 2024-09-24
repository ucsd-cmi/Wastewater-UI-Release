import { sortBuildingNamesByStatus, sortTrendMatrixByStatus } from "./status";
import { Status } from "@basics";
import { FixedLengthArray } from "@utils";

// Assumes all entries in the input will be either valid or undefined.
const statuses: Status[] = [
  "monitored",
  "detected",
  "unavailable",
  "paused",
  "notMonitored",
  "monitored",
  "oneSample",
  "paused",
  "detected",
];

// Assumes names here are unique.
let names = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

test("test sortBuildingNamesByStatus", () => {
  const expectedNamesWithIndex = [
    { name: "B", index: 1 },
    { name: "I", index: 8 },
    { name: "A", index: 0 },
    { name: "F", index: 5 },
    { name: "C", index: 2 },
    { name: "D", index: 3 },
    { name: "H", index: 7 },
    { name: "E", index: 4 },
    { name: "G", index: 6 },
  ];
  expect(sortBuildingNamesByStatus(names, statuses)).toStrictEqual(
    expectedNamesWithIndex
  );
});

test("test sortTrendMatrixByStatus", () => {
  const initialTrendMatrix: FixedLengthArray<Status, 7>[] = [
    [
      "oneSample",
      "monitored",
      "detected",
      "unavailable",
      "paused",
      "notMonitored",
      "monitored",
    ],
    [
      "monitored",
      "detected",
      "unavailable",
      "paused",
      "notMonitored",
      "monitored",
      "oneSample",
    ],
    [
      "detected",
      "monitored",
      "notMonitored",
      "monitored",
      "oneSample",
      "unavailable",
      "paused",
    ],
    [
      "unavailable",
      "detected",
      "monitored",
      "notMonitored",
      "monitored",
      "oneSample",
      "paused",
    ],
    [
      "unavailable",
      "detected",
      "monitored",
      "notMonitored",
      "monitored",
      "oneSample",
      "paused",
    ],
    [
      "notMonitored",
      "detected",
      "monitored",
      "notMonitored",
      "monitored",
      "oneSample",
      "paused",
    ],
    [
      "paused",
      "notMonitored",
      "detected",
      "monitored",
      "notMonitored",
      "monitored",
      "oneSample",
    ],
    [
      "detected",
      "monitored",
      "notMonitored",
      "monitored",
      "oneSample",
      "unavailable",
      "paused",
    ],
  ];
  names = ["D", "E", "I", "B", "B", "G", "H", "F"];
  const trendMatrixWithIndex = sortTrendMatrixByStatus(
    names,
    initialTrendMatrix
  );
  const sortedNamesIndexes = trendMatrixWithIndex.map((row) => row.index);
  const expectedsortedNamesIndexes = [7, 2, 1, 3, 4, 6, 5, 0];
  expect(sortedNamesIndexes).toEqual(expectedsortedNamesIndexes);
});

// Needs below to make this test file a module.
export {};
