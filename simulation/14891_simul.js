let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let wheels = [];

for (let i = 0; i < 4; i++) {
  wheels.push(input[i].split('').map(Number));
}

let spinNumber = Number(input[4]);

function spinTimeDir(index) {
  const poppedValue = wheels[index].pop();
  wheels[index].unshift(poppedValue);
}

function oppositeTimeDir(index) {
  const shiftedValue = wheels[index].shift();
  wheels[index].push(shiftedValue);
}

function changeFlag(flag) {
  if (flag === 1) return -1;
  if (flag === -1) return 1;
}

function firstWheel(dir) {
  let flag2 = 0;
  let flag3 = 0;
  let flag4 = 0;

  if (wheels[0][2] !== wheels[1][6]) flag2 = changeFlag(dir);
  if (flag2 !== 0 && wheels[1][2] !== wheels[2][6]) flag3 = changeFlag(flag2);
  if (flag3 !== 0 && wheels[2][2] !== wheels[3][6]) flag4 = changeFlag(flag3);

  if (dir === 1) spinTimeDir(0);
  if (dir === -1) oppositeTimeDir(0);

  if (flag2 !== 0) {
    if (flag2 === 1) spinTimeDir(1);
    if (flag2 === -1) oppositeTimeDir(1);
  }
  if (flag3 !== 0) {
    if (flag3 === 1) spinTimeDir(2);
    if (flag3 === -1) oppositeTimeDir(2);
  }
  if (flag4 !== 0) {
    if (flag4 === 1) spinTimeDir(3);
    if (flag4 === -1) oppositeTimeDir(3);
  }
}

function secondWheel(dir) {
  let flag1 = 0;
  let flag3 = 0;
  let flag4 = 0;

  if (wheels[0][2] !== wheels[1][6]) flag1 = changeFlag(dir);
  if (wheels[1][2] !== wheels[2][6]) flag3 = changeFlag(dir);
  if (flag3 !== 0 && wheels[2][2] !== wheels[3][6]) flag4 = changeFlag(flag3);

  if (dir === 1) spinTimeDir(1);
  if (dir === -1) oppositeTimeDir(1);

  if (flag1 !== 0) {
    if (flag1 === 1) spinTimeDir(0);
    if (flag1 === -1) oppositeTimeDir(0);
  }
  if (flag3 !== 0) {
    if (flag3 === 1) spinTimeDir(2);
    if (flag3 === -1) oppositeTimeDir(2);
  }
  if (flag4 !== 0) {
    if (flag4 === 1) spinTimeDir(3);
    if (flag4 === -1) oppositeTimeDir(3);
  }
}

function thirdWheel(dir) {
  let flag1 = 0;
  let flag2 = 0;
  let flag4 = 0;

  if (wheels[1][2] !== wheels[2][6]) flag2 = changeFlag(dir);
  if (flag2 !==0 && wheels[0][2] !== wheels[1][6]) flag1 = changeFlag(flag2);
  if (wheels[2][2] !== wheels[3][6]) flag4 = changeFlag(dir);

  if (dir === 1) spinTimeDir(2);
  if (dir === -1) oppositeTimeDir(2);

  if (flag1 !== 0) {
    if (flag1 === 1) spinTimeDir(0);
    if (flag1 === -1) oppositeTimeDir(0);
  }
  if (flag2 !== 0) {
    if (flag2 === 1) spinTimeDir(1);
    if (flag2 === -1) oppositeTimeDir(1);
  }
  if (flag4 !== 0) {
    if (flag4 === 1) spinTimeDir(3);
    if (flag4 === -1) oppositeTimeDir(3);
  }
}

function fourthWheel(dir) {
  let flag1 = 0;
  let flag2 = 0;
  let flag3 = 0;

  if (wheels[2][2] !== wheels[3][6]) flag3 = changeFlag(dir);
  if (flag3 !== 0 && wheels[1][2] !== wheels[2][6]) flag2 = changeFlag(flag3);
  if (flag2 !==0 && wheels[0][2] !== wheels[1][6]) flag1 = changeFlag(flag2);
  

  if (dir === 1) spinTimeDir(3);
  if (dir === -1) oppositeTimeDir(3);

  if (flag1 !== 0) {
    if (flag1 === 1) spinTimeDir(0);
    if (flag1 === -1) oppositeTimeDir(0);
  }
  if (flag2 !== 0) {
    if (flag2 === 1) spinTimeDir(1);
    if (flag2 === -1) oppositeTimeDir(1);
  }
  if (flag3 !== 0) {
    if (flag3 === 1) spinTimeDir(2);
    if (flag3 === -1) oppositeTimeDir(2);
  }
}

function secondWheel(dir) {
  let flag1 = 0;
  let flag3 = 0;
  let flag4 = 0;

  if (wheels[0][2] !== wheels[1][6]) flag1 = changeFlag(dir);
  if (wheels[1][2] !== wheels[2][6]) flag3 = changeFlag(dir);
  if (flag3 !== 0 && wheels[2][2] !== wheels[3][6]) flag4 = changeFlag(flag3);

  if (dir === 1) spinTimeDir(1);
  if (dir === -1) oppositeTimeDir(1);

  if (flag1 !== 0) {
    if (flag1 === 1) spinTimeDir(0);
    if (flag1 === -1) oppositeTimeDir(0);
  }
  if (flag3 !== 0) {
    if (flag3 === 1) spinTimeDir(2);
    if (flag3 === -1) oppositeTimeDir(2);
  }
  if (flag4 !== 0) {
    if (flag4 === 1) spinTimeDir(3);
    if (flag4 === -1) oppositeTimeDir(3);
  }
}

for (let i = 0; i < spinNumber; i++) {
  const [wheel, direction] = input[5 + i].split(' ').map(Number);

  if (wheel === 1) {
    firstWheel(direction);
  }

  if(wheel === 2){
    secondWheel(direction);
  }

  if(wheel === 3){
    thirdWheel(direction);
  }

  if(wheel === 4){
    fourthWheel(direction);
  }
}

let total = 0;

if(wheels[0][0] !== 0) total += 1;
if(wheels[1][0] !== 0) total += 2;
if(wheels[2][0] !== 0) total += 4;
if(wheels[3][0] !== 0) total += 8;

console.log(total)