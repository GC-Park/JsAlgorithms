let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = input[0]

let five = Math.floor(number / 5);

let two=0;

while(1){
    if(Number(number) === 1 || Number(number) === 3) break;

    let rest = number - 5*five;
    if(rest%2 === 0){
        two = Math.floor(rest/2);
        break;
    }

    five = five - 1;
}

if(Number(number) === 1 || Number(number) === 3) console.log(-1)
else console.log(five+two)