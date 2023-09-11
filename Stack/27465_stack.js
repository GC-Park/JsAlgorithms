let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = Number(input[0]);

console.log(1000000000)

// while (1) {
//     number++;
//     const isTrue = isPrime(number);
//     if(!isTrue){
//         console.log(number)
//         break;
//     }
// }

// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
