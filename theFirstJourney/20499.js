let input = require('fs').readFileSync('example.txt').toString().split('/');

if(Number(input[0])+Number(input[2]) < Number(input[1]) || Number(input[1]) === 0){
    console.log("hasu");
    return
}

console.log('gosu')
