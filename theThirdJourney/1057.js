let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let array = input[0].split(' ');

let count = 1;

while (Number(array[0]) !== 1) {
  if (
    Math.abs(Math.floor(Number(array[1]) / 2) - Math.floor(Number(array[2]) / 2)) === 1 &&
    Math.floor(Math.max(Number(array[1]), Number(array[2]))) % 2 === 0 && !(array[1] %2 === 0 && array[2] %2 === 0)
  ) {
    break;
  }
  let first = Math.floor(Number(array[1]) / 2) + Math.floor(Number(array[1]) % 2);
  let second = Math.floor(Number(array[2]) / 2) + Math.floor(Number(array[2]) % 2);


  count += 1;

  array[1] = first;
  array[2] = second;
  array[0] = array[0] / 2;
}

console.log(count);
