let [N, ...grid] = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let [col, row] = N.split(' ').map(Number);
grid = grid.map(line => line.split(' ').map(Number));

let visited = Array.from({ length: row }).map(() => Array.from({ length: col }).map(() => 0));
let ripen = 1;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (grid[i][j] === 0) {
      ripen = 0;
      break;
    }
  }
}

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (grid[i][j] === -1) visited[i][j] = -1;
  }
}

if (ripen === 1) {
  console.log(0);
  return;
}

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
}

const size = row * col + 1;

let queue = new Queue(size);

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (grid[i][j] === 1) {
      queue.push([i, j])
      visited[i][j] = 1;
    }
  }
}

const bfs = () => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.getSize()) {
    const [x, y] = queue.pop();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
      if (grid[nx][ny] !== -1) {
        if (!visited[nx][ny]) {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
};

bfs();

let max = 0;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (visited[i][j] === 0) {
      console.log(-1);
      return;
    }
    if (max < visited[i][j]) max = visited[i][j];
  }
}

console.log(max - 1);
