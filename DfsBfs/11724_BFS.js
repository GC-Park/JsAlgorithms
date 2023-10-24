let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let [vertex, edge] = input[0].split(' ').map(Number);

let array = [];
let visited = [];

class Qeueu {
  constructor() {
    this.queue = new Array(1001);
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

for (let i = 0; i < vertex; i++) {
  array.push([]);
  visited.push(false);
}

for (let i = 0; i < edge; i++) {
  let [start, end] = input[i + 1].split(' ').map(Number);
  array[start - 1].push(end - 1);
  array[end - 1].push(start - 1);
}

console.log(array);

function bfs(start) {
  visited[start] = true;
  const queue = new Qeueu();
  queue.push(start);

  while (queue.getSize()) {
    const value = queue.pop();
    for (let i = 0; i < array[value].length; i++) {
      const end = array[value][i];
      if (!visited[end]) {
        visited[end] = true;
        queue.push(end);
      }
    }
  }
}

let sum = 0;

for (let i = 0; i < vertex; i++) {
    if (visited[i]) continue;
    bfs(i);
    sum++;
}

console.log(sum);
