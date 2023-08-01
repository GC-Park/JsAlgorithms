let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = input[0].split(' ');

let vertex = Number(number[0]);

let line = Number(number[1]);

let startBD = Number(number[2]);

let array = [];

let visited = [...new Array(vertex + 1)].fill(0);
let visited2 = [...new Array(vertex + 1)].fill(0);

for (let i = 0; i <= vertex; i++) {
  array.push([]);
}

for (let i = 0; i < line; i++) {
  let start = Number(input[i + 1].split(' ')[0]);
  let end = Number(input[i + 1].split(' ')[1]);
  array[start].push(end);
  array[end].push(start);
}

for (let i = 0; i <= vertex; i++) {
  array[i].sort((a, b) => a - b);
}

visited[startBD] = 1;

let first = [startBD];
let second = [];

const dfs = start => {
  array[start].forEach(end => {
    if (!visited[end]) {
      visited[end] = 1;
      first.push(end);
      dfs(end);
    }
  });
};

const bfs = start => {
  const nextVisit = [start];
  let v;

  while (nextVisit.length !== 0) {
    v = nextVisit.shift();

    if (visited2[v]) {
      continue;
    }

    visited2[v] = 1;
    second.push(v);
    array[v].forEach(vertex => {
      if (!visited2[vertex]) {
        console.log(vertex)
        nextVisit.push(vertex);
      }
    });
  }
};

dfs(startBD);
bfs(startBD);

console.log(first.join(' '));
console.log(second.join(' '));
