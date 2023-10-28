let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let [row, col, currentRow, currentCol, moveNumber] = input[0].split(' ').map(Number);

let array = [];

for (let i = 0; i < row; i++) {
  const copyArray = input[i + 1].split(' ').map(Number);
  array.push(copyArray);
}

let orderArray = input[input.length - 1].split(' ').map(Number);

let brray = [0, 0, 0, 0, 0, 0]

let dx = [0, 0, -1, 1];
let dy = [1, -1, 0, 0];

orderArray.forEach(val => {
  if (val === 1) {
    let nx = currentRow + dx[0];
    let ny = currentCol + dy[0];

    if (nx < 0 || ny < 0 || nx >= row || ny >= col) return;

    let tempU = brray[0];
    let tempR = brray[1];
    let tempL = brray[2];
    let tempD = brray[5];

    brray[0] = tempL;
    brray[1] = tempU;
    brray[2] = tempD;
    brray[5] = tempR;

    if (array[nx][ny] !== 0) {
      brray[5] = array[nx][ny];
      array[nx][ny] = 0
    } else {
      array[nx][ny] = brray[5];
    }

    currentRow = nx;
    currentCol = ny;
    console.log(brray[0])
  }

  if (val === 2) {
    let nx = currentRow + dx[1];
    let ny = currentCol + dy[1];

    if (nx < 0 || ny < 0 || nx >= row || ny >= col) return;
    
    let tempU = brray[0];
    let tempR = brray[1];
    let tempL = brray[2];
    let tempD = brray[5];

    brray[0] = tempR;
    brray[1] = tempD;
    brray[2] = tempU;
    brray[5] = tempL;

    if (array[nx][ny] !== 0) {
      brray[5] = array[nx][ny];
      array[nx][ny] = 0
    } else {
      array[nx][ny] = brray[5];
    }

    currentRow = nx;
    currentCol = ny;
    console.log(brray[0])
  }

  if (val === 3) {
    let nx = currentRow + dx[2];
    let ny = currentCol + dy[2];

    if (nx < 0 || ny < 0 || nx >= row || ny >= col) return;

    let tempU = brray[0];
    let tempF = brray[3];
    let tempB = brray[4];
    let tempD = brray[5];

    brray[0] = tempF;
    brray[3] = tempD;
    brray[4] = tempU;
    brray[5] = tempB;

    if (array[nx][ny] !== 0) {
      brray[5] = array[nx][ny];
      array[nx][ny] = 0
    } else {
      array[nx][ny] = brray[5];
    }

    currentRow = nx;
    currentCol = ny;
    console.log(brray[0])
  }

  if (val === 4) {
    let nx = currentRow + dx[3];
    let ny = currentCol + dy[3];

    if (nx < 0 || ny < 0 || nx >= row || ny >= col) return;


    let tempU = brray[0];
    let tempF = brray[3];
    let tempB = brray[4];
    let tempD = brray[5];

    brray[0] = tempB;
    brray[3] = tempU;
    brray[4] = tempD;
    brray[5] = tempF;

    if (array[nx][ny] !== 0) {
      brray[5] = array[nx][ny];
      array[nx][ny] = 0
    } else {
      array[nx][ny] = brray[5];
    }

    currentRow = nx;
    currentCol = ny;
    console.log(brray[0])
  }
});
