let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = input[0]

let array = [0,1]

for(let i=2; i<=number; i++){
    array[i] = BigInt(array[i-1]) + BigInt(array[i-2])
}

console.log(array[number].toString())
