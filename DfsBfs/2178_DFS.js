let [N, ...grid] = require('fs').readFileSync('example.txt').toString().trim().split('\n');

grid = grid.map(line => line.split('').map(Number));
let [row, col] = N.split(' ').map(Number);

const visited = Array.from({ length: row }).map(() => Array.from({ length: col }).map(() => false));

class Queue {
  constructor() {
    this.queue = new Array(100001);
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

const bfs = (start, end) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = new Queue();
  queue.push([start, end]);
  visited[start][end] = 1;

  while (queue.getSize()) {
    const [x, y] = queue.pop();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
      if (grid[nx][ny] && !visited[nx][ny]) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
};

bfs(0, 0);

console.log(visited[row - 1][col - 1]);
