let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = input[0];

let matchstick = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6]

let flag = 0;


let first, second, cal;

for(let i=0; i<100; i++){
    let re1, re2, re3;
    for(let j=0; j<100-i; j++){
        cal = i+j;

        if(i<10) re1 = matchstick[i] + matchstick[0]
        else if(i>=10) re1 = matchstick[Math.floor(i/10)] + matchstick[i%10]

        if(j<10) re2 = matchstick[j] + matchstick[0]
        else if(j>=10) re2 = matchstick[Math.floor(j/10)] + matchstick[j%10]

        if(cal<10) re3 = matchstick[cal] + matchstick[0]
        else if(cal>=10) re3 = matchstick[Math.floor(cal/10)] + matchstick[cal%10]

        if(Number(number)-4 === re1+re2+re3){
            flag = 1;
            first = i;
            second = j;
            break;
        }
    }

    if(flag === 1) break;
}

if(first < 10) first = '0'+String(first);
if(second < 10) second = '0'+String(second);
if(cal < 10) cal = '0'+String(cal);

if(flag === 0) console.log('impossible')
else console.log(first+'+'+second+"="+cal)