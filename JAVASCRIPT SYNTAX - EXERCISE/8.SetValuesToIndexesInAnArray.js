function setValues(arr) {
  let length = Number(arr.shift());
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const tokens = arr[i].split(' - ');
    const index = tokens[0];
    const value = tokens[1];

    newArr[index] = value;
  }

  for (let k = 0; k < length; k++) {
    if (!newArr[k]) {
      newArr[k] = 0;
    }
  }

  newArr.map(element => {
    console.log(element);
  });

}

setValues([5, '0 - 3', '3 - -1', '4 - 2']);