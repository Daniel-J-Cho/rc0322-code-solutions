/* exported drop */

function drop(array, count) {
  var newArray = [];
  for (let i = count; i < array.length; i++) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    } else {
      return [];
    }
  }
  return newArray;
}

// Create a new empty array and assign to a newly
// created variable inline.
// Using a for loop, only push indexes after the
// first numbers specified by 'count' onto the newly
// created array.  To do this, set initialization of
// for loop to i = count.
