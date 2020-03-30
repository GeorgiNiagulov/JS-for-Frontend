function calculateMoneyForFruit(fruit, weight, price){
  let weightToKg = weight/1000;
  let money = weightToKg*price;
  console.log(`I need $${money.toFixed(2)} to buy ${weightToKg.toFixed(2)} kilograms ${fruit}.`);
}

calculateMoneyForFruit('orange', 2500, 1.80);
