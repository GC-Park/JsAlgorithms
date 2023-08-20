let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = input[0].split(' ');

let endRow = Number(number[0]);
let endCol = Number(number[1]);

let brray = [];

let visited = [];

for (let i = 0; i < endRow; i++) {
  visited.push([]);
}

for (let i = 0; i < endRow; i++) {
  brray.push(input[i + 1].split(''));
}

function bfs(row, col) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];
  queue.push([row, col]);
  visited[row][col] = 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= endRow || ny >= endCol) continue;
      if (Number(brray[nx][ny]) && !visited[nx][ny]) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

bfs(0, 0);

console.log(visited[endRow - 1][endCol - 1]);
