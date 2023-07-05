let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = input[0];

let dp = [0, 0, 1, 1, 2, 3, 2, 3, 3, 2, 3]

for(let i=11; i<=number; i++){
    if(i%2===0 && i%3===0)dp[i] = Math.min(dp[i-1], Math.min(dp[Math.floor(i/2)], dp[Math.floor(i/3)]))+1;
    else if(i%2===0) dp[i] = Math.min(dp[i-1], dp[Math.floor(i/2)])+1;
    else if(i%3===0) dp[i] = Math.min(dp[i-1], dp[Math.floor(i/3)])+1;
    else dp[i] = dp[i-1] + 1
}

console.log(dp[number])