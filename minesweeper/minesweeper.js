document.addEventListener('DOMContentLoaded', startGame);

// Define your `board` object here!
var board = {
  cells: [
    { row: 0, col: 0, isMine: false, hidden: true, isMarked: false },
    { row: 0, col: 1, isMine: false, hidden: true, isMarked: false },
    { row: 0, col: 2, isMine: true, hidden: true, isMarked: false },
    { row: 0, col: 3, isMine: true, hidden: true, isMarked: false },
    { row: 1, col: 0, isMine: false, hidden: true, isMarked: false },
    { row: 1, col: 1, isMine: false, hidden: true, isMarked: false },
    { row: 1, col: 2, isMine: true, hidden: true, isMarked: false },
    { row: 1, col: 3, isMine: true, hidden: true, isMarked: false },
    { row: 2, col: 0, isMine: false, hidden: true, isMarked: false },
    { row: 2, col: 1, isMine: true, hidden: true, isMarked: false },
    { row: 2, col: 2, isMine: false, hidden: true, isMarked: false },
    { row: 2, col: 3, isMine: false, hidden: true, isMarked: false },
    { row: 3, col: 0, isMine: false, hidden: true, isMarked: false },
    { row: 3, col: 1, isMine: false, hidden: true, isMarked: false },
    { row: 3, col: 2, isMine: false, hidden: true, isMarked: false },
    { row: 3, col: 3, isMine: false, hidden: true, isMarked: false },
  ],
};

function startGame() {
  // Don't remove this function call: it makes the game work!
  board.cells.forEach((object) => {
    object.surroundingMines = countSurroundingMines(object);
    //looking into objects - for debugging purposes
    // for (const property in object) {
    //   console.log(`${property}: ${object[property]}`);
    // }
  });

  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
  lib.initBoard();
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin() {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  if (numberOfConquered() + numberOfMinesOff() === numberOfCells()) {
    displayMessage('You win!');
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  surroundingCells = getSurroundingCells(cell.row, cell.col);
  var countMine = 0;

  surroundingCells.forEach((object) => {
    if (object.isMine) {
      countMine++;
    }
  });
  return countMine;
}

function numberOfMinesOff() {
  let numberOfMinesOff = 0;
  board.cells.forEach((object) => {
    if (object.isMine && (object.hidden || object.marked)) {
      numberOfMinesOff++;
    }
  });
  return numberOfMinesOff;
}

function numberOfConquered() {
  let numberOfConquered = 0;
  board.cells.forEach((object) => {
    if (!object.isMine && (!object.hidden || object.marked)) {
      numberOfConquered++;
    }
  });
  return numberOfConquered;
}

function numberOfCells() {
  let numberOfCells = 0;
  board.cells.forEach((object) => {
    numberOfCells++;
  });
  return numberOfCells;
}
