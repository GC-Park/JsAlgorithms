let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let clock = input;

let first = [];
let second = [];
let third = [];
let fourth = [];

let f = 0;
let s = 0;
let t = 0;
let fo = 0;

let clockArray = [
  ['###', '#.#', '#.#', '#.#', '###'],
  ['..#', '..#', '..#', '..#', '..#'],
  ['###', '..#', '###', '#..', '###'],
  ['###', '..#', '###', '..#', '###'],
  ['#.#', '#.#', '###', '..#', '..#'],
  ['###', '#..', '###', '..#', '###'],
  ['###', '#..', '###', '#.#', '###'],
  ['###', '..#', '..#', '..#', '..#'],
  ['###', '#.#', '###', '#.#', '###'],
  ['###', '#.#', '###', '..#', '###'],
];

for (let i = 0; i < clock.length; i++) {
  let [fi, s, t, fo] = input[i].split(' ');
  first.push(fi);
  second.push(s);
  third.push(t);
  fourth.push(fo);
}

let max = 0;

for(let i=0; i<3; i++){
  let count = 0;
  for(let j=0; j<5; j++){
    const f = first[j].split('');
    const c = clockArray[i][j].split('');
    for(let t=0; t<3; t++){
      if(f[t] === '#'){
        if(f[t] !== c[t]) break;
        if(f[t] === c[t]) count++;
      }
    }
  }

  if(max<count){
    max = count;
    f = i;
  }
}

max = 0;

for(let i=0; i<10; i++){
  if(f === 2 && i >= 4) break;

  let count = 0;
  for(let j=0; j<5; j++){
    const f = second[j].split('');
    const c = clockArray[i][j].split('');
    for(let t=0; t<3; t++){
      if(f[t] === '#'){
        if(f[t] !== c[t]) break;
        if(f[t] === c[t]) count++;
      }
    }
  }

  if(max<count){
    max = count;
    s = i;
  }
}

max = 0;

for(let i=0; i<6; i++){
  let count = 0;
  for(let j=0; j<5; j++){
    const f = third[j].split('');
    const c = clockArray[i][j].split('');
    for(let t=0; t<3; t++){
      if(f[t] === '#'){
        if(f[t] !== c[t]) break;
        if(f[t] === c[t]) count++;
      }
    }
  }

  if(max<count){
    max = count;
    t = i;
  }
}

max = 0;

for(let i=0; i<10; i++){
  let count = 0;
  for(let j=0; j<5; j++){
    const f = fourth[j].split('');
    const c = clockArray[i][j].split('');
    for(let t=0; t<3; t++){
      if(f[t] === '#'){
        if(f[t] !== c[t]) break;
        if(f[t] === c[t]) count++;
      }
    }
  }

  if(max<count){
    max = count;
    fo = i;
  }
}

console.log(String(f)+String(s)+":"+String(t)+String(fo));