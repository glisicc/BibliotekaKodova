'use strict';

function desccribeCountry(country, population, capitalCity) {
    const text = `${country} has ${population} milion people and its capital city is ${capitalCity} `;
    return text;
}
const serbia = desccribeCountry("Serbia", 7, "Belgrade");

console.log(serbia);

// Declaration and Expression

function precentageOfWorld1(populationOfSomeCountry) {
    const value = populationOfSomeCountry / worldPopulation * 100;
    return value;
}
const worldPopulation = 7900;
console.log(precentageOfWorld1(7));

//expresson
const percentage = function precentageOfWorld2(populationOfSomeCountry) {
    const value = populationOfSomeCountry / worldPopulation * 100;
    return value;
}
console.log(percentage(7));

const arrowPercentage = populationOfSomeCountry => populationOfSomeCountry / worldPopulation * 100;

console.log("With arrow function: " + arrowPercentage(7));

//function calling other function

function describeFunction(country, population) {
    const percentage = precentageOfWorld1();
    const value = console.log(`${country} has ${population} milion people, which is ${precentageOfWorld1(population).toFixed(3)}% of the world`);
    return value;
}

describeFunction("Serbia", 7);

//Introduction to Object

const myCountry = {
    country: "Serbia",
    capital: "Belgrade",
    language: "serbian",
    population: 7000000,
    neighbours: ["Montenegro", "Bosnia & Herzegovina", "Croatia", "Hungary", "Romania", "Bulgaria", "North Macedonia", "Albania"],
    eu: false,
    getSummary: function chalengeString() {
        if (this.eu) {
            return `${this.country} have ${this.population} populations, and she is in Eu`;
        } else {
            return `${this.country} have ${this.population} populations, and she is't in Eu`;
        }
    }
};

console.log(myCountry);
myCountry.population = myCountry.population - 2000000;
myCountry['population'] = myCountry['population'] + 2000000;
console.log(`${myCountry.country} has ${myCountry.neighbours.length} neighbours, and his best friend is ${myCountry.neighbours[0]}`);
console.log(myCountry.getSummary());

for (let index = 0; index < 11; index++) {
    let element = Math.floor(Math.random() * 11);
    console.log(`Voter number ${index} is voting with: ${element}`);
}

const listOfNeighbour = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let index = 0; index < listOfNeighbour.length; index++) {
    for (let index2 = 0; index2 < listOfNeighbour[index].length; index2++) {
        console.log(listOfNeighbour[index][index2]);
    }
}

