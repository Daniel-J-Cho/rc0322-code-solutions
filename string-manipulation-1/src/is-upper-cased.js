/* exported isUpperCased */

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

// convert each character of the word argument to
// uppercase one by one and compare them to their
// original state.  Do all this using a for loop.
