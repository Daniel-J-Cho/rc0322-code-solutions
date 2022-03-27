/* exported takeRight */

function takeRight(array, count) {
  var newArray = [];
  for (let i = array.length - count; i < array.length; i++) {
    if (count > array.length) {
      newArray = array;
    } else if (array === []) {
      newArray = [];
    } else if (array[i] !== undefined) {
      newArray.push(array[i]);
    } else if (array[i] === undefined) {
      newArray.push(undefined);
    }
  }
  return newArray;
}

// Create a new empty array and assign to a new variable.
// Loop through the array passed in and push the last
// 'count' indexes of the array onto the newly created
// empty array.  Do this using an if, else if statement.
// First specify the conditions where if count is larger
// than the length of the array and if array is an empty
// array.
