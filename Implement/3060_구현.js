let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let number = Number(input[0]);

let inputNumber = 1;

for (let i = 0; i < number; i++) {
  let total = Number(input[inputNumber]);

  let pig = input[inputNumber + 1].split(' ').map(Number);

  let count = 1;

  while (1) {
    if (count === 1) {
      let pigTotal = pig[0] + pig[1] + pig[2] + pig[3] + pig[4] + pig[5];

      if (pigTotal > total) {
        console.log(count);
        break;
      }

      count++;
    } else {
      let pigTotal = 0;
      let copyPig = pig.map((v) => v);
      for (let i = 0; i < 6; i++) {
        if (i === 0) {
          copyPig[i] = pig[5] + pig[i + 3] + pig[1]+ pig[i];
          continue;
        }
        if (i === 5) {
          copyPig[i] = pig[0] + pig[i - 3] + pig[4] + pig[i];
          continue;
        }

        if (i <= 2) {
          copyPig[i] = pig[i + 1] + pig[i - 1] + pig[i + 3] + pig[i];
        }

        if (i > 2) {
          copyPig[i] = pig[i + 1] + pig[i - 1] + pig[i - 3] + pig[i];
        }
      }

      pig = copyPig.map((v) => v);

      pigTotal = pig[0] + pig[1] + pig[2] + pig[3] + pig[4] + pig[5];

      if (pigTotal > total) {
        console.log(count);
        break;
      }

      count++;
    }
  }

  inputNumber = inputNumber + 2;
}
