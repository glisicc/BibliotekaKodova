'use strict';

function calcAge(birthYear) {
  const age = 2021 - birthYear;
  console.log(this);
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;

    if (birthYear >= 1998) {
      var millenial = true;
      const firstName = 'Mile';
      const str = `Oh, you are a millenial, ${firstName}`; //uzece variablu iz svog skopa
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW IOUTPUT';
    }
    console.log(millenial);
    // console.log(add(6, 3)); ne radi u script modu
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Stefan';
calcAge(1999);

// console.log(this);
const calcAge2 = function (birthYear) {
  const age = 2021 - birthYear;
  console.log(this);
};
const calcAgeArrow = birthYear => {
  const age = 2021 - birthYear;
  console.log(this);
};
calcAgeArrow(2014);

const joans = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
    //const self = this; //self pr that
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //console.log(this.year >= 1981 && this.year <= 1996); this key word nece u ovom slucaju raditi jer je potrebno da gleda u parent scope
    // };
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
      //console.log(this.year >= 1981 && this.year <= 1996); this key word nece u ovom slucaju raditi jer je potrebno da gleda u parent scope
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
joans.greet();
joans.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 3);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Stfean',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('friend', friend);
console.log('me', me);
