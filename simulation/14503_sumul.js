let [N, robot, ...grid] = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let [row, col] = N.split(' ').map(Number);

let [robotRow, robotCol, robotDirection] = robot.split(' ').map(Number);

grid = grid.map(line => line.split(' ').map(Number));

while(1){
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let flag = 0

  grid[robotRow][robotCol] = -1;
  let copyRobotDirection = robotDirection;

  for(let i=0; i<4; i++){
    copyRobotDirection = copyRobotDirection - 1;
    if(copyRobotDirection === -1) copyRobotDirection = 3;
    let nx = robotRow + dx[copyRobotDirection];
    let ny = robotCol + dy[copyRobotDirection];

    if(nx <0 || ny <0 || nx>= row || ny>= col) continue;
    if(grid[nx][ny] === 0){
      robotDirection = copyRobotDirection
      robotRow = nx;
      robotCol = ny;
      flag =1;
      break;
    }
  }

  if(flag === 1) continue;
  let scondCopyRobotDirection = robotDirection;

  if(flag === 0){
    scondCopyRobotDirection = scondCopyRobotDirection - 2;
    if(scondCopyRobotDirection < 0) scondCopyRobotDirection = scondCopyRobotDirection + 4;
    let zx = robotRow + dx[scondCopyRobotDirection];
    let zy = robotCol + dy[scondCopyRobotDirection];
    if(zx <0 || zy <0 || zx>= row || zy>= col) break;
    if(grid[zx][zy] === 1) break;
    robotRow = zx;
    robotCol = zy;
  }
}


let total = 0

for(let i=0; i<row; i++){
  for(let j=0; j<col; j++){
    if(grid[i][j] === -1) total += 1
  }
}

console.log(total)