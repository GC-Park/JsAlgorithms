let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let computerNumber = input[0].split(' ').map(Number);

let array = [];

let visited = [];

for (let i = 0; i < computerNumber[0]; i++) {
  array.push(new Array(computerNumber[1]).fill(0));
  visited.push(new Array(computerNumber[1]).fill(0));
}

for (let i = 0; i < computerNumber[2]; i++) {
  const [x, y] = input[i + 1].split(' ').map(Number);
  array[x - 1][y - 1] = 1;
}

const dfs = (row, col) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let number = 1;
  const stack = [];
  stack.push([row, col]);
  visited[row][col] = 1;

  while (stack.length) {
    const [x, y] = stack.pop();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || ny < 0 || nx >= computerNumber[0] || ny >= computerNumber[1]) continue;
      if (array[nx][ny] && !visited[nx][ny]) {
        visited[nx][ny] = 1;
        stack.push([nx, ny]);
        number++;
      }
    }
  }
  return number;
};

let total = 0;
let max = 0;

for (let i = 0; i < computerNumber[0]; i++) {
  for (let j = 0; j < computerNumber[1]; j++) {
    if (array[i][j]) {
      visited[i][j] = 1;
      total = dfs(i, j);
      if (total > max) max = total;
    }
  }
}

console.log(max);
