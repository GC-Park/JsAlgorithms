let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let [YT, YJ] = input[0].split(' ').map(Number);

let flag = true;

while(YT < 5 || YJ < 5){
  if(flag === true) YJ = YJ + YT;
  else if(flag === false) YT = YT + YJ

  flag = !flag;
}

if(flag === true) console.log('yt')
else console.log('yj')