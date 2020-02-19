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

export const guess = (input: IState, update: (input: IState) => void) => {
  var guess = [...input.guess];
  var board = input.board;
  var popped = input.popped;

  const last = guess[guess.length - 1];
  //console.log(last);
  //console.log(board);

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
      //console.log(guess);
      const val = guess.pop();
      if (val) {
        board[val.y][val.x] = 0;
        //console.log(guess);
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

export const guess2 = (input: Array<IGuess>, board: Array<Array<number>>) => {
  var guess = [...input];

  const last = guess[guess.length - 1];

  for (var y = last ? last.y : 0; y < 9; y++) {
    for (var x = y === last?.y ? last.x + 1 : 0; x < 9; x++) {}
  }
  //get last guess
};

export const mergeBoard = (
  guess: Array<IGuess>,
  board: Array<Array<number>>
): Array<Array<number>> => {
  var newBoard = [];

  for (var i = 0; i < board.length; i++) {
    newBoard.push([...board[i]]);
  }

  if (guess.length === 0) {
    return newBoard;
  }

  for (var itr = 0; itr < guess.length; itr++) {
    const val = guess[itr];
    newBoard[val.y][val.x] = val.value;
  }

  return newBoard;
};
