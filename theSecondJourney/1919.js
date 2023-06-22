let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let firstArray = []
let secondArray = []

for(let j=0; j<26; j++){
    firstArray[j] = 0
    secondArray[j] = 0
}


for(let i=0; i<2; i++){
    for(let j=0; j<input[i].length; j++){
        if(i === 0){
            firstArray[input[i].charCodeAt(j)-97] += 1
        } else {
            secondArray[input[i].charCodeAt(j)-97] += 1
        }
    }
}

let result = 0

for(let j=0; j<26; j++){
    result += Math.abs(firstArray[j] - secondArray[j]);
}

console.log(result)
