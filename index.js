let boardArr = [[],[],[],[],[],[],[],[]];
let turnsArr = ['white', 'black'];

const buildBoard = () => {
  let prevWt = false;
  let count = 0;
  
  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      count += 1;
      if (count % 8 === 7) {
        prevWt = !prevWt
      }
      
      if (!prevWt) {
        boardArr[i][j] = `\u25A1`;
        prevWt = true;
      } else {
        boardArr[i][j] = `\u25A0`;
        prevWt = false;
      }
    }
  }
};

const addPieces = () => {
  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      // Add Pawns
      if (i === 1) {
        boardArr[i][j] = `\u265F`;
      } else if (i === 6) {
        boardArr[i][j] = `\u2659`;
      }

      // Add Kings
      if (i === 0 && j === 4) {
        boardArr[i][j] = `\u265A`;
      } else if (i === 7 && j === 4) {
        boardArr[i][j] = `\u2654`;
      }

      // Add Queens
      if (i === 0 && j === 3) {
        boardArr[i][j] = `\u265B`;
      } else if (i === 7 && j === 3) {
        boardArr[i][j] = `\u2655`;
      }

      // Add Bishops
      if (i === 0 && (j === 2 || j === 5)) {
        boardArr[i][j] = `\u265D`;
      } else if (i === 7 && (j === 2 || j === 5)) {
        boardArr[i][j] = `\u2657`;
      }

      // Add Knights
      if (i === 0 && (j === 1 || j === 6)) {
        boardArr[i][j] = `\u265E`;
      } else if (i === 7 && (j === 1 || j === 6)) {
        boardArr[i][j] = `\u2658`;
      }

      // Add Rooks
      if (i === 0 && (j === 0 || j === 7)) {
        boardArr[i][j] = `\u265C`;
      } else if (i === 7 && (j === 0 || j === 7)) {
        boardArr[i][j] = `\u2656`;
      }
    }
  }
};

buildBoard();
addPieces();

console.log(boardArr);

