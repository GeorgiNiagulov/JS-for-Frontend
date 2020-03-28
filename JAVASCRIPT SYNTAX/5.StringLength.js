function stringLength(first, second, third){
  let firstStr = first.length;
  let secondStr = second.length;
  let thirdStr = third.length;
  let sum = firstStr+secondStr+thirdStr;
  let average = Math.floor(sum/3);
  console.log(sum);
  console.log(average);
}

stringLength('chocolate', 'ice cream', 'cake');
