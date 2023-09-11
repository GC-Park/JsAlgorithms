let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = Number(input[0]);

let array = input[1].split(' ').map(Number);

let even = 0;

let odd = 0;

for (let i = 1; i <= number; i++) {
  if (i % 2 === 0) {
    even += array[i-1];
    continue;
  }
  odd += array[i-1];
}

if(number === 3){
    if(odd > even){
        console.log(-1);
        return;
    }
}

console.log(Math.abs(odd-even))

