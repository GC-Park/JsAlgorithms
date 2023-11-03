let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let [A, B, customerNumber] = input[0].split(' ').map(Number);

let order = new Object();

class Queue {
  constructor() {
    this.queue = new Array(100001);
    this.front = 0;
    this.back = 0;
  }

  push(value) {
    this.queue[this.back] = value;
    this.back++;
  }

  pop() {
    if (this.empty()) return -1;
    const poppedValue = this.queue[this.front];
    this.front++;
    return poppedValue;
  }

  getSize() {
    return this.back - this.front;
  }

  empty() {
    return this.getSize() === 0 ? 1 : 0;
  }

  reFront() {
    return this.queue[this.front];
  }
}

for (let i = 0; i < customerNumber; i++) {
  let [time, wrapColor, presentNumber] = input[i + 1].split(' ');

  order[Number(time)] = { wrapColor: wrapColor, presentNumber: Number(presentNumber) };
}

let extraSang = 0;
let extraJi = 0;

let totalPresent = 1;

let arraySang = [];
let brrayJi = [];

let lengOrder = Object.keys(order).length;
let checkOrder = 0;

let i = 1;

let totalSang = new Queue();
let totalJi = new Queue();

while (1) {
  if (order[i] !== undefined) {
    if (order[i].wrapColor === 'B' && A === 0) {
      checkOrder++;
      for (let j = 0; j < order[i].presentNumber; j++) {
        arraySang.push(totalPresent);
        totalPresent++;
      }
    }
  }

  if (order[i] !== undefined && A !== 0) {
    if (order[i].wrapColor === 'B') {
      checkOrder++;
      if (extraSang === 0) {
        let obj = new Object();
        obj.startTime = i;
        obj.finishTime = i + A;
        obj.presentNumber = totalPresent;
        totalSang.push(obj);
        totalPresent++;
        extraSang = extraSang + order[i].presentNumber;
      } else {
        extraSang = extraSang + order[i].presentNumber;
      }
    }
  }

  if (totalSang.getSize() && totalSang.reFront().finishTime === i && A !== 0) {
    arraySang.push(totalSang.reFront().presentNumber);
    totalSang.pop();
    extraSang--;
    if (extraSang) {
      let obj = new Object();
      obj.startTime = i;
      obj.finishTime = i + A;
      obj.presentNumber = totalPresent;
      totalSang.push(obj);
      totalPresent++;
    }
  }

  if (order[i] !== undefined && B !== 0) {
    if (order[i].wrapColor === 'R') {
      checkOrder++;
      if (extraJi === 0) {
        let obj = new Object();
        obj.startTime = i;
        obj.finishTime = i + B;
        obj.presentNumber = totalPresent;
        totalJi.push(obj);
        totalPresent++;
        extraJi = extraJi + order[i].presentNumber;
      } else {
        extraJi = extraJi + order[i].presentNumber;
      }
    }
  }

  if (order[i] !== undefined) {
    if (order[i].wrapColor === 'R' && B === 0) {
      checkOrder++;
      for (let j = 0; j < order[i].presentNumber; j++) {
        brrayJi.push(totalPresent);
        totalPresent++;
      }
    }
  }

  if (totalJi.getSize() && totalJi.reFront().finishTime === i && B !== 0) {
    brrayJi.push(totalJi.reFront().presentNumber);
    totalJi.pop();
    extraJi--;
    if (extraJi) {
      let obj = new Object();
      obj.startTime = i;
      obj.finishTime = i + B;
      obj.presentNumber = totalPresent;
      totalJi.push(obj);
      totalPresent++;
    }
  }

  if (lengOrder === checkOrder && !extraJi && !extraSang) break;
  i++;
}

console.log(arraySang.length);
console.log(arraySang.join(' '));
console.log(brrayJi.length);
console.log(brrayJi.join(' '));
