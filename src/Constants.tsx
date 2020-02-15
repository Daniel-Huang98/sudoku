export const clearBoard2 = [
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

export const clearBoard = [
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
