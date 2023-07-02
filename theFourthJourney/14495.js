let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = input[0]

let array = [0,1,1,1]

for(let i=4; i<=number; i++){
    array[i] = BigInt(array[i-1]) + BigInt(array[i-3])
}

console.log(array[number].toString())
