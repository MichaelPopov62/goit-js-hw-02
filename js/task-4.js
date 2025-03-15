'use strict'

// оголошуємо функцію
  function getShippingCost(country) {

// створюємо змінні
  const userCountry = country;
  let cost;

//перевіряємо можливість виконання  умов доставкі
  switch (userCountry) {
    case "China":
      cost = 100;
      break;
    case "Chile":
      cost = 250;
      break;
    case "Australia":
      cost = 170;
      break;
    case "Jamaica":
      cost = 120;
      break;
// якщо краіна не визначена 
    default:
// повертаєм при невизначеноі краіні
      return `Sorry, there is no delivery to your country: ${userCountry}`;
    }
 // повертаєм результат коли краіна відома   
      return `Shipping to ${userCountry} will cost ${cost} credits`;
}

// перевіряємо і виводим результат
  
  console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
  
  console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country: Germany"
  
  console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
  
  console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
  
  console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
  
  console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country: Sweden"
  
