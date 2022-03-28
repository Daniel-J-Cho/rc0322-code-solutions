/* exported numVowels */

function numVowels(string) {
  var counter = 0;
  var newString = string.toLowerCase().split('');
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === 'a') {
      counter++;
    } else if (newString[i] === 'e') {
      counter++;
    } else if (newString[i] === 'i') {
      counter++;
    } else if (newString[i] === 'o') {
      counter++;
    } else if (newString[i] === 'u') {
      counter++;
    }
  }
  return counter;
}

// Declare a new counter variable and assign it
// a value of 0.
// Lowercase all letters of 'string' argument.
// Split string into separate characters using
// 'split('') and assign it to a new variable.
// Using a for loop, loop through each character and
// set up 'if else if' statements with comparison conditions
// of each vowel.
// If any character matches a vowel, add 1 to the
// counter variable.
// After loop, return counter.
