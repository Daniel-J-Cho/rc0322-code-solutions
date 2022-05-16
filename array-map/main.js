const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const double = numbers.map(number =>
  number * 2);
console.log('doubled numbers:', double);

const price = numbers.map(number => {
  return `$${number.toFixed(2)}`;
});
console.log('prices:', price);

const upperCased = languages.map(language =>
  language.toUpperCase());
console.log('languages upper-cased:', upperCased);

const firstLetters = languages.map(language => {
  return language[0];
});
console.log('first letter of each language:', firstLetters);
