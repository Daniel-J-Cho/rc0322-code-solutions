/* exported flatten */

function flatten(array) {
  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] !== undefined) {
          newArr.push(array[i][j]);
        } else {
          continue;
        }
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// Create new empty array and assign it
// to a variable.
// Loop through array with for loop.
// Check to see if index 'i' is an
// array with 'Array.isArray(array[i])'.
// If it is, use another for loop to loop
// through sub-array; and if index 'j' is
// not undefined, push [i][j] to new array.
// Else, 'continue' through nested for loop.
// In the else statement of original if statement,
// push index 'i' to new array.
// Return new array.
