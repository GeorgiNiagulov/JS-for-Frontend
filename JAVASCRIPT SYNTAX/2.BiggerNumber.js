function biggerNumber(numbers){
  let firstNum = Number(numbers[0]);
  let secondNum = Number(numbers[1]);
  if(firstNum > secondNum){
    console.log(firstNum);
  } else {
    console.log(secondNum);
  }
}

biggerNumber(['20', '30']);
