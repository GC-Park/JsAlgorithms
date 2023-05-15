let [repeat, ...input] = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let numbers = input.toString().split(' ').map(Number).sort();

let total = 0;
let currentNumber = 0;
let i = 0;
let array = [];

for (i = 0; i < repeat; i++) {
  currentNumber = numbers[i];
  numbers.forEach(number => {
    if (currentNumber === number) total++;
  });
  array.push(Number(total));
  total = 0;
}

array.sort((a, b) => a - b);

console.log(array[array.length - 1]);
