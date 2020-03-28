function aggregate(arr){
  console.log(arr.reduce((acc, cur) => acc + cur));
  console.log(arr.reduce((acc, cur) => acc + (1/cur), 0));
  console.log(arr.join(''));
}

aggregate([2, 4, 8, 16]);
