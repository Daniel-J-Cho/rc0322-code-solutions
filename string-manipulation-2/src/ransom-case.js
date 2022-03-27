/* exported ransomCase */

function ransomCase(string) {
  var newString = string.toLowerCase().split('');
  for (let i = 1; i < newString.length; i += 2) {
    newString[i] = newString[i].toUpperCase();
  }
  return newString.join('');
}

// First, convert the string to all lowercase characters.
// Then split the characters into substrings with '' as
// as the argument passed into the 'split' method.
// Assign this to a new variable as an array.
// Use a for loop to uppercase each odd numbered index of the
// new array.
// Use the 'join' method with an empty space ('')
// as the argument passed into 'join' on the new array.
// Return the new string in-line.
