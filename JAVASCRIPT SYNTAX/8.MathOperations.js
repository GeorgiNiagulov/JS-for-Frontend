function mathOperations(firstNum, secondNum, operand){
  switch (operand) {
    case '+':
      console.log(Number(firstNum+secondNum));
      break;
    case '-':
      console.log(firstNum-secondNum);
      break;
    case '*':
      console.log(firstNum*secondNum);
      break;
    case '/':
      console.log(firstNum/secondNum);
      break;
    case '%':
      console.log(firstNum%secondNum);
      break;
    case '**':
      console.log(firstNum**secondNum);
      break;
    default:
      break;
  }
}

mathOperations(5, 6, '+');
