/* exported filterOutNulls */

function filterOutNulls(values) {
  var arrayWithoutNulls = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] === null) { continue; }
    arrayWithoutNulls.push(values[i]);
  }
  return arrayWithoutNulls;
}
