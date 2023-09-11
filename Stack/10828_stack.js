let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = Number(input[0]);

const stack = [];

const result = [];

for (let i = 1; i <= number; i++) {
  value = input[i].split(' ');
  if (value.length >= 2) {
    stack.push(Number(value[1]));
    continue;
  }
  if (value[0] === 'top') {
    result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
    continue;
  }
  if (value[0] === 'pop') {
    result.push(stack.length === 0 ? -1 : stack.pop());
    continue;
  }
  if (value[0] === 'size') {
    result.push(stack.length);
    continue;
  }
  if (value[0] === 'empty') {
    result.push(stack.length === 0 ? 1 : 0);
    continue;
  }
}

console.log(result.join('\n'));
