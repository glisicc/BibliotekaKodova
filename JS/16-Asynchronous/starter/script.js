'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
const _renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   //country 1
//   getJSON(`https://restcountries.com/v2//name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour);
//       //country 2
//       return getJSON(
//         `https://restcountries.com/v2//alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.log(`${err.message}. Try again 🎉🎉🎉`); //stavljanjem catch na kraj chaina hvatamo sve greske(dok takodje mozemo da stavljamo error funkcije na svaki json())
//       renderError(`Something went wrong. ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('serbia');
// });

// // // const getCountryAndNeighbour = function (country) {
// // //   //AJAX call country 1
// // //   const request = new XMLHttpRequest();
// // //   request.open('GET', `https://restcountries.com/v2//name/${country}`);
// // //   request.send();

// // //   request.addEventListener('load', function () {
// // //     const [data] = JSON.parse(this.responseText);
// // //     console.log(data);
// // //     renderCountry(data);

// // //     //Get neighbour country (2)
// // //     const [neighbour] = data.borders;

// // //     if (!neighbour) return;
// // //     const request2 = new XMLHttpRequest();
// // //     request2.open('GET', `https://restcountries.com/v2//alpha/${neighbour}`);
// // //     request2.send();

// // //     request2.addEventListener('load', function () {
// // //       const data2 = JSON.parse(this.responseText);

// // //       renderCountry(data2, 'neighbour');
// // //     });
// // //   });
// // // };

// // // getCountryAndNeighbour('serbia');

// // //AJAX call country 1
// // // const request = new XMLHttpRequest();
// // // request.open('GET', `https://restcountries.com/v2//name/${country}`);
// // // request.send();

// // // const request = fetch('https://restcountries.com/v2//name/serbia');
// // // console.log(request);

// // // const getCountryData = function (country) {
// // //   //country 1
// // //   fetch(`https://restcountries.com/v2//name/${country}`)
// // //     .then(response => {
// // //       if (!response.ok) {
// // //         throw new Error(`Country not found (${response.status})`);
// // //       }

// // //       return response.json();
// // //     })
// // //     .then(data => {
// // //       renderCountry(data[0]);
// // //       const neighbour = data[0].borders[0];

// // //       if (!neighbour);
// // //       //country 2
// // //       return fetch(`https://restcountries.com/v2//alpha/${neighbour}`);
// // //     })
// // //     .then(response => {
// // //       if (!response.ok) {
// // //         throw new Error(`Country not found (${response.status})`);
// // //       }
// // //       return response.json();
// // //     })
// // //     .then(data => renderCountry(data, 'neighbour'))
// // //     .catch(err => {
// // //       console.log(`${err.message}. Try again 🎉🎉🎉`); //stavljanjem catch na kraj chaina hvatamo sve greske(dok takodje mozemo da stavljamo error funkcije na svaki json())
// // //       renderError(`Something went wrong. ${err.message}`);
// // //     })
// // //     .finally(() => {
// // //       countriesContainer.style.opacity = 1;
// // //     });
// // // };
// // // btn.addEventListener('click', function () {
// // //   getCountryData('serbiaa');
// // // });

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening...');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WINN🎉');
//     } else {
//       reject(new Error('You LOST your money😒'));
//     }
//   }, 2000);
// });

// // // lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
// // // //promisifying setTimeout
// // // const wait = function (secounds) {
// // //   return new Promise(function (resolve) {
// // //     setTimeout(resolve, secounds * 1000);
// // //   });
// // // };

// // // wait(2)
// // //   .then(() => {
// // //     console.log('I waited for 2 secound');
// // //     return wait(1);
// // //   })
// // //   .then(() => console.log('I waited for 1 secounds'));

// // // Promise.resolve('abc').then(x => console.log(x));
// // // Promise.reject(new Error('abc')).catch(x => console.error(x));

// // // console.log('getting position...');

