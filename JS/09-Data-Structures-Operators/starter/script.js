'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(straterIndex, mainindex) {
    return [this.starterMenu[straterIndex], this.mainMenu[mainindex]];
  },
  orederdelivery({ straterIndex = 1, mainindex = 0, time, address }) {
    //vrsi dekonstrukciju u trenutku prijema i iz tog razloga su ista imena kao u kreiranom objektu
    console.log(
      `Order recived! ${this.starterMenu[straterIndex]} and ${this.mainMenu[mainindex]} will be delivered to ${address} at ${time}`
    );
  },
  orederpasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//
for (const row of flights.split('+')) {
  const [type, from, to, time] = row.split(';');
  const output = `
  ${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} ( ${time.replace(':', 'h')})`.padStart(36, '-');
  console.log(output);
}

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seta) {
//   //B and E are middle seat
//   const s = seta.slice(-1);
//   if (s == 'B' || s == 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('45E');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //fix capitalization
// const passenger = 'GersN';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
// //comparing email
// const email = 'hello@stefan.com';
// const loginEmail = 'Hello@stefan.COm \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(email === normalizedEmail);

// //replacing
// const priceRS = '288,9,7RSD';
// const priceUS = priceRS.replace('RSD', '$').replaceAll(',', '.');
// console.log(priceUS);

// const plane1 = 'A320neo';
// console.log(plane1.includes(' '));

// console.log('a+nice+very+string'.split('+'));
// const [a, b, c, d] = 'a+nice+very+string'.split('+');
// console.log(b, c.toUpperCase());

// //padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '-'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(1232142154144));
// console.log(maskCreditCard('122423423424244'));

// //repeat

// const message2 = 'Bad weather... All departues Delayed';
// console.log(message2.repeat(5));

// const question = new Map([
//   ['question', 'What is the best programmin lagnuage in the World?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct🙌'],
//   [false, 'Try Again🙌'],
// ]);
// console.log(question);
// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));
// //Ocnvert map to array
// console.log([...question]);

// // const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firence, Italy');
// rest.set(2, 'Lisabon, Portugal');
// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
// rest.set(document.querySelector('h1'), 'Heading');
// rest.set([1, 2], 'Test');
// console.log(rest);

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet);

// console.log(new Set('Joanas'));
// console.log(orderSet.has('Pizza'));
// orderSet.add('Garlic Brad');
// console.log(orderSet);

// for (const order of orderSet) {
//   console.log(order);
// }

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// const properties = Object.keys(openingHours);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property values
// const values = Object.values(openingHours);
// console.log(values);
// //Entire objects
// const enteries = Object.entries(openingHours);
// console.log(enteries);

// for (const [key, { open, close }] of enteries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// //WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// const users = [{ name: 'Jonas', email: 'stefang@comit.co.rs' }];
// console.log(users[0]?.name ?? 'Dont exist');
// //example

// //for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

// // for (const item of menu.entries()) {
// //   console.log(`${item[0] + 1}: ${item[1]}`);
// // }
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// console.log([...menu.entries()]);
// const arr = [7, 8, 9];
// const newArray = [1, 2, ...arr];
// console.log(newArray);
// console.log(...newArray);

// const newmenu = [...restaurant.mainMenu, 'Pasulj'];
// console.log(newmenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Stefan';
// const letter = [...str, ' ', 'S.'];
// console.log(letter);

// //oreder pasta
// const ingredients = [
//   // prompt('Let s make pasta! Ingredient 1'),
//   // prompt('Let s make pasta! Ingredient 2'),
//   // prompt('Let s make pasta! Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orederpasta(...ingredients);

// //Object
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Stefan' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'kod Milutina';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// //REST OPERATOR
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(a, b, other);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours; //exclude sat from object and show only rest days
// console.log(weekdays);

// //2) Functions rest
// const add = function (...numbers) {
//   let sum = 0;
//   for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index];
//   }
//   console.log(numbers, sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(4, 8, 9, 1, 3, 8);
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olivies', 'spinach');
// restaurant.orderPizza('mushrooms');

// restaurant.numGuests = 23;
// const guest = restaurant.numGuests || 10;
// console.log(guest);

// restaurant.orderPizza && restaurant.orderPizza('kecap', 'pecurke');

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni',
// };

// rest2.numGuests ||= 10;
// rest1.numGuests ||= 10;
// console.log(rest2);
// console.log(rest1);
// restaurant.orederdelivery({
//   time: '22:30',
//   adsress: 'Beograd',
//   mainindex: 2,
//   straterIndex: 2,
// });
// restaurant.orederdelivery({
//   time: '22:35',
//   adsress: 'Beograd 2',
//   straterIndex: 2,
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);
// //MUTATING VARIABLES
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //NESTED object
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);
//DESTRUCTURING ARRAYS
// let [first, , secound] = restaurant.categories;
// console.log(first, secound);
// [first, secound] = [secound, first]; //switching variable value
// console.log(first, secound);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const nested = [2, 3, 4, [6, 7]];
// // const [i, , , j] = nested;
// // console.log(i, j);
// //nested
// const [i, , , [j, k]] = nested;
// console.log(i, j, k);

// //default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
