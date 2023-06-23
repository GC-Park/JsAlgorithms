let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let value = 0;

let result;

for(let i=0; i<99; i++){
    value = input[0].substring(0, input[0].length-2);

    if(i<10){
        value = value + ("0"+String(i));
    }else{
       value = value + String(i);
    }
    
    if(Number(value)%Number(input[1]) === 0 ){
        result = String(i);
        break;
    }
}

if(Number(result) < 10) console.log("0"+result)
else console.log(result)


