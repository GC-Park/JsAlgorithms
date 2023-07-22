let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = input[0].split(' ');

let blind = [];

let result = [0, 0, 0, 0, 0];

for (let i = 0; i < Number(number[0]) * 5; i++) {
  blind.push(input[i + 1].split(''));
}

for (let i = 0; i < Number(number[0]); i++) {
  for (let j = 0; j < Number(number[1]); j++) {
    let shop = 0;
    for (let k = i * 5 + 1; k < 5 * (i + 1); k++) {
      if (blind[k][j * 5 + 1] === '*') shop++;
    }
    result[shop]++;
  }
}

console.log(result.join(' '));
