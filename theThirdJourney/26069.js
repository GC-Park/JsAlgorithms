let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let dancer = new Set();

for(let i=1; i<=Number(input[0]); i++){
    let meeting = input[i].split(' ');

    if(meeting[0] === "ChongChong" || meeting[1] === "ChongChong"){
        dancer.add(meeting[0]);
        dancer.add(meeting[1]);
    }

    if(dancer.has(meeting[0]) || dancer.has(meeting[1])){
        dancer.add(meeting[0]);
        dancer.add(meeting[1]);
    }
}

console.log(dancer.size)