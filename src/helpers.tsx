export const validInput = (board: Array<Array<number>>): boolean => {
  const rows = checkRows(board);

  if (!rows) return false;

  const columns = checkColumns(board);

  if (!columns) return false;

  return checkAllSquares(board);
};

const checkRows = (board: Array<Array<number>>): boolean => {
  for (var y = 0; y < 9; y++) {
    var dict: { [val: number]: boolean } = {};
    for (var x = 0; x < 9; x++) {
      const num = board[y][x];

      if (dict[num] && num !== 0) {
        return false;
      }
      dict[num] = true;
    }
  }
  return true;
};

const checkColumns = (board: Array<Array<number>>): boolean => {
  for (var x = 0; x < 9; x++) {
    var dict: { [val: number]: boolean } = {};
    for (var y = 0; y < 9; y++) {
      const num = board[y][x];

      if (dict[num] && num !== 0) {
        return false;
      }
      dict[num] = true;
    }
  }
  return true;
};

const checkAllSquares = (board: Array<Array<number>>): boolean => {
  var result = true;
  for (var x = 0; x < 9; x += 3) {
    for (var y = 0; y < 9; y += 3) {
      result = result && checkASquare(board, y, x);
    }
  }
  return result;
};

const checkASquare = (
  board: Array<Array<number>>,
  row: number,
  column: number
): boolean => {
  var dict: { [val: number]: boolean } = {};
  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
      const num = board[y + row][x + column];
      if (dict[num] && num !== 0) {
        return false;
      }
      dict[num] = true;
    }
  }
  return true;
};

interface IPos {
  x: number;
  y: number;
}

export interface IGuess {
  x: number;
  y: number;
  value: number;
}

export const noZeros = (board: Array<Array<number>>) => {
  for (var x = 0; x < 9; x++) {
    for (var y = 0; y < 9; y++) {
      if (board[y][x] === 0) {
        return false;
      }
    }
  }
  return true;
};

export interface IState {
  board: Array<Array<number>>;
  guess: Array<IGuess>;
  popped: boolean;
}

export const guessNaive = (input: IState, update: (input: IState) => void) => {
  var guess = [...input.guess];
  var board = input.board;
  var popped = input.popped;

  const last = guess[guess.length - 1];

  if ((validInput(board) || guess.length === 0) && !popped) {
    for (var y = last ? last.y : 0; y < 9; y++) {
      for (var x = y === last?.y ? last.x + 1 : 0; x < 9; x++) {
        if (board[y][x] === 0) {
          guess.push({ x, y, value: 1 });
          board[y][x] = 1;
          update({
            board,
            guess,
            popped: false
          });
          return;
        }
      }
    }
  } else {
    if (++guess[guess.length - 1].value <= 9) {
      const val = guess[guess.length - 1];
      board[val.y][val.x] = val.value;
    } else {
      const val = guess.pop();

      if (val) {
        board[val.y][val.x] = 0;
        update({
          board,
          guess,
          popped: true
        });
        return;
      }
    }
  }
  update({
    board,
    guess,
    popped: false
  });
  return;
};

export const guessPrune = (
  board: number[][],
  update: (board: number[][], done: boolean) => void
): boolean => {
  const tempBoard = newBoard(board);
  //for each board calculate the array of options for each hole
  //choose the option with the least options
  const guess = calcOptions(tempBoard);
  if (guess === null) {
    console.log(tempBoard);
    update(tempBoard, true);
    return true;
  }
  for (var x = 0; x < guess.options.length; x++) {
    tempBoard[guess.y][guess.x] = guess.options[x];
    if (validInput(tempBoard)) {
      if (guessPrune(tempBoard, update)) {
        return true;
      }
    }
  }
  return false;
};

interface coord {
  x: number;
  y: number;
  options: number[];
}

const calcOptions = (board: number[][]): coord | null => {
  const holes: Array<coord> = [];
  var leastOption = null;
  for (var y = 0; y < 9; y++) {
    for (var x = 0; x < 9; x++) {
      if (board[y][x] === 0) {
        const curr = getOptions(board, x, y);
        holes.push({
          x,
          y,
          options: curr
        });
        if (leastOption) {
          const len: number = leastOption.options.length;
          leastOption =
            len < curr.length
              ? leastOption
              : {
                  x,
                  y,
                  options: curr
                };
        } else {
          leastOption = {
            x,
            y,
            options: curr
          };
        }
      }
    }
  }
  //return holes;
  return leastOption;
};

const getOptions = (board: number[][], x: number, y: number): number[] => {
  var options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var col: number = 0; col < 9; col++) {
    const value = board[y][col];
    options = options.filter(ele => {
      return ele !== value;
    });
  }

  for (var row: number = 0; row < 9; row++) {
    const value = board[row][x];
    options = options.filter(ele => {
      return ele !== value;
    });
  }
  return options;
};

export const newBoard = (board: number[][]): number[][] => {
  const newBoard = [];

  for (var i = 0; i < board.length; i++) {
    newBoard.push([...board[i]]);
  }
  return newBoard;
};
