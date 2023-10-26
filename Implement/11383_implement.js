let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let isSame = 0;

for (let i = 0; i < N; i++) {
  const array = input[i + 1].split('');
  const copyTwoArray = [];
  for (let j = 0; j < M; j++) {
    copyTwoArray.push(array[j]);
    copyTwoArray.push(array[j]);
  }

  if(copyTwoArray.join('') === input[i+1+N]) continue;
  else{
    isSame = 1;
    break;
  }
}

if(isSame === 0) console.log('Eyfa')
if(isSame === 1) console.log('Not Eyfa')