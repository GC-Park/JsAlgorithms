let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let larray = input[0].split('');
let rarray = [];

let number = Number(input[1]);

for (let i = 2; i <= number + 1; i++) {
  const [command, value] = input[i].split(' ');

  if (command === 'L' && larray.length > 0) {
    rarray.push(larray.pop());
  }

  if (command === 'D' && rarray.length > 0) {
    larray.push(rarray.pop());
  }

  if (command === 'B' && larray.length > 0) {
    larray.pop();
  }

  if (command === 'P') {
    larray.push(value);
  }
}

const newArray = larray.concat(rarray.reverse());

console.log(newArray.join(''));
