/* exported filterOutStrings */

function filterOutStrings(values) {
  var arrayWithoutStrings = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === typeof 'string') { continue; }
    arrayWithoutStrings.push(values[i]);
  }
  return arrayWithoutStrings;
}
