let [N, ...grid] = require('fs').readFileSync('example.txt').toString().trim().split('\n');

grid = grid.map(line => line.split('').map(Number));
N = Number(N);

const visited = Array.from({ length: N }).map(() => Array.from({ length: N }).map(() => false));

class Queue {
  constructor() {
    this.queue = new Array(1000);
    this.front = 0;
    this.back = 0;
  }

  push(value) {
    this.queue[this.back] = value;
    this.back++;
  }

  pop() {
    if (this.empty()) return -1;
    const popValue = this.queue[this.front];
    this.front++;

    return popValue;
  }

  getSize() {
    return this.back - this.front;
  }

  empty() {
    return this.getSize() === 0 ? 1 : 0;
  }
}

const bfs = (row, column) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = new Queue();
  queue.push([row, column]);
  visited[row][column] = true;

  let sum = 0;

  while (queue.getSize()) {
    const [x, y] = queue.pop();
    sum++;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if (grid[nx][ny] && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }

  return sum;
};

const assendingArray = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!grid[i][j] || visited[i][j]) continue;
    const total = bfs(i, j);
    assendingArray.push(total);
  }
}

assendingArray.sort((a, b) => a - b);

console.log(assendingArray.length)
assendingArray.forEach((value) => console.log(value))
