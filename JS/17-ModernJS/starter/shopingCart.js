//exporting module
console.log('Exporting module');

//Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching');

const shipingCost = 10;
export const cart = [];

export const addToCard = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity}${product} added to cart`);
};

const totalPrice = 237;
const totalquantity = 23;

export { totalPrice, totalquantity as tq };

export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity}${product} added to cart`);
}
