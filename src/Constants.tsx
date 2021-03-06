export const clearBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export const clearBoard3 = [
  [0, 0, 0, 0, 0, 7, 5, 0, 0],
  [7, 0, 0, 1, 0, 0, 0, 4, 0],
  [3, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 1, 3, 9, 0, 0, 0, 8],
  [0, 0, 0, 7, 8, 6, 0, 0, 4],
  [8, 0, 0, 0, 4, 1, 7, 0, 0],
  [0, 0, 8, 0, 0, 0, 0, 0, 9],
  [0, 5, 0, 0, 0, 3, 0, 0, 1],
  [0, 0, 4, 6, 0, 0, 0, 0, 0]
];

export const clearBoard4 = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 6, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 9, 0, 2, 0, 0],
  [0, 5, 0, 0, 0, 7, 0, 0, 0],
  [0, 0, 0, 0, 4, 5, 7, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 3, 0],
  [0, 0, 1, 0, 0, 0, 0, 6, 8],
  [0, 0, 8, 5, 0, 0, 0, 1, 0],
  [0, 9, 0, 0, 0, 0, 4, 0, 0]
];

export const clearBoard1 = [
  [0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 8, 0, 0, 0, 7, 0, 9, 0],
  [6, 0, 2, 0, 0, 0, 5, 0, 0],
  [0, 7, 0, 0, 6, 0, 0, 0, 0],
  [0, 0, 0, 9, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 4, 0],
  [0, 0, 5, 0, 0, 0, 6, 0, 3],
  [0, 9, 0, 4, 0, 0, 0, 7, 0],
  [0, 0, 6, 0, 0, 0, 0, 0, 0]
];

export const clearBoard2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 8],
  [9, 7, 8, 0, 4, 0, 1, 3, 0],
  [0, 2, 0, 0, 0, 0, 6, 4, 0],
  [0, 0, 5, 0, 2, 1, 9, 0, 0],
  [1, 3, 7, 0, 9, 0, 2, 8, 6],
  [0, 0, 6, 7, 8, 0, 5, 0, 0],
  [0, 4, 3, 0, 0, 0, 0, 2, 0],
  [0, 1, 2, 0, 5, 0, 3, 6, 9],
  [8, 0, 0, 0, 0, 0, 0, 0, 0]
];

export const selectBoard = [
  { board: 0, label: "empty" },
  { board: 1, label: "Example 1" },
  { board: 2, label: "Example 2" },
  { board: 3, label: "Example 3" },
  { board: 4, label: "Example 4" }
];

export const boardArray = [
  clearBoard,
  clearBoard1,
  clearBoard2,
  clearBoard3,
  clearBoard4
];

const oneSet = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false
};

export const rowCache = [
  oneSet,
  oneSet,
  oneSet,
  oneSet,
  oneSet,
  oneSet,
  oneSet,
  oneSet,
  oneSet
];

export const columnCache = [
  oneSet,
  oneSet,
  oneSet,
  oneSet,
  oneSet,
  oneSet,
  oneSet,
  oneSet,
  oneSet
];
