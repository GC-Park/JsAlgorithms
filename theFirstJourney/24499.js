let [plan, ...input] = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let [repeat, eat] = plan.split(' ');

let taste = input.toString().split(' ').map(Number);

taste = taste.concat(taste);

for (let i = 1; i <= Number(repeat) *2-1; i++) {
  taste[i] = taste[i] + taste[i - 1];
}
let j = 1;
let totalAdd = [];
totalAdd[0] = taste[Number(eat) - 1];
for (let i = Number(eat); i <= Number(repeat)+Number(eat)-1; i++) {
  totalAdd[j] = taste[i] - taste[i - Number(eat)];
  j++;
}

console.log(Math.max(...totalAdd));
