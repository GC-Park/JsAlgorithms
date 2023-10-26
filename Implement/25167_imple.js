let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let [number, people, sucFail] = input[0].split(' ').map(Number);

let peopleName = input[1].split(' ');

let numberObj = {};

let peopleObj = {};
let timeObj = {};
let scoreObj = {};

for (let i = 0; i < number; i++) {
  numberObj[i] = [];
}

for (let i = 0; i < people; i++) {
  peopleObj[peopleName[i]] = {};
  timeObj[peopleName[i]] = {};
  scoreObj[peopleName[i]] = 0;
}

const judge = (problem, time, name, sf) => {
  const currentTime = Number(time.split(':').join(''));
  if (currentTime >= 2159) {
    return;
  }
  // 이미 다 풀면 끝
  if (peopleObj[name][problem] === 'solve') return;

  // solve인데 첫 번째 solve이면 끝
  if (sf === 'solve' && !peopleObj[name][problem]) {
    peopleObj[name][problem] = 'noway';
    scoreObj[name] += people + 1;
    return;
  }

  // 첫 번째 솔브인 경우 끝
  if (peopleObj[name][problem] === 'noway') return;

  if (sf === 'solve' && peopleObj[name][problem] === 'wrong') {
    let obj = new Object();
    obj['name'] = name;
    obj['time'] = currentTime - timeObj[name][problem];
    numberObj[problem - 1].push(obj);
    peopleObj[name][problem] = sf;
    return;
  }

  peopleObj[name][problem] = sf;
  if (!timeObj[name][problem]) timeObj[name][problem] = currentTime;
};

for (let i = 0; i < sucFail; i++) {
  let [p, t, n, sucfai] = input[i + 2].split(' ');

  judge(p, t, n, sucfai);
}

for (let i = 0; i < people; i++) {
  for (let j = 0; j < number; j++) {
    if (!peopleObj[peopleName[i]][j + 1]) {
      scoreObj[peopleName[i]] += people + 1;
    }
    if(peopleObj[peopleName[i]][j + 1] === 'wrong'){
      scoreObj[peopleName[i]] += people;
    }
  }
}
function nameOrder(a, b) {
  let x = a.name;
  let y = b.name;
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
}

function timeOrder(a, b) {
  return a.time - b.time;
}

for (let i = 0; i < number; i++) {
  numberObj[i].sort(nameOrder);
}
for (let i = 0; i < number; i++) {
  numberObj[i].sort(timeOrder);
}

for (let i = 0; i < number; i++) {
  numberObj[i].forEach((value, index) => {
    scoreObj[value.name] += index + 1;
  });
}

let realScore = [];

const keysOfScore = Object.keys(scoreObj);
keysOfScore.forEach(key => {
  let obj = new Object();
  obj['name'] = key;
  obj['time'] = scoreObj[key];
  realScore.push(obj);
});

realScore.sort(nameOrder);
realScore.sort(timeOrder);

realScore.forEach(value => console.log(value.name));
