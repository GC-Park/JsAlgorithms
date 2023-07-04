let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = input[0];

let dp = [];

dp[0] = 0;
dp[1] = 1;
dp[2] = 1;
dp[3] = 2;
dp[4] = 2;
dp[5] = 1;
dp[6] = 2;
dp[7] = 1;

for (let i = 8; i <= number; i++) {
  if (i % 7 === 0) dp[i] = i / 7;
  else dp[i] = Math.min(dp[i - 1], Math.min(dp[i - 2], Math.min(dp[i - 5], dp[i - 7]))) + 1;
}

console.log(dp[number]);
