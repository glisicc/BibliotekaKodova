// //imoprting module
// // import { addToCard, totalPrice as price, tq } from './shopingCart.js';
// console.log('Importing module...');

// // addToCard('bread', 5);

// // console.log(price, tq);

// import * as ShoppingCart from './shopingCart.js';

// ShoppingCart.addToCard('corn', 54);
// console.log(ShoppingCart.totalPrice);

// //default import

import add, { cart } from './shopingCart.js';

add('pizza', 1);
add('pizza 2', 3);
add('pizza 3', 2);
// add('pizza 4', 1);

console.log(cart);
// // console.log('start fatching');
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// // const data = await res.json();

// // console.log(data);

// // console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// // not very clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 270;
//   const totalQuantity = 23;

//   const addToCard = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   return {
//     addToCard,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCard('apple', 4);

//Export
// export.addToCard = function (product, quantity) {
//         cart.push(product, quantity);
//         console.log(`${quantity} ${product} added to cart`);
// };

// //Import
// const {addToCard} = require('./shopingCart.js');

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es'; //kada koristimo parcle

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 15 },
  ],
  user: { loggedIn: true },
};
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);

if (module.hot) {
  module.hot.accept(); //using this method web page wont be reload on save, just part which is changed
}

class Person {
  greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonas = new Person('jonas');

console.log('joans' ?? null);
console.log(cart.find(el => el.quantity >= 2));

import 'core-js/stable';
