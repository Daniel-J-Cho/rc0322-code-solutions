/* exported tail */

function tail(array) {
  var arrayWithoutZero = [];
  for (let i = 1; i < array.length; i++) {
    arrayWithoutZero.push(array[i]);
  }
  return arrayWithoutZero;
}

// Create a new empty array and assign it to a variable declaration.
// Use a for loop and initialize the 'i' variable to 1,
// which will skip the first index of the array.
// Push each index to the newly created empty array.
// Return the new array after the for loop.
