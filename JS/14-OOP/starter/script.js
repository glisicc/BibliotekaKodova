'use strict';
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const stefan = new Person('Stefan', 1999);
console.log(stefan);
//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = 'Jaz';
console.log(matilda, jack);
console.log(stefan instanceof Person);

Person.hey = function () {
  console.log('Hey there🙌');
};
Person.hey();
*/
/*
///////////////
///////////////
///////////////
//PROTOTYPE
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

stefan.calcAge();
console.log(stefan.__proto__);
console.log(Person.prototype.isPrototypeOf(stefan));

Person.prototype.species = 'Homo Sapiens';
console.log(stefan);
console.log(stefan.hasOwnProperty('firstName'));

console.log(stefan.__proto__);
console.log(stefan.__proto__.__proto__);
console.log(stefan.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 3, 5, 46, 8, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
//create new proto on predefined object
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/
//class expession
// const PersonCl = class{}
// //class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }
//   //set a property that alredy exist
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   //static Method
//   static hey() {
//     console.log('Hey there');
//   }
// }
// const sokli = new PersonCl('Stefan Glisic', 1999);
// console.log(sokli.age);
// console.log(sokli);
// sokli.calcAge();
// console.log(sokli.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };
// sokli.greet();
// PersonCl.hey();

// //1. CLasses are NOT HOISTED
// //2. Class are first-class citizen
// //3. Classes are executed in strict mode

// const walter = new PersonCl('Walter', 1995);

// const account = {
//   owner: 'stefann',
//   movements: [200, 532, 155, 45],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// const PErsonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(name, birth) {
//     this.name = name;
//     this.birthYear = birth;
//   },
// };
// const steven = Object.create(PErsonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__);

// const sara = Object.create(PErsonProto);
// sara.init('Sara', 2000);
// sara.calcAge();
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 1999, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  
  get age() {
    return 2022 - this.birthYear;
  }
  //set a property that alredy exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  //static Method
  static hey() {
    console.log('Hey there');
  }
}
class Student extends PersonCl {
  constructor(firstName, birthYear, course) {
    //Alvays need to happen first
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(`I'm ${2022 - this.birthYear} old `);
  }
}
const martha = new Student('martha jones', 2012, 'computer science');
martha.introduce();
martha.calcAge();
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

//Public fields
//Private fields
//Public methods
//Private methods
//Also there is static method
/*
class Account {
  //Public fields(instances)
  locale = navigator.language;

  //Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.localee = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  //Public Methods
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdrow(val) {
    this.deposit(-val);
    return this;
  }
  // _approvelan() {
  //   return true;
  // }
  //Private methods
  #approvelan() {
    return true;
  }
  requestloan(val) {
    if (this.#approvelan) {
      this.deposit(val);
      console.log('Approved');
      return this;
    }
  }
}

const acc1 = new Account('Stefan', 'EUR', 1111);

acc1.deposit(100);
acc1.withdrow(200);
acc1.requestloan(1000);
console.log(acc1.getMovements());
console.log(acc1);
// console.log(acc1.#Movements);
// console.log(acc1.#approvelan());

//Chaining
acc1.deposit(300).deposit(100).withdrow(800).requestloan(25000).withdrow(4000);
console.log(acc1);
*/
const background = document.querySelector('body');
const main = '013764';
//Function 1
// function LightenDarkenColor(col, amt) {
//   col = parseInt(col, 16);
//   return (
//     ((col & 0x0000ff) + amt) |
//     ((((col >> 8) & 0x00ff) + amt) << 8) |
//     (((col >> 16) + amt) << 16)
//   ).toString(16);
// }
//Function 2
function ColorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = '',
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
}
console.log(ColorLuminance(main, 1.45));
// TEST
// console.log(LightenDarkenColor(main, 111));
// const performed = ColorLuminance(main, 1.27);
const performed = '237FCE';
background.style.background = `linear-gradient(to bottom right, #${main}, #${performed})`;
