/* exported compact */

function compact(array) {
  var compactArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === false) {
      continue;
    } else if (array[i] === null) {
      continue;
    } else if (Number.isNaN(array[i])) {
      continue;
    } else if (array[i] === 0) {
      continue;
    } else if (array[i] === undefined) {
      continue;
    } else if (array[i] === '') {
      continue;
    }
    compactArray.push(array[i]);
  }
  return compactArray;
}
