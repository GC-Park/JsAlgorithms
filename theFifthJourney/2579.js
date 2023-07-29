let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = Number(input[0]);

let stairs = [];

for (let i = 0; i < number; i++) {
  stairs.push(Number(input[i + 1]));
}

let dp = [];

dp.push(stairs[0]);
dp.push(stairs[0]+stairs[1]);
dp.push(Math.max(stairs[0], stairs[1])+stairs[2]);

for (let i = 3; i < number; i++) {
  dp.push(Math.max(dp[i-2]+stairs[i], dp[i-3]+stairs[i-1]+stairs[i]))
}

console.log(dp[number-1]);
