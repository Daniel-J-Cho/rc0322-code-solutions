/* exported capitalizeWords */

function capitalizeWords(string) {
  var newString = string.toLowerCase().split(' ');
  for (let i = 0; i < newString.length; i++) {
    newString[i] = newString[i].charAt(0).toUpperCase() +
     newString[i].slice(1);
  }
  return newString.join(' ');
}

// Lowercase all letters of 'string'.
// Split up all the words of the string using 'split'
// and (' ') as its argument.
// Assign the new array of substrings into a new variable.
// Loop through each substring and uppercase first letter
// of every word using charAt() and 0 as its argument.
// Slice the rest of the characters and concatenate it to
// the first uppercased character.
// Return result and join word indexes together using
// join(' ').
