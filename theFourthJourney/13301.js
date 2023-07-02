let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = input[0];

let array = [0n, 1n, 1n];
let circumference = [0n, 4n, 6n];

for (let i = 3; i <= number; i++) {
  array.push(array[i - 1] + array[i - 2]);
  circumference.push(circumference[i-1] + array[i]*2n)
}

console.log(circumference[number].toString())
