let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = Number(input[0]);

let sq = [];

sq[0] = 0;
sq[1] = 1;

for (let i = 2; i <= number; i++) {
  sq[i] = sq[1] + sq[i - 1];

  for (let j = 2; j * j <= i; j++) {
    sq[i] = Math.min(sq[i], 1 + sq[i - j * j]);
  }
}

console.log(sq[number]);
