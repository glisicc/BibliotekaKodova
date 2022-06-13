'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  //ES5
  //   numPassenger = numPassenger || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LD3213', 2, 800);
createBooking('LD3213', 2);
createBooking('LD3213', undefined, 5);

const flight = 'H3121';
const stefan = {
  name: 'Stefan Glisic',
  passport: 3123213,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LK999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport == 3123213) {
    alert('Check In');
  } else {
    alert('Wrong Passport!!');
  }
};
checkIn(flight, stefan);
console.log(flight);
console.log(stefan);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(jonas);
checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformer string: ${fn(str)}`);
  console.log(`Transformer by: ${fn.name}`);
};
transformer('Java Script is the best!', upperFirstWord);
transformer('Java Script is the best!', oneWord);

const hign5 = function () {
  console.log('🎉');
};
document.body.addEventListener('click', hign5);
['jonas', 'marta', 'stefan'].forEach(hign5);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Stefan');

greet('hello')('Stefan');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Arrow')('Stefan');
*/
///CALL MANIPULATIONG THIS KEY WORD
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //book: function(){}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       flights: `${this.iataCode}${flightNum}`,
//       name,
//     });
//   },
// };
// lufthansa.book(239, 'Stefan');
// lufthansa.book(240, 'Nikola');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// //Does not worl
// //book(23, 'Sara');

// book.call(eurowings, 23, 'Sara');
// console.log(eurowings);

// const swiss = {
//   airline: 'Swiss air',
//   iataCode: 'SW',
//   bookings: [],
// };

// book.call(swiss, 548, 'Lazar');

// const flightData = [454, 'marko'];
// book.apply(swiss, flightData);
// book.call(swiss, ...flightData);

// //Bind method
// const bookEW = book.bind(eurowings);
// const bookSW = book.bind(swiss);
// const bookLU = book.bind(lufthansa);
// bookEW(23, 'Stefan2');
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Stefan 3');
// bookEW23('Stefan 4');

// //With Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partioal application
// const addtax = (rate, value) => value + value * rate;
// console.log(addtax(0.1, 200));

// const addVAT = addtax.bind(null, 0.23);
// console.log(addVAT(300));
// console.log(addVAT(450));

// const addTacRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTacRate(0.33);
// console.log(addVAT2(100));
/*
const runOnce = function () {
  console.log('This will newer run again');
};

runOnce();

(function () {
  console.log('This will newer run again');
})();

(() => console.log('Samo jednom'))();

{
  const isPrivate = 10;
  var notPrivate = 10;
}
console.log(notPrivate);
*/
//CLOSURES
//Examppe 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
//re-assigning f
h();
f();

console.dir(f);
//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are boarding all ${n} passengers`);
    console.log(`There are 3 gorups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} secounds`);
};
boardPassengers(180, 3);
