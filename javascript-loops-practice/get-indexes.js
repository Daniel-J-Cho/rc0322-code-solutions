/* exported getIndexes */

function getIndexes(array) {
  var indexes = [];
  for (let i = 0; i < array.length; i++) {
    indexes.push(array.indexOf(array[i]));
  }
  return indexes;
}
