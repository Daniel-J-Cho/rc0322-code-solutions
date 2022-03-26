/* exported takeRight */

function takeRight(array, count) {
  var newArray = [];
  for (let i = -count; i >= 0; i--) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    } else if (count > array.length) {
      newArray = array;
    } else if (array === []) {
      newArray = [];
    }
  }
  return newArray;
}

// Create a new empty array and assign to a new variable.
// Loop through the array passed in and push the last
// 'count' indexes of the array onto the newly created
// empty array.  Do this using the 'at()' method passing in
// the negative version of the 'count' argument.