// // const getPosition = function () {
// //   return new Promise(function (resolve, reject) {
// //     // navigator.geolocation.getCurrentPosition(position => {
// //     //   return resolve(position), err => reject(err);
// //     // });
// //     navigator.geolocation.getCurrentPosition(resolve, reject); //same as code ahead
// //   });
// // };

// // getPosition().then(pos => console.log(pos));

// // const renderCountry = function (data, className = '') {
// //   const html = `
// //   <article class="country ${className}">
// //     <img class="country__img" src="" />
// //     <div class="country__data">
// //       <h3 class="country__name">${data.official_name}</h3>
// //       <h4 class="country__region">${data.capital}</h4>
// //       <p class="country__row"><span>👫</span>${data.area.toFixed(1)} people</p>

// //       <p class="country__row"><span>🗣️</span>${
// //         data.languages
// //           ? data.languages[Object.keys(data.languages)[0]]
// //           : 'Nedefinisano'
// //       }</p>
// //       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //     </div>
// //   </article>
// //   `;
// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// // };

// // const whereAmI = function () {
// //   // const params = {
// //   //   access_key: 'b36c8efd871ea6c8e65a62c76084075c',
// //   //   query: '1600 Pennsylvania Ave NW',
// //   // };
// //   // fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// //   getPosition()
// //     .then(pos => {
// //       const { latitude: lat, longitude: lng } = pos.coords;
// //       return fetch(
// //         `http://api.positionstack.com/v1/reverse?access_key=b36c8efd871ea6c8e65a62c76084075c&query=${lat},${lng}&limit=1&country_module=1`
// //       );
// //     })
// //     .then(response => {
// //       if (!response.ok) {
// //         throw new Error(`Problem with API (${response.status})`);
// //       }
// //       return response.json();
// //     })
// //     .then(data => {
// //       renderCountry(data.data[0].country_module);
// //     })
// //     .catch(err => {
// //       console.log(`${err.message}. Try again 🎉🎉🎉`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// // whereAmI();
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(position => {
//     //   return resolve(position), err => reject(err);
//     // });
//     navigator.geolocation.getCurrentPosition(resolve, reject); //same as code ahead
//   });
// };

const whereAmI = async function (country) {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    //Reverse geocoding
    const resGeo = await fetch(
      `http://api.positionstack.com/v1/reverse?access_key=b36c8efd871ea6c8e65a62c76084075c&query=${lat},${lng}&limit=10&country_module=1$type='venue'`
    );
    if (!resGeo.ok) throw new Error('Problem with getting geo location!');
    const dataGeo = await resGeo.json();
    //Country data
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    if (!res.ok) throw new Error('Problem with getting Country!');
    const data = await res.json();
    _renderCountry(data[0]);
    return `2: You are in ${res.country}`;
  } catch (err) {
    console.error(err.message);

    //Reject promise from async function
    throw err;
  }
};
// console.log('1: I will get location');
// // const city = whereAmI('serbia');
// // console.log(city);
// // whereAmI('serbia')
// // .then(city => console.log(city))
// // .catch(err => console.log(`2: ${err.message}`))
// // .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const location = await whereAmI('serbia');
//     console.log(location);
//   } catch (err) {
//     console.log(`2: ${err.message}`);
//   }
//   console.log('3: Finished getting location');
// })();

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.log(err);
//   }
// };

// get3Countries('serbia', 'ukrain', 'spain');

//Promise.race

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/serbia`),
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();
// console.log('dasas');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!!'));
    }, s * 1000);
  });
};

// Promise.race([
//   getJSON(`https://restcountries.com/v2/name/serbia`),
//   timeout(0.15),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// //Promise.allSetled
// Promise.allSettled([
//   Promise.resolve('success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('success'),
// ]).then(res => console.log(res));

//Promise.any[ES2021]
Promise.any([
  Promise.resolve('success1'),
  Promise.reject('ERROR'),
  Promise.resolve('success2'),
]).then(res => console.log(res));
