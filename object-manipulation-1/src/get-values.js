/* exported getValues */

function getValues(object, key) {
  var valueArray = [];
  for (const key in object) {
    valueArray.push(object[key]);
  }
  return valueArray;
}

// Access the key in object and return
// the value with the associated key.
