/* exported take */

function take(array, count) {
  var newArray = [];
  for (let i = 0; i < count; i++) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    } else {
      return [];
    }

  }
  return newArray;
}

// Create a new empty array and assign it to a variable
// declaration.
// Using a for loop, push the first 'count' indexes
// of the array onto the newly created empty array.
// If the first 'count' value(s) is undefined,
// return an empty array.
