/* exported includes */

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// Using a for loop, compare each index of array
// to value with strictly equal operator and if statement.
// If the index and value are strictly equal,
// return true.  If array does not have index that
// stricly equals value, return false.
