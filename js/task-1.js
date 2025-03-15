'use strict'

//оголошуємо функцію
  function makeTransaction(quantity, pricePerDroid, customerCredits) {

//  перевірка на некоректні значення
  if (quantity <= 0 || pricePerDroid <= 0) {
    return `invalid input.`; // значення повинні бути більше 0
  }
  
//оголошуємо змінну для загальної сумми замовлення
  let totalPrice = quantity * pricePerDroid;

//перевіряємо умови якщо сумма заказа перевищує кошти на рахунку
  if (totalPrice > customerCredits) {
    return 'Insufficient funds!'; // повертаємо рядок
  }
//якщо не перевищує
  else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}
// перевіряємо код

  console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"

  console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"

  console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"

  console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"

  console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// Перевірка некоректних значень

  console.log(makeTransaction(0, 500, 5000)); // "Invalid input! "

  console.log(makeTransaction(5, -100, 5000)); // "Invalid input!"
