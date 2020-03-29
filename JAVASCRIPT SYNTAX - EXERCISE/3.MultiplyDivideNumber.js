function multiplyOrDivide(arr){
  let firstNum = Number(arr.shift());
  let secondNum = Number(arr.shift());
  if (firstNum <= secondNum) {
    console.log(firstNum*secondNum);
  } else{
    console.log(firstNum/secondNum);
  }
}

multiplyOrDivide([2, 3])
