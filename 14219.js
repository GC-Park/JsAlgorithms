let input = require('fs').readFileSync('example.txt').toString().split(' ');

if ((input[0] * input[1]) % 3 === 0) {
  console.log('YES');
  return;
}

console.log('NO');
