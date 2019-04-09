let boardArr = [[],[],[],[],[],[],[],[]];
let prevWt = false;
let count = 0;

for (let i = 0; i < 8; i += 1) {
  for (let j = 0; j < 8; j += 1) {
    count += 1;
    if (count % 8 === 7) {
      prevWt = !prevWt
    }

    if (!prevWt) {
      boardArr[i][j] = 'W';
      prevWt = true;
    } else {
      boardArr[i][j] = 'B';
      prevWt = false;
    }
  }
}

console.log(boardArr);

