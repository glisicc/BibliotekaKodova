'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tab = document.querySelectorAll('.operations__tab');
const tabscontainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const headerTitle = document.querySelector('.header__title');
const bars = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-close');
//otvori prozor
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//zatvori prozor
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//svi elementi koji imaju tu klasu dodeljuje im se akcija
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
//dodaj akciju na dugme
btnCloseModal.addEventListener('click', closeModal);
//klikom na praznu povrsinu zatvori prozor
overlay.addEventListener('click', closeModal);

//klikom na ESC zatvori prozor
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////// BTN SCROLING
//skrolaj na odredjeni sektor klikom na element
btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (X,Y)', window.pageXOffset, pageYOffset);

  // console.log(
  //   'Height, width',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  //scrolling
  //scrolling
  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // // );
  // window.scrollTo({
  //   ledt: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  //moderno skrolanje
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});
////////////////////////
//Page navigation
//Ovaj nacin moze biti jako zahtevan ako imamo dosta elemenata kojima dajemo klasu
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//na ovaj nacim se ne daje svim elementima klasa, vec samo onom na koga u tom trenutku kliknemo
//1. Add even listener to common parent element
//umesto konkretnom elementu, event dodeljujemo njegovi=om parentu
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault(); //preventujemo difoltni skrol
  //Matching
  //2. Determine what element originated the event
  //Na ovaj nacim se ogradjujemo da se odnositi samo na konkretan element
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); //e.target je kliknuti element i od njega uzimamo href atribut koji je ujedno i naziv sekcije na koju zelimo da skrolamo
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); //selektujemo tu sekciju i skrolamo smooth na nju
  }
});

//////////////////
//////////////////
//////////////////
//creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookie to improve functionality ald analytics.';
//pripremimo html kod
message.innerHTML =
  'We use cookie to improve functionality ald analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);
//odredimo gde ce se umetnuti
header.append(message);
//delete element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

///////////////////
///////////////////
///////////////////
//tabbed controler
//losa praksa
// tab.forEach(f =>
//   f.addEventListener('click', function () {
//     console.log('object');
//   })
// );
tabscontainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //guard clause
  if (!clicked) return;
  //active tab
  tab.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  //activate content area
  console.log(clicked.dataset.tab);
  //remove all content
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

////////////////
////////////////
////////////////
///Menu fade animation
const handleHover = function (e) {
  // console.log(e);
  // console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibilings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sibilings.forEach(el => {
      if (el !== link) el.style.opacity = this; //this je ustvari vrednosti iz zagrade kada je pozovemo (e), ali nije jednaka vrednosti e vrednost MouseEventa
    });
    logo.style.opacity = this;
  }
};
//passing "argument into handler"
//na ovaj nacin dodajemo argument u event handler, i taj argument pozivamo sa this
//bind koristimo jer funkcija addEventListener zahteva da se pozove funkcija i ne bi radilo kada bismo samo prosledili varijablu hangleHover
//
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//////////////
//////////////
//////////////
// //sticky navigarion
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// });
//Sticky navigation: Intersection observer API
// const obsCallBack = function (enteris, observer) {
//   enteris.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (enteries) {
  const [entry] = enteries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
////////////////////////
////////////////////////
////////////////////////
//Reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
////////////////////
////////////////////
////////////////////
///lazy load images
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);
const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  ///replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));
//////////////////
//////////////////
//////////////////
//////////////////
///SLIDER
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  const slider = document.querySelector('.slider');
  const numSlide = slides.length;
  let currentSlide = 0;
  ////FUNCTIONS
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  //0,100,200...%
  const nextSlide = function () {
    if (currentSlide === numSlide - 1) {
      currentSlide = 0;
    } else currentSlide++;
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = numSlide - 1;
    } else currentSlide--;

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };
  const init = function () {
    createDots();
    goToSlide(0);
    activateDot(0); //na pocetku postavi aktivnu
  };
  init();
  ////EVENT HANDLERS
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    // if (e.key === 'ArrowLeft') prevSlide();//radi isto kao ovo dole
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      // console.log(slide);
      // const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

////////////////////
////////////////////
////////////////////
////////////////////
//REspone
bars.addEventListener('click', () => {
  document.querySelector('.nav__links').style.width = '200px';
  document.querySelector('.fa-close').style.display = 'block';
});
close.addEventListener('click', () => {
  document.querySelector('.nav__links').style.width = '0px';
  document.querySelector('.fa-close').style.display = 'none';
});
//Response
//Rotate elements
const moveUp = document.querySelector('.move-up');
const moveDown = document.querySelector('.move-down');
let frameWidth = window.innerWidth;
const resizeObserver = new ResizeObserver(enteries => {
  enteries.forEach(entry => {
    frameWidth = entry.contentRect.width;
  });
});
window.onresize = function () {
  frameWidth = window.innerWidth;
  console.log(frameWidth);
  if (frameWidth < 960) {
    moveUp.style.transform = `translateY(${-moveDown.getBoundingClientRect()
      .height}px)`;
    moveDown.style.transform = `translateY(${
      moveUp.getBoundingClientRect().height
    }px)`;
  } else {
    moveUp.style.transform = `translateY(${0}px)`;
    moveDown.style.transform = `translateY(${0}px)`;
  }
};
/*
//Selectiong elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
document.querySelector('.headre');
const allSelctions = document.querySelector('.section');
console.log(allSelctions);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
document.getElementsByClassName('btn');


//style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
logo.alt = 'Kreirani alt';
console.log(logo.alt);

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));
//Data attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes
//Don't use this below
logo.classList = 'stefan';
*/

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('addEvent ');
//   h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEvent ');
// });
// h1.onmouseenter = function (e) {
//   alert('addMouse  ');
// };
/*
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); //ukini event nakon 3 sekundi

//random color
const randomInt = (min, max) =>
Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
`rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('nav', e.target, e.currentTarget);
});
///DOM TRAVERSING
const h1 = document.querySelector('h1');
//doing downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'black';

//doing upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

//going sideways: sibilings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    // el.style.transform = 'scale(0.5)';
  }
});
*/
document.addEventListener('DOMContentLoaded', function (e) {});
