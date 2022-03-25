/* exported isUpperCased */

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

// convert the word argument to upper case and
// compare it to the original word argument in the
// condition of an if statement.  Return true
// if they are stricly equal and return false
// if they are not strictly equal.
