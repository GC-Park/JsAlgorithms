let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = input[0];

let dp = [0, 1, 2, 3, 5, 8]

for(let i=6; i<=number; i++){
    dp[i] = (dp[i-1] + dp[i-2]) % 10007
}

console.log(dp[number])