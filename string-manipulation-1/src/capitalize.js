/* exported capitalize */

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// Capitalize the first character of the word argument.
// Lowercase the rest of the characters of the word argument.
// Concatenate the upper-cased first character and the
// lowercased characters and return the newly formed string.
