'use strict'
// оголошуємо функцію
    function formatMessage(message, maxLength) {

// перевіряємо на тип вхідних значень
    if(typeof message !== "string" || typeof maxLength !== "number" || maxLength <= 0){return "invalid input"}
 
// перевіряємо на виконання умов 
    if (message.length <= maxLength) {

// повертаємо орігінальний рядок
    return message;
  }

//в іншому випадку обрізаємо рядок та додаємо "..."
    return message.slice(0, maxLength) + "...";
  
}
// перевіряємо результат 
 
  console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."

  console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"

  console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."

  console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"

  console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."

  console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

  console.log(formatMessage(12345678, 41)); // "invalid input"

  console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", -41)); // "invalid input"

