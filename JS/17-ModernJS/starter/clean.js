'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);
// budget[0].value = 1000; //This will wrok cuz freeze only freeze first level
const spendingLimits = Object.freeze({
  //freezed object cat be changed, and freeze only the first level of the object(not freeze object inside of the object)
  jonas: 1500,
  matilda: 100,
  stefan: 1000,
});
// spendingLimits.jay = 200;
// console.log(spendingLimits);
const getLimit = (limits, user) => spendingLimits?.[user] ?? 0;
//Pure function(function without side effect(Nothing outside of function affect on its results))
const addExpence = function (
  state,
  limits,
  value,
  description,
  user = 'stefan'
) {
  // if (!user) user = 'stefan';
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // if (value <= limit) {
  //   budget.push({ value: -value, description: description, user: user });
  // }
  // const limit = getLimit(user); //optional chaining
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
  // budget.push({ value: -value, description, user: cleanUser });
};
const newBudget1 = addExpence(budget, spendingLimits, 10, 'Pizza 🍕🍕🍕');
// console.log(newBudget1);
const newBudget2 = addExpence(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpence(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);
//in real world we will use COMPOSING to chain inserts above
const checkExpences = function (state, limits) {
  // for (const entry of newBudget3) {
  //   // const limit = spendingLimits?.[entry.user] ?? 0; //optional chaining
  //   if (entry.value < -getLimit(limits, entry.user)) {
  //     entry.flag = 'limit';
  //   }
  // }
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};
const finalBudget = checkExpences(newBudget3, spendingLimits);

console.log(finalBudget);
//Impure
const logBigExpenses = function (state, bigLimit) {
  // let output = '';
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)}  / ` : '';
  //   // if (entry.value <= -bigLimit) {
  //   //   // output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
  //   //   output += `${entry.description.slice(-2)}  / `; // Emojis are 2 chars
  //   // }
  // }
  // output = output.slice(0, -2); // Remove last '/ '

  // const output = finalBudget.map(entry => {
  //   return entry.value <= -bigLimit
  //     ? (output += entry.description.slice(-2) + ' / ')
  //     : '';
  // });

  const bigExpenses = state
    .filter(entry => {
      return entry.value <= -bigLimit;
    })
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, ''); //use multiple value from one array and create one of them
  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 100);
