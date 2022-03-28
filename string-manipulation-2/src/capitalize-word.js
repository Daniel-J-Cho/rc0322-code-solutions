/* exported capitalizeWord */

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return word[0].toUpperCase() + word.slice(1, 4).toLowerCase() +
    word[4].toUpperCase() + word.slice(5).toLowerCase();
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}

// Capitalize first letter of the argument
// passed in as 'word'.
// Lowercase all letters of 'word' after
// first letter.  Concatentate the capitalized
// first letter with the lowercased letters.
// If 'word' is 'javascript' with any combination
// of upper and lower-case letters, convert it to
// lowercase and use strictly equal operator against
// 'javascript' in the condition of an if statement.
