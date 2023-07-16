let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = input;

let student = [];

for (let i = 1; i <= Number(number[0]); i++) {
  let array = number[i].split(' ');
  student.push(array);
}

let winner = []
let n=0;
for(let i=0; i < Number(number[0]); i++){
    let result=0;
    let friend = [i];
    for(let j=0; j<5; j++){
        for(let k=0; k<Number(number[0]); k++){
            if(friend.includes(k)) continue;
            if(student[i][j] === student[k][j]){
                result++;
                friend.push(k);
            }
        }
    }
    winner.push(result);
}

const maxValue = Math.max(...winner);

console.log(winner.indexOf(maxValue)+1)
