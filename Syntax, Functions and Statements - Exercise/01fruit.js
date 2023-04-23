function fruit(fruit, weigth, price) {
    let money = price * (weigth/1000);


    console.log(`I need $${money.toFixed(2)} to buy ${(weigth/1000).toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);