/*
Points earned: 250
2,144 ops/s
Cognitive complexity: 5
*/

function maxDistance(movements) {
  // Code here
  let result=0;
  let moves=0,extra=0;
  movements=movements.split("");
  movements.forEach(value => {
    if(value=="<"){
      result--;
    }else if(value==">"){
      result++
    }else if(value=="*"){
      extra++
    }
  });
  result=Math.abs(result)+extra;
  return result;
}
