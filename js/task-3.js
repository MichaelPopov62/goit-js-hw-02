"use strict"

function checkForSpam(message) {

// створюємо змінну і приводим рядок до нижнього регістру щоб рядки читались однаково
  const lowerMessage = message.toLowerCase();

// перевіряємо наявність заборонених слів
  if (lowerMessage.includes("spam") || lowerMessage.includes("sale")) {
    
// коли найдено заборонене слово 
    return true;
    
  }
// коли немає забороненого слова
    return false;

}
// перевіряємо результа

  console.log(checkForSpam("Latest technology news")); // false

  console.log(checkForSpam("JavaScript weekly newsletter")); // false

  console.log(checkForSpam("Get best sale offers now!")); // true

  console.log(checkForSpam("Amazing SalE, only tonight!")); // true

  console.log(checkForSpam("Trust me, this is not a spam message")); // true

  console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true

  console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
