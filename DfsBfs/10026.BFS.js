let [N, ...grid] = require('fs').readFileSync('example.txt').toString().trim().split('\n');

N = Number(N);
grid = grid.map(line => line.split(''));

let visited = Array.from({ length: N }).map(() => Array.from({ length: N }).map(() => false));

class Queue {
  constructor() {
    this.queue = new Array(10001);
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

const bfs = (row, col, flag) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let queue = new Queue();
  queue.push([row, col]);
  visited[row][col] = true;

  while (queue.getSize()) {
    const [x, y] = queue.pop();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if (flag === 0) {
        if (grid[nx][ny] === grid[x][y] && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      } else {
        if (grid[x][y] === 'R' || grid[x][y] === 'G') {
          if (grid[nx][ny] !== 'B' && !visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        } else {
          if (grid[nx][ny] === 'B' && !visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
};

let a_sum = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j]) continue;
    bfs(i, j, 0);
    a_sum++;
  }
}

visited = Array.from({ length: N }).map(() => Array.from({ length: N }).map(() => false));

let b_sum = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j]) continue;
    bfs(i, j, 1);
    b_sum++;
  }
}

console.log(a_sum, b_sum);
