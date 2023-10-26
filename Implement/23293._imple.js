let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let [logNumber, player] = input[0].split(' ').map(Number);

let playerObjs = [];
let illegals = [];
let blockedUsers = new Set();

for (let i = 0; i < player; i++) {
  let obj = new Object();
  obj.playerNumber = i + 1;
  obj.currentLocation = 1;
  obj.item = [];
  playerObjs.push(obj);
}

for (let i = 0; i < logNumber; i++) {
  let [log, playerNumber, actCode, actThing, actThingSecond] = input[i + 1].split(' ');

  if (actCode === 'M') {
    if (Number(actThing) > 53 || Number(actThing) < 1) {
      illegals.push(Number(log));
      continue;
    }
    if (Number(actThing) === playerObjs[playerNumber - 1].currentLocation) {
      illegals.push(Number(log));
      continue;
    }
    playerObjs[playerNumber - 1].currentLocation = Number(actThing);
  }

  if (actCode === 'F') {
    playerObjs[playerNumber - 1].item.push(Number(actThing));
    if (playerObjs[playerNumber - 1].currentLocation !== Number(actThing)) {
      illegals.push(Number(log));
    }
  }

  if (actCode === 'C') {
    const compareFirst = ele => ele === Number(actThing);
    const compareSecond = ele => ele === Number(actThingSecond);

    if (
      playerObjs[playerNumber - 1].item.includes(Number(actThing)) &&
      playerObjs[playerNumber - 1].item.includes(Number(actThingSecond))
    ) {
      const index1 = playerObjs[playerNumber - 1].item.findIndex(compareFirst);
      playerObjs[playerNumber - 1].item.splice(index1, 1);

      const index2 = playerObjs[playerNumber - 1].item.findIndex(compareSecond);
      playerObjs[playerNumber - 1].item.splice(index2, 1);
    } else if (
      !playerObjs[playerNumber - 1].item.includes(Number(actThing)) ||
      !playerObjs[playerNumber - 1].item.includes(Number(actThingSecond))
    ) {
      illegals.push(Number(log));
      if (playerObjs[playerNumber - 1].item.includes(Number(actThing))) {
        const index1 = playerObjs[playerNumber - 1].item.findIndex(compareFirst);
        playerObjs[playerNumber - 1].item.splice(index1, 1);
      }
      if (playerObjs[playerNumber - 1].item.includes(Number(actThingSecond))) {
        const index2 = playerObjs[playerNumber - 1].item.findIndex(compareSecond);
        playerObjs[playerNumber - 1].item.splice(index2, 1);
      }
    }
  }

  if (actCode === 'A') {
    if (playerObjs[Number(playerNumber) - 1].currentLocation !== playerObjs[Number(actThing) - 1].currentLocation) {
      illegals.push(Number(log));
      blockedUsers.add(Number(playerNumber));
    }
  }
}

console.log(illegals.length);
if (illegals.length !== 0) {
  illegals.sort((a, b) => a - b);
  const illegalsStr = illegals.join(' ');
  console.log(illegalsStr);
}

const blockedUsersArray = Array.from(blockedUsers);
console.log(blockedUsersArray.length);
if (blockedUsersArray.length !== 0) {
  blockedUsersArray.sort((a, b) => a - b);
  const blockedUsersStr = blockedUsersArray.join(' ');
  console.log(blockedUsersStr);
}
