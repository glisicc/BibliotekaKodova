let country = "Serbia";
let continent = "Europe";
let population = 7500000;
let isItLand = true;
const language = "serbian";
// language = "german"; this wont word

let logPring = country + " " + continent + " " + population + " " + isItLand + " " + language;

console.log(logPring);

let halfPopulation = population / 2;
console.log("half population: " + halfPopulation);
population++;
console.log("incrased population: " + population);
let finland = 6000000;
let isTrue = population > finland;
console.log("is serbian population greater finlands? :" + isTrue);
let averagePopulation = 33000000;
isTrue = population > averagePopulation;
console.log("is serbian population greater then average population? :" + isTrue);
let description = `${country} is in ${continent}, and its ${population / 1000000} million people speak ${country}'s`;
console.log(description);

if (isTrue) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} milions below average!`);
}


console.log('9' - '5'); //4
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log('19' - '13' + '17'); //617
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// const numNeighbours = prompt("How many neighbour countries does your country have?");
const numNeighbours = 1;
if (numNeighbours == 1) {
    console.log("Only one neighbours!");
} else if (numNeighbours > 1) {
    console.log("More than one neihbours!");
} else if (numNeighbours == 0) {
    console.log("No neighbours!");
} else {
    console.log("Invalid insert.");
}

switch (language) {
    case "chinese": console.log("MOST number of native speakers!"); break;
    case "spanish": console.log("MOST number of native speakers!"); break;
    case "hindi": console.log("MOST number of native speakers!"); break;
    case "arabic": console.log("MOST number of native speakers!"); break;
    default: console.log("Great language too!!"); break;
}

const ternary = population >= 30000000 ? `${country}'s population is above average` : `${country}'s population is ${averagePopulation - population} milions below average!`;

console.log("TERNARY RESULT: " + ternary);