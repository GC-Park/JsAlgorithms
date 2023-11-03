let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let [number, table] = input[0].split(' ').map(Number);

let order = []

function sortTable(a, b){
  return a.table - b.table;
}

function sortTime(a,b){
  return a.time - b.time;
}

for(let i=0; i<number; i++){
  res=input[i+1].split(' ');
  if(res.length === 3){
    let obj = new Object()
    obj.table = Number(res[1]);
    obj.time = Number(res[2]);
    order.push(obj)
  }

  if(res.length === 2){
    order = order.filter((val) => val.table != Number(res[1]))
  }

  if(res.length === 1){
    order.sort(sortTable);
    order.sort(sortTime);
  }

  if(order.length === 0){
    console.log('sleep');
    continue;
  }

  let printTable = [];

  order.forEach((val)=> printTable.push(val.table))
  console.log(printTable.join(' '))
}
