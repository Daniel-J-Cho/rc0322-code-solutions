var a = 1;
var b = 2;
var c = 3;

var maximumValue = Math.max(a, b, c);
console.log('maximumValue:', maximumValue);

var heroes = ['Superman', 'Batman', 'Wonder Woman', 'Captain America'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [{ title: 'Post Office', author: 'Charles Bukowski' }, { title: 'Slaughterhouse Five', author: 'Kurt Vonnegut' }, { title: 'Republic', author: 'Plato' }];

var lastBook = library.pop();
console.log('last book of library array:', lastBook);

var firstBook = library.shift();
console.log('first book of libary array:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);
console.log('updated library array:', library);

var fullName = 'Daniel Cho';

var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
