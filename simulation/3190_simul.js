let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let arraySize = Number(input[0]);

let array = Array.from({ length: arraySize }).map(() => Array.from({ length: arraySize }).map(() => 0));

let currentRow = 0;
let currentCol = 0;
let currentDir = 1;

class Queue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = 0;
    this.back = 0;
  }

  push(value) {
    this.queue[this.back] = value;
    this.back++;
  }

  pop() {
    if (this.empty()) return -1;
    const poppedValue = this.queue[this.front];
    this.front++;

    return poppedValue;
  }

  getSize() {
    return this.back - this.front;
  }

  empty() {
    return this.getSize() === 0 ? 1 : 0;
  }

  include(value) {
    for (let i = this.front; i <= this.back; i++) {
      if (this.queue[i] === value) return 1;
    }
    return 0;
  }
}

let appleNumber = Number(input[1]);
for (let i = 0; i < appleNumber; i++) {
  let [appleRow, appleCol] = input[i + 2].split(' ').map(Number);
  array[appleRow - 1][appleCol - 1] = 1;
}

let whenChangeMoveDir = {};

let moveNumber = Number(input[2 + appleNumber]);
for (let i = 0; i < moveNumber; i++) {
  let [moveSecond, moveDir] = input[3 + appleNumber + i].split(' ');
  whenChangeMoveDir[moveSecond] = moveDir;
}

let second = 0;

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

let queue = new Queue(arraySize * arraySize + 1);
const number = String(currentRow) + '.' + String(currentCol);
queue.push(number);

while (1) {
  second++;

  currentRow = currentRow + dx[currentDir];
  currentCol = currentCol + dy[currentDir];

  if (whenChangeMoveDir[second] !== undefined) {
    if (whenChangeMoveDir[second] === 'D') {
      currentDir = currentDir + 1;
      if (currentDir === 4) currentDir = 0;
    }

    if (whenChangeMoveDir[second] === 'L') {
      currentDir = currentDir - 1;
      if (currentDir === -1) currentDir = 3;
    }
  }

  // while문이 끝나는 조건
  if (currentRow < 0 || currentCol < 0 || currentRow >= arraySize || currentCol >= arraySize) break;

  const number = String(currentRow) + '.' + String(currentCol);

  if (queue.include(number)) break;

  if (array[currentRow][currentCol] === 1) {
    queue.push(number);
    array[currentRow][currentCol] = 0;
  } else {
    queue.push(number);
    queue.pop();
  }
}

console.log(second);
