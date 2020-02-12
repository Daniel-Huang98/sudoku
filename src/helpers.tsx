export const validInput = (board: Array<Array<number>>): boolean => {
  const rows = checkRows(board);
  const columns = checkColumns(board);
  return rows && columns;
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

interface IPos {
  x: number;
  y: number;
}

export interface IGuess {
  x: number;
  y: number;
  value: number;
}

export const guess = (input: Array<IGuess>, board: Array<Array<number>>) => {
  var guess = [...input];
  var currBoard = mergeBoard(guess, board);
  //get last guess

  if (validInput(currBoard) || guess.length === 0) {
    for (var y = 0; y < 9; y++) {
      for (var x = 0; x < 9; x++) {
        if (currBoard[y][x] === 0) {
          guess.push({ x, y, value: 1 });
          return guess;
        }
      }
    }
  } else {
    guess[guess.length - 1].value++;
    if (guess[guess.length - 1].value > 9) {
      guess.pop();
      if (guess.length !== 0) {
        guess[guess.length - 1].value++;
        while (guess[guess.length - 1].value++ >= 9) {
          guess.pop();
        }
      }
    }
  }
  return guess;
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
