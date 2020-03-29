function productNegativeOrPositive(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i] == -1)) {
      count++;
    } else if (Math.sign(arr[i] == 0)) {
      console.log('Positive');
    }
  }

  if (count%2 == 0) {
    console.log('Positive');
  } else{
    console.log('Negative');
  }
}

productNegativeOrPositive([2, 3, -1]);
