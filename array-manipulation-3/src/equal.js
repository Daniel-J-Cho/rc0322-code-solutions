/* exported equal */

function equal(first, second) {
  if (JSON.stringify(first) === JSON.stringify(second)) {
    return true;
  } else {
    return false;
  }
}

// Convert both first and second arrays
// to JSON strings using JSON.stringify.
// Compare them inside the condition of an
// if statement and a strictly equals operator.
// If they are equal, return true.
// Else, return false.
