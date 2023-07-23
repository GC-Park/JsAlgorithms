let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let toppingNumber = Number(input[0]);

let price = input[1].split(' ');

let priceOfDou = Number(price[0]);

let priceOfTopping = Number(price[1]);

let calorieOfDou = Number(input[2]);

let calorieOfTopping = [];

for (let i = 3; i < toppingNumber + 3; i++) {
  calorieOfTopping.push(Number(input[i]));
}
calorieOfTopping.sort((a, b) => b - a);

let bestCalorie = Math.floor(calorieOfDou / priceOfDou);

let numberOfTopping = 0;

function cal(tcal) {
  numberOfTopping++;
  return  Math.floor((calorieOfDou + tcal) / (priceOfDou + priceOfTopping * numberOfTopping));
}

let totalTocal = 0;

for (let i = 0; i < toppingNumber; i++) {
  totalTocal += calorieOfTopping[i];
  const bc = cal(totalTocal);
  if (bc >= bestCalorie) {
    bestCalorie = bc;
  } else {
    break;
  }
}

console.log(bestCalorie);
