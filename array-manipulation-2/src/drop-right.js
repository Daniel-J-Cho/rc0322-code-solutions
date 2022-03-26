/* exported dropRight */

function dropRight(array, count) {
  var newArray = [];
  for (let i = 0; i < array.length - count; i++) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    } else if (array === []) {
      newArray = [];
    }
  }
  return newArray;
}
