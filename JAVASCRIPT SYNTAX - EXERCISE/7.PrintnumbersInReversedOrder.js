function printNumbersInReversedOrder(arr){
  let reversed = arr.reverse();
  for (let i = 0; i < reversed.length; i++) {
    console.log(reversed[i]);
  }
}

printNumbersInReversedOrder([10 ,15 ,20]);
