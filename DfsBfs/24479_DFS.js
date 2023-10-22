let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let computerNumber = input[0].split(' ').map(Number);

const visited = new Array(computerNumber[0]).fill(false);

let array = [];

let orderArray = new Array(computerNumber[0]).fill(0);

let order = 1;

for (let i = 0; i <= computerNumber[0]; i++) {
  array.push([]);
}

for (let i = 0; i < computerNumber[1]; i++) {
  const [start, end] = input[i + 1].split(' ').map(Number);
  array[start].push(end);
  array[end].push(start);
}

array.forEach(arr => arr.sort((a, b) => a - b));

const dfs = start => {
  orderArray[start - 1] = order;
  order++;
  visited[start] = true;

  for (let i = 0; i < array[start].length; i++) {
    const end = array[start][i];
    if (!visited[end]) dfs(end);
  }
};

dfs(computerNumber[2]);

console.log(orderArray.join("\n"))
