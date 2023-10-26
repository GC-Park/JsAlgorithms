let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let user = Number(input[0]);

const tictacArray = Array.from({ length: 3 }).map(() => Array.from({ length: 3 }).map(() => 0));

const tic = ()=>{
  if(tictacArray[0][0] === tictacArray[0][1] && tictacArray[0][0] === tictacArray[0][2]){
    return tictacArray[0][0];
  }
  if(tictacArray[0][0] === tictacArray[1][1] && tictacArray[0][0] === tictacArray[2][2]){
    return tictacArray[0][0];
  }
  if(tictacArray[0][0] === tictacArray[1][0] && tictacArray[0][0] === tictacArray[2][0]){
    return tictacArray[0][0];
  }
  if(tictacArray[0][1] === tictacArray[1][1] && tictacArray[0][1] === tictacArray[2][1]){
    return tictacArray[0][1];
  }
  if(tictacArray[0][2] === tictacArray[1][2] && tictacArray[0][2] === tictacArray[2][2]){
    return tictacArray[0][2];
  }
  if(tictacArray[1][0] === tictacArray[1][1] && tictacArray[1][0] === tictacArray[1][2]){
    return tictacArray[1][0];
  }
  if(tictacArray[2][0] === tictacArray[2][1] && tictacArray[2][0] === tictacArray[2][2]){
    return tictacArray[2][0];
  }
  if(tictacArray[0][2] === tictacArray[1][1] && tictacArray[0][2] === tictacArray[2][0]){
    return tictacArray[0][2];
  }

  return 0;
}



for(let i=0; i<9; i++){
  let [r, c] = input[i+1].split(' ').map(Number);
  tictacArray[r-1][c-1] = user;

  const winner = tic();

  if(winner === 1){
    console.log(1)
    return;
  }else if(winner === 2){
    console.log(2);
    return;
  }

  if(user === 1) user = 2;
  else if(user === 2) user = 1;
}

console.log(0)