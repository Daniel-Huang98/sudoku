export const validInput = (board: Array<Array<number>>): boolean => {
  //check rows
  //check columns
  //check diagonal
  console.log(board);
  const rows = checkRows(board);
  const columns = checkColumns(board);
  return rows && columns;
};

const checkRows = (board: Array<Array<number>>): boolean => {
  for (var y = 0; y < 9; y++) {
    var dict = {};
    for (var x = 0; x < 9; x++) {
      const num = board[y][x];
      if (dict[num]) {
        return false;
      }
      dict[num] = true;
    }
  }
  return true;
};

const checkColumns = (board: Array<Array<number>>): boolean => {
  for (var x = 0; x < 9; x++) {
    var dict = {};
    for (var y = 0; y < 9; y++) {
      const num = board[y][x];
      if (dict[num]) {
        return false;
      }
      dict[num] = true;
    }
  }
  return true;
};
