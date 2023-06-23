let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let prev = 0

for(let i=2; i<=input[0]; i++){
    let prevprev = prev

    if(input[i]>input[i-1]) prev=1;
    else prev=0;

    if(i===2) prevprev=prev

    if(prevprev !== prev){
        prev = 2;
        break;
    }
}

if(prev===0) console.log("DECREASING")
else if(prev===1) console.log("INCREASING")
else console.log("NEITHER")