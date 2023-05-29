let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let array = input[0].split(' ');

let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

let total = 0;

for (let i = 0; i < array[0] - 1; i++) {
  total += Number(month[i]);
}

total += Number(array[1]);

let whatDay = total % 7;

console.log(day[whatDay]);
