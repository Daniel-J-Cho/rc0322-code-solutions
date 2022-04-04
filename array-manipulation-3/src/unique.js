/* exported unique */

function unique(array) {
  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!(newArr.includes(array[i]))) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// Create a new array and assign it
// to a variable.
// Use a for loop to loop through 'array'
// parameter. Use an if statement to check
// if new array includes 'i' at 'array'.
// To exclude indexes that have already been
// added to new array, use a bang operator
// in front of the condition of if statement
// to exclude duplicates.
// If the item is not a duplicate, push
// 'array[i]' to new array.
// Return new array.
