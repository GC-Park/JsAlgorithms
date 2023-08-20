let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let computerNumber = Number(input[0]);

let number = Number(input[1]);

let brray = [];

let visited = [...new Array(computerNumber + 1)].fill(0);

for (let i = 0; i <= computerNumber; i++) {
  brray.push([]);
}

for (let i = 0; i < number; i++) {
  let start = Number(input[i + 2].split(' ')[0]);
  let end = Number(input[i + 2].split(' ')[1]);
  brray[start].push(end);
  brray[end].push(start)
}

visited[1] = 1;

let result = 0;

const dfs = start => {
  brray[start].forEach(end => {
    if (!visited[end]) {
      visited[end] = 1;
      result++;
      dfs(end);
    }
  });
};

dfs(1);

console.log(result);
